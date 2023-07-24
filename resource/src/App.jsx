import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/client/Home'
import NotFoundPages from './pages/notFoundPages'
import Header from './components/Header'
import '../src/asset/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import NewsDetails from './pages/Details'
import Dashboard from './pages/admin/Dashboard'
import AddNews from './pages/admin/update/AddNews'
import EditNews from './pages/admin/update/EditNews'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Container>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/:url' element={<NewsDetails />}></Route>
      <Route path='*' element={<NotFoundPages />}></Route>
      <Route path='/admin' element={<Dashboard />}></Route>
      <Route path='/admin/add' element={<AddNews />}></Route>
      <Route path='/admin/edit/:ne' element={<EditNews />}></Route>
    </Routes>
    </Container>
    </BrowserRouter>
  )
}

export default App