import React from 'react'
import Category from '../components/Category'

const artistsUA = [
  {
    about: "H.skillz is a Nigerian talented Nigerian artist",
    id: 1,
    cardContent: "H.Skillz",
    imgSrc: "https://assets.audiomack.com/hskills/2347a277558ca2106b0742c6d00ea0e2ebfb0ff7def9068febfc545a9bcd55be.jpeg?width=140&height=140&max=true",
    cardType: "round"
  }
]

const categories = [
  {
    name: 'Upcoming Artists',
    artists: artistsUA
  }
]

const Artists = () => {
  return (
    <>
      {categories.map((category, index) => (
        <Category key={index} name={category.name} cards={category.artists} />
      ))}
    </>
  )
}

export default Artists
