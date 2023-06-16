import { useState } from 'react'
import './App.css'

//ROUTE
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

//PAGES 
import CategoryPage from './pages/CategoryPage/CategoryPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import DetailProduct from './pages/DetailProduct/DetailProduct'

///Componentes
import Header from './componets/Header/Header'
import NavBar from './componets/NavBar/NavBar'

//Página de inicio
import ItemListContainer from './pages/ItemList/ItemListContainer'

function App() {

  return (
    <>
    <Router>
      <Header/>
      <div className='divNav'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<CategoryPage/>} />
          <Route path='/aboutUs' element={<AboutUsPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path="*" element={<ErrorPage />} />
          <Route path='/item/:id'element={<DetailProduct/>}/> 
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
