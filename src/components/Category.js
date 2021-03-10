import React from 'react'
import Card from './Card'

const Category = ({name, cards}) => {
  return (
    <div className='category'>
      <h1>{name}</h1>
      <div className="cardsWrap">
        {cards.map((card, index) => (
          <Card key={index} imgSrc={card.imgSrc} cardContent={card.cardContent} cardType={card.cardType} />
        ))}
      </div>
    </div>
  )
}

export default Category
