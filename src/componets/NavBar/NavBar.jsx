import React from 'react'


import './NavBar.css'
import '../../assets/fonts.css'
import CartWidget from '../CartWidget/CartWidget'

import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className="flez">
        <div className='nave'>
            <ul>
              <Link className='lis' to="/">Inicio</Link>
              <Link className='lis' to="/category/:categoryId">Categorías</Link>
              <Link className='lis' to="/aboutUs">Sobre Nosotros</Link>
              <Link className='lis' to="/contact">Contacto</Link>
            </ul> 
        </div>
        <div className="carrito">
            <CartWidget style={{alignItems:"center"}}></CartWidget>
        </div>
    </div>
    
    

    </>
  )
}

export default NavBar