import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import CocktailGrid from '../components/CocktailGrid'

const Home = () => {
  return (
    <>
     <Navbar />
      <div className='container mx-auto mt-35 p-2'>
        <SearchBar />
      </div>
      <div className="container mx-auto mt-5 p-4">
        <CocktailGrid />
      </div>
    </>
  )
}

export default Home