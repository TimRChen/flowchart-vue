<template>
    <div class="flow-chart-container">
        <Graph />
        <SideBar />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue";
import Graph from "@/components/Graph.vue";

@Component({
    components: {
        SideBar,
        Graph
    }
})
export default class Home extends Vue {}
</script>

<style scoped lang="stylus">
.flow-chart-container
    display flex
    align-items center
    padding 40px 20px 40px
    height 60vh
    background-color #eee
</style>

