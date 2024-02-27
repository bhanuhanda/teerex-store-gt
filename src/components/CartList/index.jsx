import React from 'react'
import './index.css'

const CartList = ({ cartItemDetails }) => {
  return (
    <>
        {cartItemDetails.map((item) => (
            <div id='cart-item-wrapper' key={item.id}>
                <img src={item.imageURL} alt={`id-${item.id}-thumbnail`} height={'50px'} />
                <div id='cart-item-details'>
                    <b>{item.name}</b>
                    <b>{item.price}</b>
                </div>
                <div id='cart-item-quantity'>{item.cartQuantity}</div>
                <button id='cart-item-delete'>Delete</button>
            </div>
        ))}
    </>
  )
}

export default CartList
