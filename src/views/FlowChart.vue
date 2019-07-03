<template>
    <div class="flow-chart-container">
        <SideBar />
        <Graph />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue"; // @ is an alias to /src
import Graph from "@/components/Graph.vue"; // @ is an alias to /src

@Component({
    components: {
        SideBar,
        Graph
    }
})
export default class Home extends Vue {}
</script>
