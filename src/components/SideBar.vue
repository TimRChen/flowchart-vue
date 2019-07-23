<template>
  <div class="side-bar-container">
    <div class="nav-bar">
      <div
        class="nav"
        :class="{ active: nav === '流程状态' }"
        @click="chooseNav('流程状态')"
      >
        流程状态
      </div>
      <div class="split"></div>
      <div
        class="nav"
        v-show="settingNodeId !== 0"
        :class="{ active: nav === '状态设置' }"
        @click="chooseNav('状态设置')"
      >
        状态设置
      </div>
    </div>

    <div class="status-content" v-show="showList">
      <div class="list">
        <Node v-for="(item, index) in list" :node-item="item" :key="index" />
      </div>
    </div>

    <div class="setting-status" v-show="showSetting">
      <div class="node-attr normal-block">
        <div class="title">节点属性</div>
        <div class="btn-g">
          <button
            :class="{ active: nodeType === 'real' }"
            @click="chooseNodeType('real')"
          >
            实节点
          </button>
          <button
            :class="{ active: nodeType === 'virtual' }"
            @click="chooseNodeType('virtual')"
          >
            虚节点
          </button>
        </div>
        <div class="control-btn-group">
          <div class="delete-node btn">
            <button @click="deleteNode">删除节点</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Node from "@/components/Node.vue";
import { SvgJsonClass } from "@/views/FlowChart.vue";

export interface NodeItem {
  id: number;
  title: string;
}

@Component({
  components: { Node }
})
export default class SideBar extends Vue {
  @Prop() private settingNodeId!: number;
  @Prop() private nodeType!: string;
  @Prop() private saveStatus!: boolean;
  @Prop() private importJsonData!: SvgJsonClass;

  private nav: string = "流程状态"; // 流程状态 || 状态设置
  private statusText: string = "";
  private list: NodeItem[] = [
    {
      id: 1,
      title: "开始"
    },
    {
      id: 2,
      title: "结束"
    },
    {
      id: 3,
      title: "待审核"
    },
    {
      id: 4,
      title: "已审核"
    },
    {
      id: 5,
      title: "审核失败"
    },
    {
      id: 6,
      title: "测试1"
    },
    {
      id: 7,
      title: "测试2"
    },
    {
      id: 8,
      title: "测试3"
    }
  ];
  private nodesInfo: any[] = [];

  private get showList() {
    return this.nav === "流程状态";
  }
  private get showSetting() {
    return this.nav === "状态设置";
  }

  @Watch("settingNodeId")
  onSettingNodeIdChanged(id: number) {
    if (id !== 0) {
      this.nav = "状态设置";
      this.addNodeInfo(id).then(id => {
        this.previewNodeSetting(id);
      });
    } else {
      this.initialSetting();
    }
  }
  @Watch("saveStatus")
  onSaveStatusChanged(value: boolean) {
    if (value) {
      this.saveJsonData();
    }
  }
  @Watch("importJsonData", { deep: true })
  onImportJsonDataChanged(obj: SvgJsonClass) {
    const { nodeInfoList } = JSON.parse(JSON.stringify(obj));
    this.nodesInfo = nodeInfoList;
  }

  saveJsonData() {
    const { nodesInfo } = this;
    const json = { nodesInfo };
    this.$emit("export-json", json);
  }

  initialSetting() {
    this.nav = "流程状态";
  }

  chooseNav(type: string) {
    this.nav = type;
  }

  /**
   * 处理类型改变时
   * @argument {string} type - 类型
   */
  handleTypeChanged(type: string) {
    this.nodesInfo.forEach(
      (node: any): any => {
        if (node.id === this.settingNodeId) {
          node.type = type === "real" ? 1 : 2;
        }
        return node;
      }
    );
  }

  /**
   * 选择节点类型
   * @argument {string} type - 类型
   */
  chooseNodeType(type: string) {
    if (this.settingNodeId !== 0) {
      this.$emit("update:nodeType", type);
      this.handleTypeChanged(type);
    } else {
      this.noNodeError();
    }
  }

  idExist(id: number): boolean {
    const index = this.nodesInfo.findIndex(i => i.id === id);
    if (index !== -1) {
      return true;
    }
    return false;
  }
  /**
   * 增加节点设置信息
   * @argument {number} id - 节点ID
   * @return {Promise<number>}
   */
  addNodeInfo(id: number): Promise<number> {
    return new Promise(resolve => {
      if (this.idExist(id)) {
        resolve(id);
      } else {
        const nodeInfo = {
          id,
          type: 1,
          desc: "",
          postDoAction: "",
          doAction: "",
          preDoAction: "",
          nodeCondition: ""
        };
        this.nodesInfo.push(nodeInfo);
        resolve(id);
      }
    });
  }

  /**
   * 预览节点设置信息
   * @argument {number} id - 节点ID
   */
  previewNodeSetting(id: number) {
    const { type } = this.nodesInfo.find(i => i.id === id);
    const nodeType = type === 1 ? "real" : "virtual";
    this.$emit("update:nodeType", nodeType);
  }

  /**
   * 删除节点
   */
  deleteNode() {
    if (this.settingNodeId === 0) {
      this.noNodeError();
      return false;
    }
    if (window.confirm("确认移除当前选中节点？")) {
      const index = this.nodesInfo.findIndex(
        node => node.id === this.settingNodeId
      );
      this.nodesInfo = this.nodesInfo.splice(index, 1);
      this.$emit("delete-node");
      this.initialSetting();
    }
  }

  noNodeError() {
    alert("当前尚未选择节点，不可进行操作！");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.side-bar-container {
    width: 330px;
    height: 100%;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    box-shadow: 0 2px 4px 0 #b3c0d8;
    display: flex;
    flex-flow: column;

    .nav-bar {
        border-bottom: 1px solid #c4c4c4;
        display: flex;
        align-items: center;

        .nav {
            font-size: 20px;
            color: #9b9b9b;
            margin: 17px 19px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.2s ease-in-out;

            &:hover {
                color: #4a4a4a;
            }
        }

        .active {
            color: #4a4a4a;
            font-weight: 700;
        }

        .split {
            height: 28px;
            width: 1px;
            border: 1px solid #dddddd;
            transform: scaleX(0.5);
        }
    }

    .status-content {
        overflow: scroll;
        position: relative;

        .list {
            display: flex;
            flex-flow: wrap;
            justify-content: space-between;
        }
    }

    .setting-status {
        .normal-block {
            margin: 30px 12px 38px;

            .title {
                font-size: 16px;
                color: #4a4a4a;
                font-weight: bold;
                margin-bottom: 25px;
            }
        }

        .node-attr {
            button {
                width: 130px;
                height: 30px;
                outline: none;
                margin: 10px;
                font-size: 14px;
                border-radius: 10px;
                transition: all 0.2s ease-in-out;
            }
            .active {
                background-color: deepskyblue;
            }

            .control-btn-group {
                .delete-node {
                    button {
                        color: #fff;
                        background-color: red;
                    }
                }
            }
        }
    }
}
</style>
