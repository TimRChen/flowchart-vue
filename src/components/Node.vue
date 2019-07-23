<template>
  <div
    class="node"
    draggable="true"
    @dragstart="dragstart($event, nodeItem)"
    @dragend="dragend"
  >
    <div class="id text">{{ nodeItem.id }}</div>
    <div class="title text">{{ nodeItem.title }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { NodeItem } from "@/components/SideBar.vue";
import { Action } from "vuex-class";

@Component
export default class Node extends Vue {
  @Prop() readonly nodeItem!: NodeItem;
  @Action("toggle_isDragging") toggleIsDragging: any;

  /**
   * 开始拖拽节点
   * @argument {DragEvent} event - 拖拽事件
   * @argument {NodeItem} item - 节点数据
   */
  dragstart(event: DragEvent, item: NodeItem) {
    this.toggleIsDragging(true);
    if (event.dataTransfer !== null) {
      event.dataTransfer.setData("item", JSON.stringify(item));
    }
  }

  /**
   * 拖拽节点事件终止
   * @argument {DragEvent} event - 拖拽事件
   */
  dragend(event: DragEvent) {
    this.toggleIsDragging(false);
    if (event.dataTransfer !== null) {
      event.dataTransfer.clearData();
    }
  }
}
</script>

<style scoped lang="stylus">
.node {
    width: 141px;
    height: 70px;
    margin: 2.5%;
    cursor: grab;
    display: flex;
    flex-flow: column;
    user-select: none;
    align-items: center;
    border-radius: 2px;
    justify-content: center;
    border: 2px solid #4a4a4a;
    transition: all 0.2s ease-in-out;

    .text {
        font-size: 14px;
        color: #4a4a4a;
    }

    &:hover {
        background-color: #e2e2e2;
    }
}
</style>
