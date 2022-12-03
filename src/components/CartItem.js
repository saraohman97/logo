import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { increment, decrement, deleteOne } from '../store/cart/cartAction'

const CartItem = ({ item }) => {

    const dispatch = useDispatch()
    // const { totalQuantity } = useSelector(state => state.cartReducer)

  return (
    <Link to={`/products`} className="cart-item">
        <img src={item.image} alt="" />
        <div className="text">
            <h3>{item.title}</h3>
            <h3 className='brown'>{item.price} KR</h3>
            <div className="buttons">
                <button className='btn-filter'>Small <i className="fa-solid fa-chevron-down"></i></button>
                <div className="add">
                    <button className='btn-add' onClick={() => dispatch(decrement(item.id))}>-</button>
                    <p className='border'>{item.quantity}</p>
                    <button className='btn-add' onClick={() => dispatch(increment(item))}>+</button>
                </div>
                <button className='btn-red' onClick={() => dispatch(deleteOne(item.id))}>X</button>
            </div>
        </div>
    </Link>
  )
}

export default CartItem