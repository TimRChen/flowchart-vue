interface graphStateClass {
  selectedNode: boolean;
  selectedEdge: boolean;
  isDragging: boolean;
  toLink: boolean;
}

const getters = {
  graphState: (state: { graph: { graphState: graphStateClass } }) =>
    state.graph.graphState
};

export default getters;
