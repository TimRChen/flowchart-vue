<template>
  <div class="graph-show-container">
    <div class="svg-box" v-show="svgReady">
      <svg class="zone" width="100%" height="818">
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
            >
              <rect class="node" :width="rectWidth" :height="rectHeight"></rect>

              <circle cx="0" cy="27" class="link-dot" />

              <circle cx="130" cy="27" class="link-dot" />

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
    <div class="nothing-showing" v-show="!svgReady">
      没有可展示的输出JSON数据.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { NodeClass, EdgeClass } from "@/components/Graph.vue";
import { SvgJsonClass } from "@/views/FlowChart.vue";

@Component
export default class GraphShow extends Vue {
  @Prop() private jsonData!: SvgJsonClass;
  private edges: EdgeClass[] = [];
  private nodes: NodeClass[] = [];
  private rectWidth: String = "130px";
  private rectHeight: String = "50px";

  @Watch("jsonData")
  onJsonDataChanged(value: SvgJsonClass) {
    const { nodes, edges } = value;
    if (nodes.length > 0 && edges.length > 0) {
      this.edges = edges;
      this.nodes = nodes;
    }
  }

  private get svgReady() {
    if (this.edges.length > 0 && this.nodes.length > 0) {
      return true;
    }
    return false;
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
}
</script>

<style lang="stylus" scoped>
.graph-show-container {
    height: 100%;
    border: 1px solid #DCDCDC;
    overflow: hidden;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 #B3C0D8;
    margin: 20px 0;

    .svg-box {
        background: #fff;
        transition: background 0.2s ease-in-out;
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
                stroke: #9b78d3;
            }

            g.node-container {
                user-select: none;

                .node {
                    fill: transparent;
                    stroke-width: 2px;
                    stroke: #000;
                    transition: all 0.2s ease-in-out;
                }

                .link-dot {
                    r: 0px;
                    fill: transparent;
                    stroke: #000;
                    stroke-width: 2px;
                    transition: all 0.2s ease-in-out;
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
