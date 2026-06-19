import { useEffect } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

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