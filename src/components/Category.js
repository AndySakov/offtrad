import React from 'react'
import Card from './Card'

const Category = ({name, cards}) => {
  return (
    <div className='category'>
      <h3>{name}</h3>
      {cards.map((card) => (
        <Card cardName={card.name} imgLink={card.imgLink} interactions={card.interactions} />
      ))}
    </div>
  )
}

export default Category
