import React from 'react'
import Category from '../components/Category'


const cardsUY = [
  {
    cardContent: 'Easy Listening',
    imgSrc: 'https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  ,
  {
    cardContent: 'Dancehall',
    imgSrc: 'https://is3-ssl.mzstatic.com/image/thumb/Music/a0/fd/cd/mzi.oakcvpwb.jpg/400x400bb.jpeg'
  }
]

const cardsPP = [
  {
    cardContent: 'Folk Pop',
    imgSrc: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/folk_pop_250x250.jpg'
  }
]

const cardsRS = [
  {
    cardContent: 'Folk Pop',
    imgSrc: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/folk_pop_250x250.jpg'
  }
]

const categories = [
  {
    name: 'Trending Now',
    cards: cardsUY
  },
  {
    name: 'Most Streamed',
    cards: cardsPP
  },
  {
    name: 'Recently Streamed',
    cards: cardsRS
  }
]

const Home = () => {
  return (
    <div className='main'>
      <div className='upperNav'>
        <button className='btn btn-round btn-login rounded-pill'>LOG IN</button>
        <button className='btn btn-round btn-signup rounded-pill'>SIGN UP</button>
      </div>
      <div className='mainContent'>
        {categories.map((category, index) => (
          <Category key={index} name={category.name} cards={category.cards} />
        ))}
      </div>
    </div>
  )
}

export default Home
