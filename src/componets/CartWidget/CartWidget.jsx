import React from 'react'
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import '../../assets/fonts.css'

const CartWidget = () => {
  return (
    <div style={{display:"flex", width:"50px", height:"40px", margin:"auto"}}>
        <LocalGroceryStoreRoundedIcon sx={{color:"white", alignItems:"center", height:"40px"}}></LocalGroceryStoreRoundedIcon>
        <p style={{fontFamily:"'Josefin Slab', serif", fontWeight:"700"}}>10</p>
    </div>
  )
}

export default CartWidget