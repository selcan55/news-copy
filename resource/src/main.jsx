import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import configureStore from './manager/store/configureStore.js'
import { addNews, editNews } from './manager/actions/newsAction.js'

const store=configureStore()



store.subscribe(()=>{
  console.log(store.getState());
})




store.dispatch(addNews({id:1,title: 'GRAVITY RIPPLING WAVES',photo:"https://15zinetheme.com/classic/wp-content/uploads/sites/2/2020/03/15zine-21-360x240.jpg.webp",desc:'A billion trillion stars descended from astronomers laws of physics tingling of the gravity ripples. A mote of...'}))
store.dispatch(addNews({id:2,title: '5 TREND KEEPS IN SPRING',photo:"https://15zinetheme.com/classic/wp-content/uploads/sites/2/2020/08/zeen-many-1-360x240.jpg.webp",desc:'The ash of stellar alchemy sea of tranquility orions sword a still more glorious dawn awaits shores of...'}))
const news1=store.dispatch(addNews({id:3,title: 'DOTTY FOR POLKA DOTS',photo:"https://15zinetheme.com/classic/wp-content/uploads/sites/2/2020/08/15zine-10-360x240.jpg.webp",desc:'Artificial intelligence has been argued that plants should also be classified as intelligent based on their ability to...'}))
store.dispatch(editNews(news1.value.id,{title: 'DOTTY FOR POLKA DOTS',photo:"https://15zinetheme.com/classic/wp-content/uploads/sites/2/2020/08/15zine-10-360x240.jpg.webp",desc:'Artificial intelligence has been argued that plants should also be classified as intelligent based on their ability to...'}))





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
