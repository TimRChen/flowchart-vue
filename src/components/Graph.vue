<template>
  <div class="graph-container">
    <div class="svg-box" @drop="createNode" @dragover.prevent>
      <svg
        class="zone"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ active: graphState.isDragging }"
        @mousemove="svgMousemove($event)"
        @mouseup="svgMouseUp"
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

        <g class="graph">
          <path
            v-show="isLinking"
            class="link dragline"
            :d="lineDragData"
            marker-end="url(#mark-arrow)"
          ></path>

          <g class="edges-list">
            <path
              v-for="edge in edges"
              :key="edge.id"
              :class="['link', 'link-active', { selected: edge.selected }]"
              :d="edgeData(edge)"
              marker-end="url(#mark-arrow)"
              @click="clickEdge(edge)"
            ></path>
          </g>

          <g class="nodes-list">
            <g
              class="node-container"
              v-for="(node, index) in nodes"
              :key="index"
              :transform="'translate(' + node.x + ',' + node.y + ')'"
              @mousedown="dragSvgNode(node)"
              @contextmenu="rightMenu($event, node)"
            >
              <rect
                class="node"
                :class="rectClass(node)"
                :width="rectWidth"
                :height="rectHeight"
                rx="2"
                ry="2"
              ></rect>

              <circle
                cx="0"
                cy="35"
                class="link-dot"
                :class="{
                  'active-dot': dotLink === 'left' && node === mousedownNode
                }"
                @mousedown="startLinkNode('left')"
                @mouseup="endLinkedNode('left', node)"
              />

              <circle
                cx="141"
                cy="35"
                class="link-dot"
                :class="{
                  'active-dot': dotLink === 'right' && node === mousedownNode
                }"
                @mousedown="startLinkNode('right')"
                @mouseup="endLinkedNode('right', node)"
              />
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Node from "@/components/Node.vue";
import {
  getMidXPath,
  handleTheSameLinkDot,
  handelNotSameLinkDotAndNotStraightLine
} from "@/utils/path.ts";
import { getRandomInt } from "@/utils/tools.ts";

const rectWidth = 141;
const rectHeight = 70;

export interface NodeClass {
  id: number;
  title: string;
  type: string;
  x: number;
  y: number;
  selected: boolean;
  linkNode: any;
}

export interface EdgeClass {
  id: number;
  source: number | null;
  target: number | null;
  selected: boolean;
  dotLink: string;
  dotEndLink: string;
}

@Component
export default class Graph extends Vue {
  @Prop() private saveStatus!: boolean;
  @Prop() private deleteNode!: boolean;
  @Prop() private nodeType!: string;
  @Prop() private importJsonData!: object;

  private nodes: NodeClass[] = [];
  private edges: EdgeClass[] = [];
  private rectWidth: string = "141px";
  private rectHeight: string = "70px";
  private isLinking: boolean = false;
  private nodeCanDrag: boolean = true;
  private lineDragData: string = "";
  private mousedownNode: NodeClass | null = null;
  private dotLink: string = "";
  private settingNodeId: number = 0;
  private createNodeLock: boolean = false;

  @Getter("graphState") graphState!: any;
  @Action("changSelectedNode") changSelectedNode!: Function;
  @Action("changSelectedEdge") changSelectedEdge!: Function;
  @Action("toggle_toLink") toggleToLink!: Function;
  @Action("toggle_isDragging") toggleIsDragging!: Function;

  @Watch("saveStatus")
  onExportStatusChanged(value: boolean) {
    if (value) {
      this.saveJsonData();
    }
  }
  @Watch("deleteNode")
  onDeleteNodeChanged(value: boolean) {
    if (value) {
      this.handleDeleteNode();
    }
  }
  @Watch("nodeType")
  onNodeTypeChanged(type: string) {
    this.nodes.forEach(node => {
      if (node.id === this.settingNodeId) {
        node.type = type;
      }
    });
  }
  @Watch("importJsonData", { deep: true })
  onImportJsonDataChanged(obj: object) {
    const { nodes, edges } = JSON.parse(JSON.stringify(obj));
    this.nodes = nodes;
    this.edges = edges;
  }

  /**
   * 节点模块class
   * @argument {NodeClass} node - 节点数据
   * @return {Object}
   */
  rectClass(node: NodeClass) {
    return {
      selected: node.selected,
      "to-link": this.graphState.toLink,
      setting: this.settingNodeId === node.id,
      virtual: node.type === "virtual"
    };
  }

  /**
   * 导出svg json数据
   */
  saveJsonData() {
    const { nodes, edges } = this;
    if (nodes.length === 0 || edges.length === 0) {
      alert("流程配置未给出，无法导出数据");
      this.$emit("update:saveStatus", false);
      return false;
    }
    const json = { nodes, edges };
    this.$emit("export-json", json);
  }

