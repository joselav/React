import { useState } from 'react'
import './App.css'

///Componentes
import Header from './componets/Header/Header'
import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/ItemList/ItemListContainer'

function App() {

  return (
    <>
      <Header/>
      <div className='divNav'> <NavBar/></div>
      <ItemListContainer greeting={"Esta página aún está en proceso..."} style={{}}></ItemListContainer>
    </>
  )
}

export default App
