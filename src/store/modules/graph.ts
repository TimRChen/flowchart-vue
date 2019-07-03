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
        state.graphState.selectedNode = node
      },
      CHANGE_SELECTEDEDGE: (state: any, edge: any) => {
        state.graphState.selectedEdge = edge
      },
      TOGGLE_ISDRAGGING: (state: any, isDragging: any) => {
        state.graphState.isDragging = isDragging
      },
      TOGGLE_TOLINK: (state: any, toLink: any) => {
        state.graphState.toLink = toLink
      }
    },
    actions: {
      changSelectedNode ({commit}, node: any) {
        commit('CHANGE_SELECTEDNODE', node)
        commit('CHANGE_SELECTEDEDGE', null)
      },
      changSelectedEdge ({commit}, edge: any) {
        commit('CHANGE_SELECTEDEDGE', edge)
        commit('CHANGE_SELECTEDNODE', null)
      },
      toggle_isDragging ({commit}, isDragging: any) {
        commit('TOGGLE_ISDRAGGING', isDragging)
      },
      toggle_toLink ({commit}, toLink: any) {
        commit('TOGGLE_TOLINK', toLink)
      }
    }
  }
  
  export default graph
  