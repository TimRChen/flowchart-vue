<template>
  <div class="graph-show-container">
    <div
      class="tip-block"
      :class="{ 'tip-close': closeTip }"
      v-show="showTip !== 0"
      :style="{ transform: 'translate(' + tipX + 'px,' + tipY + 'px)' }"
    >
      <div class="title">节点参数</div>
      <div class="attr-block">
        <div class="attr">
          <div class="head">节点信息</div>
          <div class="content">无</div>
        </div>
      </div>
    </div>

    <div class="svg-box" v-show="svgReady">
      <svg
        class="zone"
        preserveAspectRatio="xMinYMin meet"
        @mouseup="closeNodeInfoTip"
      >
        <defs>
          <marker
            id="mark-arrow"
            viewBox="0 0 11 11"
            refX="8"
            refY="6"
            markerWidth="10"
            markerHeight="10"
            orient="auto"
          >
            <path d="M1,2 L8,6 L1,10 Z" />
          </marker>
        </defs>

        <g class="graph" x="0" y="0">
          <g>
            <path
              v-for="edge in edges"
              :key="edge.id"
              class="link"
              :d="edgeData(edge)"
              marker-end="url(#mark-arrow)"
            ></path>
          </g>

          <g>
            <g
              class="node-container"
              v-for="(node, index) in nodes"
              :key="index"
              :transform="'translate(' + node.x + ',' + node.y + ')'"
              @mousedown="showNodeInfoTip($event, node.id)"
            >
              <rect
                class="node"
                :class="{
                  active: showTip === node.id,
                  virtual: node.type === 'virtual'
                }"
                :width="rectWidth"
                :height="rectHeight"
                rx="2"
                ry="2"
              ></rect>

              <circle cx="0" cy="35" class="link-dot" />

              <circle cx="140" cy="35" class="link-dot" />

              <svg :width="rectWidth" :height="rectHeight">
                <text
                  x="50%"
                  y="45%"
                  alignment-baseline="middle"
                  text-anchor="middle"
                >
                  <tspan>{{ node.id }}</tspan>
                </text>

                <text
                  x="50%"
                  y="75%"
                  alignment-baseline="middle"
                  text-anchor="middle"
                >
                  <tspan>{{ node.title }}</tspan>
                </text>
              </svg>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="nothing-showing" v-show="!svgReady">
      当前暂未配置任何流程
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { NodeClass, EdgeClass } from "@/components/Graph.vue";
import { SvgJsonClass } from "@/views/FlowChart.vue";
import {
  handleTheSameLinkDot,
  handleTheColSameLinkDot,
  handleNotSameLinkDotAndAlongStraightLine,
  handelNotSameLinkDotAndAlongColStraightLine,
  getMidXPath,
  getMidYPath
} from "@/utils/path.ts";

const rectWidth = 140;
const rectHeight = 70;
let timer: number | null = null;

@Component
export default class GraphShow extends Vue {
  @Prop() private jsonData!: SvgJsonClass;
  private edges: EdgeClass[] = [];
  private nodes: NodeClass[] = [];
  private nodesInfo!: Array<object>;
  private rectWidth: string = "141px";
  private rectHeight: string = "70px";
  private showTip: number = 0;
  private closeTip: boolean = false;
  private tipX: number = 0;
  private tipY: number = 0;

  @Watch("jsonData", { deep: true })
  onJsonDataChanged(value: SvgJsonClass) {
    const { nodes, edges, nodesInfo } = value;
    if (nodes.length > 0 && edges.length > 0) {
      this.edges = edges;
      this.nodes = nodes;
      this.nodesInfo = nodesInfo;
    }
  }

  private get svgReady() {
    if (this.edges.length > 0 && this.nodes.length > 0) {
      return true;
    }
    return false;
  }

  /**
   * 连接点仅为左或右
   */
  linkDotIsLeftOrRight(linkData: any, edge: EdgeClass, sourceNodeY: number) {
    let { startX, startY, endX, endY } = linkData;
    // 连接端点同侧
    const sameLinkDotResult = handleTheSameLinkDot(linkData);

    if (sameLinkDotResult !== "") {
      return sameLinkDotResult;
    }

    // 连接端点不同侧且节点之间处于同一纵向水平线的
    const NotSameLinkDotAndACSLResult = handelNotSameLinkDotAndAlongColStraightLine(
      linkData
    );

    if (NotSameLinkDotAndACSLResult !== "") {
      return NotSameLinkDotAndACSLResult;
    }

    // 纵坐标最小连线误差直线拟合
    const minY = Math.abs(startY - endY);
    const rangeNum = 3;
    if (minY < rangeNum) {
      endY = startY;
      this.nodes.forEach(i => {
        if (i.id === edge.target) {
          i.y = sourceNodeY;
          return i;
        }
      });
    }
    // 连接端点不同侧且为水平线连接（最常见的连接情况）
    const { midX1, midY1, midX2, midY2 } = getMidXPath(
      startX,
      startY,
      endX,
      endY
    );

    return `M ${startX},${startY} L ${midX1},${midY1} L ${midX2},${midY2} L ${endX},${endY}`;
  }

