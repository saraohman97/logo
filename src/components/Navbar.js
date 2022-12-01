import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import cart from '../imgs/cart.png'
import Menu from './Menu'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    showMenu
    ? setShowMenu(false)
    : setShowMenu(true) 
  }
 
  return (
    <>
    <div className='navbar'>
      <Link to='/'><h1>LOGO</h1></Link>
      <div className="menu">
        <p>Woman / Man</p>

        <div className="nav-links">
          <NavLink to='/products' onMouseEnter={toggleMenu} className='nav-link'>Categories</NavLink>
          {showMenu && <Menu />}
          <NavLink to='/products' className='nav-link'>Jewelry</NavLink>
          <NavLink to='/products' className='nav-link'>Sale</NavLink>
          <NavLink to='/products' className='nav-link'>Occassion</NavLink>
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