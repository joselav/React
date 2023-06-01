import React from 'react'
import '../../assets/fonts.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div style={{backgroundColor:"#f7e0c8", width:"100vw", height:"90vh", margin:"auto", justifyContent:"center"}}>
        <h2 style={{color:"#4d2f0e", fontFamily:"'Josefin Slab', serif", textAlign:"center", paddingTop:"340px"}}>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer