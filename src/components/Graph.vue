<template>
  <div class="graph-container">
    <div
      :class="['svg-box', { active: graphState.isDragging }]"
      @drop="addNode"
      @dragover.prevent
    >
      <svg
        class="zone"
        width="100%"
        height="818"
        @mousemove="svgMousemove($event)"
        @mouseup="svgMouseUp"
        @mousedown.right="svgMouseRightDown"
        @contextmenu="rightMenu($event)"
      >
        <defs>
          <marker
            id="mark-arrow"
            viewBox="0 0 11 11"
            refX="8"
            refY="6"
            markerWidth="12"
            markerHeight="12"
            orient="auto"
          >
            <path d="M2,2 L10,6 L2,10 L6,6 L2,2" />
          </marker>
        </defs>

        <g class="graph">
          <path
            v-show="isLinking"
            class="link dragline"
            :d="lineDragData"
            marker-end="url(#mark-arrow)"
          ></path>

          <g>
            <path
              v-for="edge in edges"
              :key="edge.id"
              :class="['link', 'link-active', { selected: edge.selected }]"
              :d="edgeData(edge)"
              marker-end="url(#mark-arrow)"
              @click="clickEdge(edge)"
            ></path>
          </g>

          <g>
            <g
              class="node-container"
              v-for="(node, index) in nodes"
              :key="index"
              :transform="'translate(' + node.x + ',' + node.y + ')'"
              @mousedown="nodeMousedown(node)"
            >
              <rect
                class="node"
                :class="{
                  selected: node.selected,
                  'to-link': graphState.toLink
                }"
                :width="rectWidth"
                :height="rectHeight"
              ></rect>

              <circle
                cx="0"
                cy="27"
                class="link-dot"
                :class="{
                  'active-dot': dotLink === 'left' && node === mousedownNode
                }"
                @mousedown="linkNode('left', $event)"
                @mouseup="linkedNode('left', node)"
              />

              <circle
                cx="130"
                cy="27"
                class="link-dot"
                :class="{
                  'active-dot': dotLink === 'right' && node === mousedownNode
                }"
                @mousedown="linkNode('right', $event)"
                @mouseup="linkedNode('right', node)"
              />

              <text x="45" y="20">
                <tspan>{{ node.title }}</tspan>
              </text>

              <text x="35" y="40">
                <tspan>{{ node.id }}</tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Node from "./Node.vue";

let edgeId = 2;

const rectWidth = 130;
const rectHeight = 55;
// rect上下左右偏移量
const svgDx = rectWidth * 2;
const svgDy = rectHeight * 2;

export interface NodeClass {
  id: string;
  title: string;
  x: number;
  y: number;
  selected: boolean;
  linkNode: any;
}

export interface EdgeClass {
  id: number;
  source: NodeClass | null;
  target: NodeClass | null;
  selected: boolean;
  dotLink: String;
  dotEndLink: String;
}

@Component
export default class Graph extends Vue {
  @Prop() private exportStatus!: Boolean;
  private nodes: NodeClass[] = [];
  private edges: EdgeClass[] = [];
  private rectWidth: String = "130px";
  private rectHeight: String = "50px";
  private isLinking: Boolean = false;
  private nodeCanDrag: Boolean = true;
  private lineDragData: String = "";
  private mousedownNode: NodeClass | null = null;
  private dotLink: String = "";

  @Getter("graphState") graphState!: any;
  @Action("changSelectedNode") changSelectedNode!: Function;
  @Action("changSelectedEdge") changSelectedEdge!: Function;
  @Action("toggle_toLink") toggleToLink!: Function;
  @Action("toggle_isDragging") toggleIsDragging!: Function;

  @Watch("exportStatus")
  onExportStatusChanged(value: boolean) {
    if (value) {
      this.exportSvgToJSON();
    }
  }

