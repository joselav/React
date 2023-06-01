import React from 'react'


import './NavBar.css'
import '../../assets/fonts.css'
import CartWidget from '../CartWidget/CartWidget'



const NavBar = () => {
  return (
    <>
    <div className="flez">
        <div className='nave'>
            <ul>
                <li className='lis'><a href="">Inicio</a></li>
                <li className='lis'><a href="">Sobre Nosotros</a></li>
                <li className='lis'><a href="">Contacto</a></li>
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