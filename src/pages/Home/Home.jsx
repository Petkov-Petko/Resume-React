import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import About from '../../components/About/About'

const Home = () => {
  return (
    <div className='homePage'>
        <NavBar />
        <Header />
        <hr/>
        <About />
        <hr></hr>
    </div>
  )
}

export default Home