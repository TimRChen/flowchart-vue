<template>
    <div class="graph-container">
        <div
            :class="['graph', { active: graphState.isDragging }]"
            @drop="addNode"
            @dragover.prevent
        >
            <svg
                class="zone"
                width="100%"
                height="818"
                @mousemove="svgMousemove($event)"
                @contextmenu="rightMenu($event)"
                @mousedown.right="svgMouseRightDown"
                @mouseup="svgMouseUp"
            >
                <g>
                    <g
                        class="node-container"
                        v-for="(node, index) in nodes"
                        :key="index"
                        :transform="'translate(' + node.x + ',' + node.y + ')'"
                        @mousedown="nodeMousedown(node)"
                        @mouseup="nodeMouseup(node)"
                    >
                        <rect
                            class="node"
                            :width="rectWidth"
                            :height="rectHeight"
                            x="0"
                            y="0"
                        ></rect>
                        <text x="50" y="20">
                            <tspan>{{ node.title }}</tspan>
                        </text>
                        <text x="35" y="40">
                            <tspan>{{ node.id }}</tspan>
                        </text>
                    </g>
                </g>
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

const svgDx = 165;
const svgDy = 53;

@Component
export default class Graph extends Vue {
    private nodes: Object[] = [];
    private rectWidth: String = "130px";
    private rectHeight: String = "50px";

    @Getter("graphState") graphState!: Object;
    @Action("changSelectedNode") changSelectedNode!: Function;
    @Action("changSelectedEdge") changSelectedEdge!: Function;

    addNode(event: any) {
        var jsonStr = event.dataTransfer.getData("item");
        var jsonObj = JSON.parse(jsonStr);
        const { id, title } = jsonObj;
        this.nodes.push({
            id,
            title,
            x: event.x - svgDx,
            y: event.y - svgDy,
            selected: false
        });
    }

    svgMousemove(event: any) {
        // ..
    }

    rightMenu(event: any) {
        // ..
    }

    svgMouseUp() {
        // ..
    }
}
</script>

<style scoped lang="stylus">
.graph-container {
    flex: 1;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    margin-right: 7px;
    box-shadow: 0 2px 4px 0 #B3C0D8;

    .zone {
        g.node-container {
            user-select: none;
            .node {
                fill: transparent;
                stroke-width: 2px;
                stroke: #000;
                cursor: grab;
                transition: all .2s ease-in-out;
                &:hover {
                    fill: #e2e2e2;
                }
            }
        }
    }
}
</style>
