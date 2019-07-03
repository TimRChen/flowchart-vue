import Vue from "vue";
import Vuex from "vuex";
import graph from "@/store/modules/graph.ts";
import getters from "@/store/getters.ts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    graph
  },
  getters,
  state: {},
  mutations: {},
  actions: {}
});
