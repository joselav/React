import React from 'react'

import { useParams } from 'react-router-dom'
import data from '../assets/data.json'
import CardDetail from '../../componets/CardDetail/CardDetail'

const DetailProduct = () => {
    const { id } = useParams();
    const product = data.results.find((item)=> item.id.toString() === id);

    if (!product) {
        return <div>No se ha encontrado el producto.</div>
    }

  return (
    <div style={{width:"100vw", height:"90vh", backgroundColor:"#e0b88d", paddingTop: 30}}>
        <CardDetail product={product}/>
    </div>
  )
}

export default DetailProduct