import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='homePage' id='home'>
        <NavBar />
        <Header />
        <hr/>
        <About />
        <hr></hr>
        <Projects />
        <hr></hr>
        <Contact />
        <hr></hr>
        <Footer />
    </div>
  )
}

export default Home