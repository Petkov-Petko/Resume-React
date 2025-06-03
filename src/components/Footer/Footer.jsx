import React from 'react'
import './Footer.css'



const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='footer'>
       <p>© {currentYear} Petko Petkov</p>
    </div>
  )
}

export default Footer