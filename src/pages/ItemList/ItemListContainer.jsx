import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../../assets/fonts.css'
import './ItemListContainer.css'

import CardsProducts from '../../componets/CardsProducts/CardsProducts';
import data from '../assets/data.json'


const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);

  useEffect (() => {
    setProducts(data.results)
  }, []);

  return (
    <div className='all'>
      <div className='listaP'>
          {products.map((product) =>{
            return <div key={product.id}>
              <Link to={`item/${product.id}`} style={{ textDecoration: 'none' }}>
                <CardsProducts product={product} />
              </Link>
            </div>
          })}
      </div>
    </div>
  )
}

export default ItemListContainer