  /**
   * 导出svg json数据
   */
  exportSvgToJSON() {
    const { nodes, edges } = this;
    if (nodes.length === 0 || edges.length === 0) {
      alert("流程配置未给出，无法导出数据");
      this.$emit("update:exportStatus", false);
      return false;
    }
    const json = { nodes, edges };
    this.$emit("update:exportStatus", false);
    this.$emit("export-json", json);
  }

  /**
   * 新增节点
   * @description 向SVG画布中新增节点
   */
  addNode(event: any) {
    var jsonStr = event.dataTransfer.getData("item");
    var jsonObj = JSON.parse(jsonStr);
    const { id, title } = jsonObj;
    const node = {
      id,
      title,
      x: event.x - rectWidth,
      y: event.y - rectHeight,
      selected: false,
      linkNode: {
        left: {
          x: event.x - rectWidth,
          y: event.y - rectHeight + rectHeight / 2
        },
        right: {
          x: event.x - rectWidth + rectWidth,
          y: event.y - rectHeight + rectHeight / 2
        }
      }
    };
    this.nodes.push(node);
    this.toggleIsDragging(false);
  }

  /**
   * 连线数据
   * @argument edge - 路径元数据
   */
  edgeData(edge: EdgeClass) {
    const { dotLink, dotEndLink } = edge;
    if (edge.source && edge.target) {
      const bezier = 100;
      const { linkNode: sourceLinkNode } = edge.source;
      const { linkNode: targetLinkNode } = edge.target;

      let startX = 0;
      let startY = 0;
      let midX = 0;
      let midY = 0;
      let endX = 0;
      let endY = 0;

      if (dotLink === "left") {
        startX = sourceLinkNode.left.x;
        startY = sourceLinkNode.left.y;
      } else if (dotLink === "right") {
        startX = sourceLinkNode.right.x;
        startY = sourceLinkNode.right.y;
      }

      if (dotEndLink === "left") {
        endX = targetLinkNode.left.x;
        endY = targetLinkNode.left.y;
      } else if (dotEndLink === "right") {
        endX = targetLinkNode.right.x;
        endY = targetLinkNode.right.y;
      }

      // midX = (startX + endX) / 2;
      // midY = (startY + endX) / 2 - bezier;

      // return `M ${startX},${startY} Q ${midX},${midY} ${endX},${endY}`;
      return `M ${startX},${startY} L ${endX},${endY}`;
    } else {
      return false;
    }
  }

  nodeMousedown(node: NodeClass) {
    this.unSelectedAll();
    node.selected = true;
    this.changSelectedNode(node);
    this.mousedownNode = node;
    if (this.graphState.toLink) {
      this.isLinking = true;
      this.nodeCanDrag = false;
    }
  }

  /**
   * 开始连接节点
   * @description 连线起始函数
   * @argument position - 连线起点位置
   * @argument node - 起始节点
   */
  linkNode(position: string, event: any) {
    this.toggleToLink(true);
    this.dotLink = position;
  }

  /**
   * 连接上节点
   * @description 连线终止函数
   * @argument position - 连线终点位置
   * @argument node - 终止节点
   */
  linkedNode(position: string, node: NodeClass) {
    if (this.mousedownNode !== node) {
      const source = this.mousedownNode;
      const target = node;
      let edgeIsExist = -1;
      if (this.edges.length > 0) {
        edgeIsExist = this.edges.findIndex(function(i: EdgeClass): any {
          return source === i.source && target === i.target;
        });
      }
      if (edgeIsExist === -1) {
        const edge = {
          id: edgeId++,
          source,
          target,
          selected: false,
          dotLink: this.dotLink,
          dotEndLink: position
        };
        this.edges.push(edge);
      }
    }
  }

  /**
   * 动态计算路径拖拽数据
   */
  caclPathDragData(mousedownNode: NodeClass, event: any) {
    const { x, y } = event;
    const { linkNode } = mousedownNode;

    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    if (this.dotLink === "left") {
      startX = linkNode.left.x;
      startY = linkNode.left.y;
    } else {
      startX = linkNode.right.x;
      startY = linkNode.right.y;
    }

    const arrowDx = 20;
    const arrowDy = 10;

    endX = x - arrowDx;
    endY = y - rectHeight / 2 - arrowDy;

    return `M ${startX},${startY} L ${endX},${endY}`;
  }

