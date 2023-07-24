export const newsReducer=(state=[],action)=>{
    switch (action.type) {
      case 'Add_news':
        return [...state,action.value]

      case 'Edit_news':
        return state.map(item=>{
          if (action.id===item.id) {
            return {...item,...action.update}
          }else{
            return item
          }
        })

      case 'Remove_news':
        return state.filter(item=>item.id !== action.id)
      default:
        state
    }
  }