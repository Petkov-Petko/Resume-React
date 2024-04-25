import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'

const Home = () => {
  return (
    <div className='homePage'>
        <NavBar />
        <Header />
        <hr/>
        <About />
        <hr></hr>
        <Projects />
    </div>
  )
}

export default Home