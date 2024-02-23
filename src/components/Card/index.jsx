import React, { useState, useContext } from 'react'

import './Card.css'
import { CartDetailsContext, DataContext } from '../../helpers/context'

const Card = ({ record }) => {
  const data = useContext(DataContext);
  const { cartDetails, setCartDetails } = useContext(CartDetailsContext);
  const [isAdditionDisabled, setIsAdditionDisabled] = useState(false);

  const handleAddToCart = () => {
    const key = record.id;
    const value = cartDetails.get(key) || 0;
    setCartDetails(new Map(cartDetails.set(key, value + 1)));

    // handling inventory check
    const quantityAllowed = data.find(d => d.id === record.id).quantity;
    const quantitySelected = cartDetails.get(record.id);
    const isQuantityConsumed = quantitySelected >= quantityAllowed;
    setIsAdditionDisabled(isQuantityConsumed);
  }

  const handleRemoveFromToCart = () => {
    const key = record.id;
    if(cartDetails.get(key) === 1) {
      const updatedMap = new Map(cartDetails);
      updatedMap.delete(key);
      setCartDetails(updatedMap);
    } else {
      setCartDetails(new Map(cartDetails.set(key, cartDetails.get(key) - 1)));
    }
    setIsAdditionDisabled(false);
  }

  return (
    <div className='card'>
        <div className='card-title'>
            <b>{record.name}</b>
        </div>
        <div className='card-preview'>
            <img src={record.imageURL} alt={record.name} width='100%' />
        </div>
        <div className="card-footer">
            <span>{record.price}</span>
            {cartDetails.get(record.id) ? (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <button className='button-black' onClick={handleRemoveFromToCart}>-</button>
                <span style={{ margin: 'auto 0.6rem' }}>{cartDetails.get(record.id)}</span>
                <button className='button-black' disabled={isAdditionDisabled} onClick={handleAddToCart}>+</button>
              </span>
            ) : (
              <button className='button-black' disabled={isAdditionDisabled} onClick={handleAddToCart}>Add to Cart</button>
            )}
        </div>
    </div>
  )
}

export default Card
