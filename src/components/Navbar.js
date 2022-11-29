import React from 'react'
import { NavLink } from 'react-router-dom'
import cart from '../imgs/cart.png'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <h1>LOGO</h1>
      <div className="menu">
        <p>Woman / Man</p>

        <div className="nav-links">
          <NavLink>Categories</NavLink>
          <NavLink>Jewelry</NavLink>
          <NavLink>Sale</NavLink>
          <NavLink>Occassion</NavLink>
        </div>

        <div className="icons">
          <p>Cart - $ 0</p>
          <img src={cart} alt="" className='cart' />
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>

    <div className="nav-border"></div>
    </>
  )
}

export default Navbar