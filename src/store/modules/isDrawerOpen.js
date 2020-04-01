let app = {
  state: {
    isDrawerOpen: true
  },

  getters: { 
    c: state => {
      return state.isDrawerOpen
    }
  },

  mutations: {
    mutate_isDrawerOpen:(state, upload) =>{
      state.isDrawerOpen = upload
    }
  }
}
  
export default app