  /**
   * 连接点仅为上或下
   */
  linkDotIsTopOrBottom(linkData: any) {
    let { startX, startY, endX, endY } = linkData;
    // 连接纵向端点同侧
    const sameLinkDotResult = handleTheColSameLinkDot(linkData);

    if (sameLinkDotResult !== "") {
      return sameLinkDotResult;
    }

    // 连接端点为纵向不同侧且节点之间处于同一水平线的
    const NotSameLinkDotAndASLResult = handleNotSameLinkDotAndAlongStraightLine(
      linkData
    );

    if (NotSameLinkDotAndASLResult !== "") {
      return NotSameLinkDotAndASLResult;
    }

    // 横坐标最小连线误差直线拟合
    const minX = Math.abs(startX - endX);
    const rangeNum = 3;
    if (minX < rangeNum) {
      endX = startX;
    }

    // 连接端点不同侧且为纵向水平线连接（最常见的连接情况）
    const { midX1, midY1, midX2, midY2 } = getMidYPath(
      startX,
      startY,
      endX,
      endY
    );
    return `M ${startX},${startY} L ${midX1},${midY1} L ${midX2},${midY2} L ${endX},${endY}`;
  }

  /**
   * 连接点为水平方向与纵向时
   */
  linkDotIsOthers(linkData: any) {
    let { startX, startY, endX, endY } = linkData;
    return `M ${startX},${startY} L ${endX},${endY}`;
  }

  /**
   * 连线数据
   * @argument edge - 路径元数据
   */
  edgeData(edge: EdgeClass) {
    const { dotLink, dotEndLink } = edge;
    if (edge.source && edge.target) {
      const { linkNode: sourceLinkNode, y: sourceNodeY }: any = this.nodes.find(
        i => i.id === edge.source
      );
      const { linkNode: targetLinkNode }: any = this.nodes.find(
        i => i.id === edge.target
      );

      let startX = sourceLinkNode[dotLink].x;
      let startY = sourceLinkNode[dotLink].y;
      let endX = targetLinkNode[dotEndLink].x;
      let endY = targetLinkNode[dotEndLink].y;

      const linkData = {
        dotLink,
        dotEndLink,
        startX,
        startY,
        endX,
        endY
      };

      // link dot is left or right.
      if (
        dotLink !== "top" &&
        dotLink !== "bottom" &&
        dotEndLink !== "top" &&
        dotEndLink !== "bottom"
      ) {
        return this.linkDotIsLeftOrRight(linkData, edge, sourceNodeY);
      }

      // link dot is top or bottom.
      if (
        dotLink !== "left" &&
        dotLink !== "right" &&
        dotEndLink !== "left" &&
        dotEndLink !== "right"
      ) {
        return this.linkDotIsTopOrBottom(linkData);
      }

      return this.linkDotIsOthers(linkData);
    }
    return false;
  }

  /**
   * 展示节点信息提示
   * @argument {MouseEvent} event - mouse event
   * @argument {number} nodeId - 节点ID
   */
  showNodeInfoTip(event: MouseEvent, nodeId: number) {
    const { layerX, layerY } = event;
    this.tipX = layerX;
    this.tipY = layerY;
    this.showTip = nodeId;
  }

  /**
   * 关闭节点信息提示
   */
  closeNodeInfoTip() {
    if (this.showTip !== 0) {
      this.closeTip = true;
      if (timer === null) {
        timer = setTimeout(() => {
          this.showTip = 0;
          this.closeTip = false;
          timer = null;
        }, 188);
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.graph-show-container {
    height: 100%;
    overflow: hidden;
    background: #ffffff;
    margin: 20px 0;
    position: relative;

    div.tip-block {
        position: absolute;
        width: 250px;
        height: 300px;
        background: #ffffff;
        border: 1px solid #dcdcdc;
        box-shadow: 0 2px 4px 0 #b3c0d8;
        overflow: scroll;
        animation: fadeIn 0.2s ease-in-out;

        .title {
            font-size: 12px;
            color: #4a4a4a;
            font-weight: bold;
            padding: 8px;
            border-bottom: 1px solid #eee;
        }

        .attr-block {
            margin: 8px;

            .attr {
                .head {
                    font-size: 12px;
                    color: #4a90e2;
                    font-weight: bold;
                }
            }
        }
    }

    .tip-close {
        animation: fadeOut 0.2s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    div.svg-box {
        background: #fff;
        transition: background 0.2s ease-in-out;
        box-shadow: 0 2px 4px 0 #b3c0d8;
        border: 1px solid #dcdcdc;
        overflow: scroll;

        svg.zone {
            width: 5000px;
            height: 818px;

            .graph {
                path.link {
                    fill: none;
                    stroke: #000;
                    stroke-width: 2px;
                }

                path.dragline {
                    stroke: #888;
                    stroke-dasharray: 8px;
                }

                path.selected {
                    stroke: #9b78d3;
                }

                g.node-container {
                    user-select: none;
                    cursor: pointer;

                    .node {
                        fill: transparent;
                        stroke-width: 2px;
                        stroke: #4a4a4a;
                        transition: all 0.2s ease-in-out;
                    }

                    .virtual {
                        stroke-dasharray: 2px;
                    }

                    .active {
                        fill: #eee;
                    }

                    text {
                        user-select: none;
                        font-size: 14px;
                        fill: #4a4a4a;
                    }
                }
            }
        }
    }

    .nothing-showing {
        font-size: 30px;
        color: #9b9b9b;
        text-align: center;
    }
}
</style>