  /**
   * 删除svg node edge 数据
   */
  handleDeleteNode() {
    const index = this.nodes.findIndex(node => node.id === this.settingNodeId);
    if (index !== -1) {
      this.nodes.splice(index, 1);
      this.edges = this.edges.filter(edge => {
        if (
          edge.source === this.settingNodeId ||
          edge.target === this.settingNodeId
        ) {
          return false;
        }
        return true;
      });
    }
    this.$emit("update:deleteNode", false);
    alert("成功移除节点！");
  }

  /**
   * 画布已存在节点检测
   * @argument {number} id - 节点ID
   * @return {boolean}
   */
  codeExist(id: number): boolean {
    const index = this.nodes.findIndex(node => node.id === id);
    if (index !== -1) {
      alert("请勿增加重复节点！");
      return true;
    }
    return false;
  }

  /**
   * 增加节点
   * @description 向SVG画布中新增节点
   * @argument {DragEvent} event - mouse event
   */
  createNode(event: DragEvent) {
    if (!this.createNodeLock) {
      this.createNodeLock = true;
      if (event.dataTransfer !== null) {
        const jsonStr = event.dataTransfer.getData("item");
        const jsonObj = JSON.parse(jsonStr);
        const { id, title } = jsonObj;
        this.createNodeLock = false;
        // 检测画布中是否已存在即将新增节点
        if (this.codeExist(id)) {
          return false;
        }
        const { offsetX: leftTopX, offsetY: leftTopY } = event;
        const node = {
          id: id,
          title,
          type: "real",
          x: leftTopX - rectWidth / 2,
          y: leftTopY - rectHeight / 2,
          selected: false,
          linkNode: {
            left: {
              x: leftTopX - rectWidth / 2,
              y: leftTopY
            },
            right: {
              x: leftTopX + rectWidth / 2,
              y: leftTopY
            }
          }
        };
        this.nodes.push(node);
        this.toggleIsDragging(false);
      }
    } else {
      // 若存在异步增加节点需求可在此使用提示
      // handling blocked asynchronous requests here
      alert("生成节点中..(please wait or ignore this...)");
    }
  }

