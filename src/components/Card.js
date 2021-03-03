import React from 'react'

const Card = ({imgLink, cardName, interactions}) => {
  return (
    <div className="cardsWrap">
      {/* interactions.name = 1 */}
      <div className="card">
        <div className="cardImage">
          <img src={imgLink} alt="Pic 1"/>
        </div>
      </div>
      <div className="cardContent">
        <h3>{cardName}</h3>
      </div>
    </div>
  )
}

export default Card
