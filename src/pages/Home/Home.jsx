import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'

const Home = () => {
  return (
    <div className='homePage'>
        <NavBar />
        <Header />
    </div>
  )
}

export default Home