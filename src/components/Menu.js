import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='dropmenu'>
      {/* <ul className="dropmenu-links"> */}
        <h3>Categories</h3>
        <li><Link to='/products'>Dresses</Link></li>
        <li><Link to='/products'>Pants</Link></li>
        <li><Link to='/products'>Skirts</Link></li>
        <li><Link to='/products'>Shirts</Link></li>
        <li><Link to='/products'>Cardigans & hoodies</Link></li>
        <li><Link to='/products'>Jackets</Link></li>
        <li><Link to='/products'>Accessories</Link></li>
        <li><Link to='/products'>Shoes</Link></li>

        <h3>Events</h3>
        <li><Link to='/products'>At home</Link></li>
        <li><Link to='/products'>Professional</Link></li>
        <li><Link to='/products'>Party girl</Link></li>
        <li><Link to='/products'>Cosy autumn</Link></li>
        <li><Link to='/products'>Datenight</Link></li>
        <li><Link to='/products'>Holiday</Link></li>
      {/* </ul> */}
    </div>
  )
}

export default Menu