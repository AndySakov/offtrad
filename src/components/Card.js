import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ cardType, imgSrc, cardContent }) => {
  return (
    <>
      <div className="card">
            <div className="cardImage">
                <img src={imgSrc} className={cardType} alt="Pic 1"/>
            </div>
            <div className="cardContent">
              <h3 className="lg">{cardContent}</h3>
            </div>
          </div>
    </>
  )
}

Card.defaultProps = {
  cardType: "normal"
}

Card.propTypes = {
  cardType: PropTypes.string
}

export default Card
