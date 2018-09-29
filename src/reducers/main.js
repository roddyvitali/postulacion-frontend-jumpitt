
const data = (state, action) => {
  switch (action.type){
    case 'LOAD_COOL': {
      console.log( 'LOAD_COOL', action.payload )
      return {
        ...state,
        toolbar: {
          notifications_count: action.payload.notifications_count,
          userName: action.payload.userName
        },
        menu:  action.payload.data.sections,
        dashboard: {
          users_data_graph: action.payload.data.users_data_graph,
          users_by_device_graph: action.payload.data.users_by_device_graph,
          discussions: action.payload.data.discussions,
          top_referrals: action.payload.data.top_referrals,
        }
      }
    }
    default:
      return state
  }
}

export default data