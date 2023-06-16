import React from 'react'
import './CardCategory.css'
import '../../assets/fonts.css'

import { Link } from 'react-router-dom'

const CardCategory = () => {
  return (
    <div className="category">
        <Link to={'/'} style={{textDecoration:"none"}}>
            <div className='cat'>
                <div className="cat-img" style={{height:"60px"}}></div>
                <div className="cat-name" style={{}}>
                    <p>TODOS</p>
                </div>
            </div>
        </Link>
        <Link to={'/category/starwars'} style={{textDecoration:"none"}}>
            <div className='cat'> 
                <div className="cat-img">
                    <img src="https://i.pinimg.com/564x/30/db/ee/30dbee15d4780b6afb976f11bf103811.jpg" alt="Star Wars" />
                </div>
                <div className="cat-name">
                    <p>Star Wars</p>
                </div>
            </div>
        </Link>
        <Link to={'/category/animales'} style={{textDecoration:"none"}}>
            <div className='cat'> 
                <div className="cat-img">
                    <img src="https://i.pinimg.com/564x/86/89/8c/86898cdfc4dc955b7ce21627ec34de53.jpg" alt="Animales" />
                </div>
                <div className="cat-name">
                    <p>Animales</p>
                </div>
            </div>
        </Link>
        <Link to={'/category/varios'} style={{textDecoration:"none"}}>
            <div className='cat'> 
                <div className="cat-img">
                    <img src="https://i.pinimg.com/564x/25/2f/3f/252f3fa93e3a08c0fc1d2147be87ffc9.jpg" alt="Varios" />
                </div>
                <div className="cat-name">
                    <p>Varios</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default CardCategory