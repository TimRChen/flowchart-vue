const graph = {
  state: {
    graphState: {
      selectedNode: null,
      selectedEdge: null,
      isDragging: false,
      toLink: false
    }
  },
  mutations: {
    CHANGE_SELECTEDNODE: (state: any, node: any) => {
      state.graphState.selectedNode = node;
    },
    CHANGE_SELECTEDEDGE: (state: any, edge: any) => {
      state.graphState.selectedEdge = edge;
    },
    TOGGLE_ISDRAGGING: (state: any, isDragging: boolean) => {
      state.graphState.isDragging = isDragging;
    },
    TOGGLE_TOLINK: (state: any, toLink: boolean) => {
      state.graphState.toLink = toLink;
    }
  },
  actions: {
    changSelectedNode(action: any, node: any) {
      action.commit("CHANGE_SELECTEDNODE", node);
      action.commit("CHANGE_SELECTEDEDGE", null);
    },
    changSelectedEdge(action: any, edge: any) {
      action.commit("CHANGE_SELECTEDEDGE", edge);
      action.commit("CHANGE_SELECTEDNODE", null);
    },
    toggle_isDragging(action: any, isDragging: boolean) {
      action.commit("TOGGLE_ISDRAGGING", isDragging);
    },
    toggle_toLink(action: any, toLink: boolean) {
      action.commit("TOGGLE_TOLINK", toLink);
    }
  }
};

export default graph;
