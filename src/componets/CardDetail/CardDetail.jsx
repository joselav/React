import React from 'react'
import "./CardDetail.css"

import '../../assets/fonts.css'

const CardDetail = ({product, productc}) => {
    const producto = product || productc;
  return (
    <div className='container'>
       <div className='container-left'>
        <div className='container-left-c-img'>
            <div className='container-left-c-c-img'>
                <img src={producto.image} alt={producto.name} className='container-left-img'/>
            </div>
         </div>
       </div>
       <div className='container-right'>
        <div className='container-right-c-txt'>
            <div className='container-righ-c-txt-t'>
                <h2>{producto.name}</h2>
            </div>
            <div className='container-right-c-txt-des'>
                <p>{producto.detail}</p>
            </div>
            <div className='container-right-c-txt-p'>
                <h3>PRECIO: €{producto.price}</h3>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CardDetail