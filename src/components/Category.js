import React from 'react'
import Card from './Card'

const Category = ({name, cards}) => {
  return (
    <div className='category'>
      <h1>{name}</h1>
      <div className="cardsWrap">
        {cards.map((card) => (
          <Card imgSrc={card.imgSrc} cardContent={card.cardContent} />
        ))}
      </div>
    </div>
  )
}

export default Category
