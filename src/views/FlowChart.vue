<template>
  <div class="flow-chart-container">
    <div class="flow-chart-config">
      <Graph
        :import-json-data="importJsonData"
        :node-type="nodeType"
        :save-status.sync="saveStatus"
        :delete-node.sync="deleteNode"
        @export-json="handleExportJSON"
        @setting-node="handleNodeSetting"
        @recovery-side-bar="handleRecoverySideBar"
      />
      <SideBar
        :import-json-data="importJsonData"
        :node-type.sync="nodeType"
        :save-status.sync="saveStatus"
        :setting-node-id="settingNodeId"
        @export-json="handleExportJSON"
        @delete-node="handleDeleteNode"
      />
    </div>
    <GraphShow :json-data="jsonData" />
    <div class="control">
      <div class="export-btn btn" @click="exportJSON">导出JSON</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue";
import Graph from "@/components/Graph.vue";
import GraphShow from "@/components/GraphShow.vue";
import { NodeClass, EdgeClass } from "@/components/Graph.vue";

export interface SvgJsonClass {
  nodes: NodeClass[];
  edges: EdgeClass[];
  nodesInfo: object[];
}

@Component({
  components: {
    SideBar,
    Graph,
    GraphShow
  }
})
export default class FlowChart extends Vue {
  private saveStatus: boolean = false;
  private jsonData!: SvgJsonClass;
  private importJsonData!: SvgJsonClass;
  private settingNodeId: number = 0;
  private nodeType: string = "real"; // real || virtual
  private deleteNode: boolean = false;

  @Watch("jsonData", { deep: true })
  onJsonDataChanged(value: SvgJsonClass) {
    const { nodes, edges, nodesInfo } = value;
    if (
      nodes.length > 0 &&
      edges.length > 0
      // && nodesInfo.length > 0
    ) {
      // some callback..
    }
  }

  exportJSON() {
    this.saveStatus = true;
  }

  handleExportJSON(data: object) {
    this.jsonData = Object.assign(this.jsonData, data);
  }

  handleDeleteNode() {
    if (this.deleteNode === false) {
      this.deleteNode = true;
    } else {
      alert("当前删除状态出错，请重试");
    }
  }

  handleNodeSetting(setting: any) {
    const { id, type } = setting;
    this.settingNodeId = id;
    this.nodeType = type;
  }

  handleRecoverySideBar() {
    this.settingNodeId = 0;
    this.nodeType = "real";
  }

  recoverySave() {
    this.saveStatus = false;
    this.jsonData = {
      nodes: [],
      edges: [],
      nodesInfo: []
    };
  }
}
</script>

<style scoped lang="stylus">
.flow-chart-container {
    padding: 40px 20px 40px;
    background-color: #eee;

    .flow-chart-config {
        display: flex;
        align-items: center;
        height: 818px;
    }

    .control {
        display: flex;
        justify-content: flex-end;

        .btn {
            padding: 10px 20px;
            text-align: center;
            font-size: 20px;
            background-color: #fff;
            border-radius: 4px;
            transition: all 0.2s ease-in-out;
            cursor: pointer;
        }

        .btn:hover {
            color: #fff;
            background-color: #888;
        }
    }
}
</style>
