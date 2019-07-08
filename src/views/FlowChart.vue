<template>
  <div class="flow-chart-container">
    <div class="flow-chart-config">
      <Graph
        :exportStatus.sync="exportStatus"
        @export-json="handleExportJSON"
      />
      <SideBar />
    </div>
    <GraphShow :jsonData="jsonData" />
    <div class="control">
      <div class="export-btn btn" @click="exportJSON">导出JSON</div>
      <div class="import-btn btn">引入JSON</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue";
import Graph from "@/components/Graph.vue";
import GraphShow from "@/components/GraphShow.vue";
import { NodeClass, EdgeClass } from "@/components/Graph.vue";

export interface SvgJsonClass {
  nodes: NodeClass[];
  edges: EdgeClass[];
}

@Component({
  components: {
    SideBar,
    Graph,
    GraphShow
  }
})
export default class FlowChart extends Vue {
  private exportStatus: Boolean = false;
  private jsonData: SvgJsonClass = {
    nodes: [],
    edges: []
  };

  exportJSON() {
    this.exportStatus = true;
  }

  handleExportJSON(data: SvgJsonClass) {
    this.jsonData = data;
    console.log(data);
    alert("导出json数据成功！");
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
        height: 60vh;
    }

    .control {
        display: flex;
        justify-content: flex-end;

        .btn {
            padding: 10px 20px;
            margin-right: 10px;
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
