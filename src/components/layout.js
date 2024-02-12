import React from 'react'
import Navbar from './Navbar'

export default function layout({children}) {
  return (
    <div className='layout'>
      <Navbar />
      <div className='content'>
          { children }
      </div>
      <footer>
        <p>copyright 2024 gatsby-project</p>
      </footer>
    </div>
  )
}
