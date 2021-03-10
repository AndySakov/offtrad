import React from 'react'
import PropTypes from 'prop-types'

const Artist = ({ coverImage, name }) => {
  return (
    <>
      <div className="card">
            <div className="cardImage">
                <img src={coverImage} className="round" alt="Pic 1"/>
            </div>
            <div className="cardContent">
              <h3>{name}</h3>
            </div>
          </div>
    </>
  )
}

export default Artist
