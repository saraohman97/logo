import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

const Cart = ({ toggleCart }) => {

    const { cart, totalAmount } = useSelector(state => state.cartReducer)

  return (
    <div className='cart-bg'>
        <div className='cart-view'>

            <div className="top">
                <h3>Cart</h3>
                <button className='btn-x' onClick={toggleCart}>X</button>
            </div>

            {!cart.length && (
                <div>Your cart is empty.</div>
            )}

            <div className="cart-item-wrapper">
                {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                ))}
            </div>

            <div className="bottom">
                <h3>Totalpris: {totalAmount} KR</h3>
                <button className='btn-finish'>Gå till kassan</button>
            </div>

        </div>
    </div>
  )
}

export default Cart