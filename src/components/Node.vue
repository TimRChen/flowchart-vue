<template>
    <div
        class="node"
        @dragstart="dragstart($event, nodeItem)"
        @dragend="dragend"
        draggable="true"
    >
        <div class="title text">{{ nodeItem.title }}</div>
        <div class="id text">{{ nodeItem.id }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { NodeItem } from "@/components/SideBar.vue";
import { Action } from "vuex-class";


@Component
export default class Node extends Vue {
    @Prop() readonly nodeItem!: NodeItem;
    @Action('toggle_isDragging') toggleIsDragging:any

    dragstart(event: any, item: NodeItem) {
        this.toggleIsDragging(true)
        event.dataTransfer.setData("item", JSON.stringify(item));
    }

    dragend(event: any) {
        this.toggleIsDragging(false)
        event.dataTransfer.clearData();
    }
}
</script>

<style scoped lang="stylus">
.node {
    width: 40%;
    height: 50px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    cursor: grab;
    margin: 10px;
    user-select: none;
    border-radius: 2px;
    border: 2px solid #000;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #e2e2e2;
    }

    .text {
        font-size: 14px;
        color: #4A4A4A;
    }
}
</style>
