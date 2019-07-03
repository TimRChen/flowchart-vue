<template>
    <div class="side-bar-container">
        <div class="list">
            <Node v-for="(item, index) in list" :nodeItem="item" :key="index" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Node from "@/components/Node.vue";

export interface NodeItem {
    id: String;
    title: String;
}

@Component({
    components: { Node }
})
export default class SideBar extends Vue {
    private list: NodeItem[] = [
        {
            id: "1000000",
            title: "新建"
        },
        {
            id: "1000001",
            title: "完成"
        },
        {
            id: "2000000",
            title: "待入库"
        },
        {
            id: "2000001",
            title: "已入库"
        },
        {
            id: "2000000",
            title: "入库中"
        }
    ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.side-bar-container {
    width: 316px;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    box-shadow: 0 2px 4px 0 #B3C0D8;

    .list {
        width: 100%;
        display: flex;
        flex-flow: wrap;
    }
}
</style>
