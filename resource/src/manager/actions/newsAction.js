export const addNews=({id,title,photo,desc})=>(
    {
        type:'Add_news',
        value:{
          id,
          photo,
          title,
          desc
        }
      }
)

export const editNews=(id,update)=>(
  {
    type:'Edit_news',
    id,
    update
  }
)

export const removeNews=({id})=>(
    {
        type:'Remove_news',
        id

    }
)