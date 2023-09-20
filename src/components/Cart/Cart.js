import React, { Component } from 'react'
import ShoppingCartIcon from '../../images/shopping-cart.png' 

function Cart(){
    return(
        <>
        <div className="cart-container nav-custom-item">
        <img src={ShoppingCartIcon} className='icon-default'/>
        </div>
            
        </>
    )
}

export default Cart