  /**
   * 连线数据
   * @argument {EdgeClass} edge - 路径元数据
   */
  edgeData(edge: EdgeClass) {
    const { dotLink, dotEndLink } = edge;
    if (edge.source && edge.target) {
      const { linkNode: sourceLinkNode, y: sourceNodeY }: any = this.nodes.find(
        node => node.id === edge.source
      );
      const { linkNode: targetLinkNode }: any = this.nodes.find(
        node => node.id === edge.target
      );

      let startX = 0;
      let startY = 0;
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

      const linkData = {
        dotLink,
        dotEndLink,
        startX,
        startY,
        endX,
        endY
      };

      // 连接端点同侧
      const sameLinkDotResult = handleTheSameLinkDot(linkData);

      if (sameLinkDotResult !== "") {
        return sameLinkDotResult;
      }

      // 连接端点不同侧且不为顺向连接直线的
      const NotSameLinkDotAndNSLResult = handelNotSameLinkDotAndNotStraightLine(
        linkData
      );

      if (NotSameLinkDotAndNSLResult !== "") {
        return NotSameLinkDotAndNSLResult;
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
      // 连接端点不同侧且为同一水平线连接（最常见的连接情况）
      const { midX1, midY1, midX2, midY2 } = getMidXPath(
        startX,
        startY,
        endX,
        endY
      );

      return `M ${startX},${startY} L ${midX1},${midY1} L ${midX2},${midY2} L ${endX},${endY}`;
    }
    return false;
  }

  /**
   * 画布已存在路径检测
   * @argument {number} source - 源节点ID
   * @argument {number} target - 目标节点ID
   * @return {number}
   */
  edgeExist(source: number, target: number): number {
    const edgeIsExist = this.edges.findIndex(
      i => source === i.source && target === i.target
    );
    return edgeIsExist;
  }

  /**
   * 开始连接节点
   * @description 连线起始函数
   * @argument {string} position - 连线起点位置
   */
  startLinkNode(position: string) {
    this.toggleToLink(true);
    this.dotLink = position;
  }

  /**
   * 节点完成连接
   * @description 连线终止函数
   * @argument {string} position - 连线终点位置
   * @argument {NodeClass} node - 终止节点
   */
  endLinkedNode(position: string, node: NodeClass) {
    if (this.mousedownNode !== null && this.mousedownNode !== node) {
      const source = this.mousedownNode.id;
      const target = node.id;
      let edgeIsExist = -1;
      if (this.edges.length > 0) {
        // 相同两个节点之间最大连接路径为1
        edgeIsExist = this.edgeExist(source, target);
      }
      if (edgeIsExist === -1) {
        const dotLink = this.dotLink;
        const edge = {
          id: getRandomInt(),
          source,
          target,
          selected: false,
          dotLink,
          dotEndLink: position
        };
        this.edges.push(edge);
      }
    }
  }

  /**
   * 全局SVG鼠标事件监听
   * @description 核心方法 - 处理连线轨迹 - 更新节点拖拽变化值
   * @argument {MouseEvent} event - mouse event
   */
  svgMousemove(event: MouseEvent) {
    let node = this.mousedownNode;
    const { movementX, movementY } = event;
    if (node !== null) {
      // drag edge
      if (this.isLinking) {
        this.lineDragData = this.caclPathDragData(node, event);
      }
      // drag node
      if (this.nodeCanDrag) {
        node.x += movementX;
        node.y += movementY;
        node.linkNode = {
          left: {
            x: node.x,
            y: node.y + rectHeight / 2
          },
          right: {
            x: node.x + rectWidth,
            y: node.y + rectHeight / 2
          }
        };
        this.mousedownNode = node;
      }
    }
  }

  /**
   * 动态计算路径拖拽数据
   * @argument {NodeClass} mousedownNode - 当前 mousedown 状态节点
   * @argument {MouseEvent} event - mouse event
   * @return {string} path attr 'd' value
   */
  caclPathDragData(mousedownNode: NodeClass, event: MouseEvent): string {
    const { offsetX: endX, offsetY: endY } = event;
    const { linkNode } = mousedownNode;

    let startX = 0;
    let startY = 0;

    if (this.dotLink === "left") {
      startX = linkNode.left.x;
      startY = linkNode.left.y;
    } else if (this.dotLink === "right") {
      startX = linkNode.right.x;
      startY = linkNode.right.y;
    }

    return `M ${startX},${startY} L ${endX},${endY}`;
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
   * 在svg中拖拽节点
   * @argument {NodeClass} node - 节点
   */
  dragSvgNode(node: NodeClass) {
    this.unSelectedAll();
    this.recoverySideBar();
    node.selected = true;
    this.changSelectedNode(node);
    this.mousedownNode = node;
    if (this.graphState.toLink) {
      this.isLinking = true;
      this.nodeCanDrag = false;
    }
  }

  /**
   * 恢复侧边栏状态
   */
  recoverySideBar() {
    this.settingNodeId = 0;
    this.$emit("recovery-side-bar");
  }

  /**
   * 鼠标右键菜单拓展
   * @argument {MouseEvent} event - mouse event
   * @argument {NodeClass} node - 节点
   */
  rightMenu(event: MouseEvent, node: NodeClass) {
    event.preventDefault();
    this.unSelectedAll();
    this.settingNodeId = node.id;
    this.$emit("setting-node", { id: node.id, type: node.type });
  }

  /**
   * 解除节点选中状态
   */
  unSelectedNodes() {
    this.nodes.forEach(
      (node: NodeClass): NodeClass => {
        node.selected = false;
        return node;
      }
    );
  }

  /**
   * 解除节点连线选中状态
   */
  unSelectedEdges() {
    this.edges.forEach(
      (edge: EdgeClass): EdgeClass => {
        edge.selected = false;
        return edge;
      }
    );
  }

  /**
   * 解除全部选中
   */
  unSelectedAll() {
    this.unSelectedNodes();
    this.unSelectedEdges();
  }

  /**
   * 点击路径
   * @description 暂无任何实际功能，需要可以自行增加删除路径功能或更多自定义效果
   * @argument edge - 路径元数据
   */
  clickEdge(edge: EdgeClass) {
    this.unSelectedAll();
    this.recoverySideBar();
    edge.selected = true;
    this.changSelectedEdge(edge);
  }
}
</script>

<style scoped lang="stylus">
.graph-container {
    flex: 1;
    height: 100%;
    border: 1px solid #dcdcdc;
    background: #ffffff;
    box-shadow: 0 2px 4px 0 #b3c0d8;
    margin-right: 14px;
    overflow: scroll;

    .svg-box {
        background: #fff;
        transition: background 0.2s ease-in-out;
    }

    .active {
        background: #eee;
    }

    svg.zone {
        width: 5000px;
        height: 818px;

        .graph {
            path.link {
                fill: none;
                stroke: #000;
                stroke-width: 2px;
                stroke-linejoin: round;
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
                    stroke: #4a4a4a;
                    cursor: grab;
                    transition: all 0.2s ease-in-out;
                }

                .to-link {
                    cursor: crosshair;
                }

                .setting {
                    stroke: #4a90e2;
                    stroke-width: 3px;
                }

                .virtual {
                    stroke-dasharray: 2px;
                }

                .selected {
                    fill: #e2e2e2;
                }

                .link-dot {
                    r: 2px;
                    stroke: #000;
                    stroke-width: 2px;
                    transition: all 0.2s ease-in-out;

                    &:hover {
                        r: 12px;
                        stroke: red;
                        fill: transparent;
                    }
                }

                .active-dot {
                    r: 12px;
                    stroke: red;
                    fill: transparent;
                }

                text {
                    font-size: 14px;
                    fill: #4a4a4a;
                }
            }
        }
    }
}
</style>
