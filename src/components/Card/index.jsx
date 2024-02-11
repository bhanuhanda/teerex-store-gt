import React from 'react'

import './Card.css'

const Card = ({ record }) => {
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
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card
