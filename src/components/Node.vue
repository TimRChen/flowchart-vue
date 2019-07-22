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

  dragstart(event: DragEvent, item: NodeItem) {
    this.toggleIsDragging(true);
    if (event.dataTransfer !== null) {
      event.dataTransfer.setData("item", JSON.stringify(item));
    }
  }

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
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    cursor: grab;
    margin: 2.5%;
    user-select: none;
    border-radius: 2px;
    border: 2px solid #4a4a4a;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #e2e2e2;
    }

    .text {
        font-size: 14px;
        color: #4a4a4a;
    }
}
</style>