  /**
   * 全局SVG鼠标事件监听
   * @description 核心功能 - 处理连线轨迹 - 更新节点拖拽变化值
   */
  svgMousemove(event: any) {
    let node = this.mousedownNode;
    const { x, y, movementX, movementY } = event;
    if (node) {
      if (this.isLinking) {
        // link node
        this.lineDragData = this.caclPathDragData(node, event);
      }
      if (this.nodeCanDrag) {
        // drag node
        let dx = Math.abs(x - node.x - svgDx);
        let dy = Math.abs(y - node.y - svgDy);
        // 拖拽点值偏移量修正
        if (dx > svgDx) {
          node.x = x - svgDx;
        } else {
          node.x = node.x + movementX;
        }
        if (dy > svgDy) {
          node.y = y - svgDy;
        } else {
          node.y = node.y + movementY;
        }
        node.linkNode.left.x = node.x;
        node.linkNode.left.y = node.y + rectHeight / 2;
        node.linkNode.right.x = node.x + rectWidth;
        node.linkNode.right.y = node.y + rectHeight / 2;
        this.mousedownNode = node;
      }
    }
  }

  /**
   * 全局SVG鼠标事件处理
   */
  svgMouseUp() {
    this.unSelectedNodes();
    this.toggleToLink(false);
    this.mousedownNode = null;
    this.lineDragData = "";
    this.isLinking = false;
    this.nodeCanDrag = true;
    this.dotLink = "";
  }

  /**
   * 鼠标右键事件
   */
  svgMouseRightDown() {
    // this.toggleToLink(false);
  }

  /**
   * 鼠标右键菜单
   */
  rightMenu(event: any) {
    // TODO: 预留鼠标右键菜单
    event.preventDefault();
    return false;
  }

  /**
   * 点击路径
   * @argument edge - 路径元数据
   */
  clickEdge(edge: EdgeClass) {
    this.unSelectedAll();
    edge.selected = true;
    this.changSelectedEdge(edge);
  }

  /**
   * 解除节点选中状态
   */
  unSelectedNodes() {
    this.nodes.map(function(node: NodeClass) {
      node.selected = false;
    });
  }

  /**
   * 解除节点连线选中状态
   */
  unSelectedEdges() {
    this.edges.map(function(edge: EdgeClass) {
      edge.selected = false;
    });
  }

  /**
   * 解除全部选中
   */
  unSelectedAll() {
    this.unSelectedNodes();
    this.unSelectedEdges();
  }
}
</script>

<style scoped lang="stylus">
.graph-container {
    flex: 1;
    height: 100%;
    border: 1px solid #DCDCDC;
    overflow: hidden;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 #B3C0D8;
    margin-right: 7px;

    .svg-box {
      background: #fff;
      transition: background .2s ease-in-out;
    }

    .active {
      background: #eee;
    }

    .zone {
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
                stroke: #000;
                stroke-dasharray: 8px;
            }

            g.node-container {
                user-select: none;

                .node {
                    fill: transparent;
                    stroke-width: 2px;
                    stroke: #000;
                    cursor: grab;
                    transition: all 0.2s ease-in-out;
                }

                .to-link {
                    cursor: crosshair;
                }

                .selected {
                    fill: #e2e2e2;
                }

                .link-dot {
                    r: 2px;
                    fill: transparent;
                    stroke: #000;
                    stroke-width: 2px;
                    transition: all 0.2s ease-in-out;

                    &:hover {
                        r: 10px;
                        stroke: red;
                    }
                }

                .active-dot {
                    r: 10px;
                    stroke: red;
                }

                text {
                    font-size: 14px;
                    color: #4a4a4a;
                }
            }
        }
    }
}
</style>
