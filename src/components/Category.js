import React from 'react'
import Card from './Card'

const Category = ({name, cards}) => {
  return (
    <>
      <h1>{name}</h1>
      <div className="cardsWrap">
        {cards.map((card) => (
          <Card imgSrc={card.imgSrc} cardContent={card.cardContent} />
        ))}
      </div>
    </>
  )
}

export default Category
