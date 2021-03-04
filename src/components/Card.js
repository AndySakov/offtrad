import React from 'react'

const Card = ({ imgSrc, cardContent }) => {
  return (
    <>
      <div className="card">
            <div className="cardImage">
                <img src={imgSrc} alt="Pic 1"/>
            </div>
            <div className="cardContent">
              <h3>{cardContent}</h3>
            </div>
          </div>
    </>
  )
}

export default Card
