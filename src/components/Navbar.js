import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import cart from '../imgs/cart.png'
import Menu from './Menu'
import Cart from '../components/Cart'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const toggleMenu = () => {
    showMenu
    ? setShowMenu(false)
    : setShowMenu(true) 
  }

  const toggleCart = () => {
    showCart
    ? setShowCart(false)
    : setShowCart(true) 
  }
 
  return (
    <>
    <div className='navbar'>
      <h1><Link to='/'>LOGO</Link></h1>
      <div className="menu">
        <p className='width'>Woman / Man</p>

        <div className="nav-links">
          <NavLink to='/products' onMouseEnter={toggleMenu} className='nav-link'>Categories</NavLink>
          {showMenu && <Menu />}
          <NavLink to='/products' className='nav-link'>Jewelry</NavLink>
          <NavLink to='/products' className='nav-link'>Sale</NavLink>
          <NavLink to='/products' className='nav-link'>Occassion</NavLink>
        </div>

        <div className="icons">
          <p>Cart - $ 0</p>
          <div onClick={toggleCart}><img src={cart} alt="" className='cart' /></div>
          {showCart && <Cart toggleCart={toggleCart} />}
          <i className="fa-solid fa-heart"></i>
        </div>
        
      </div>
    </div>

    <div className="nav-border"></div>
    </>
  )
}

export default Navbar