import React from 'react'
import Category from './Category'

const categories = [
  {
    name: 'Punk Rock'
  }
]

const cards = [
  {
    name: '90\'s Rock',
    imgLink: 'https://images.unsplash.com/photo-1598387993463-8df613230721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
    interactions: null
  }
]

const Main = () => {
  return (
    <div className='main'>
      <div className='upperNav'></div>
      <div className='mainContent'>
        {categories.map((category) => (
          <Category name={category.name} cards={cards} />
        ))}
      </div>
    </div>
  )
}

export default Main
