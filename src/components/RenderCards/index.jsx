import React from 'react'
import Card from '../Card'

import './RenderCards.css'

const RenderCards = ({ filteredData }) => {
  return (
    <div id='cards-wrapper'>
        {filteredData.map((record) => <Card key={record.id} record={record} />)}
    </div>
  )
}

export default RenderCards
