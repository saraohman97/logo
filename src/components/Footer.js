import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <ul className="column">
            <h3>ABOUT LOGO</h3>
            <li>About us</li>
            <li>Size guide</li>
            <li>Press</li>
            <li>Find us</li>
            <li>Partnership</li>
        </ul>

        <ul className='column'>
            <h3>HELP</h3>
            <li>Customer service</li>
            <li>Return policy</li>
            <li>My account</li>
            <li>Contact us</li>
            <li>Cookie policies</li>
        </ul>

        <p>Looking for a career in fashion and service? Look no further. We are the best in both. <Link to='/' className='link'>We are looking for you <i className="fa-solid fa-arrow-right-long"></i></Link></p>
    </div>
  )
}

export default Footer