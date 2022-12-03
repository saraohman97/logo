import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { increment } from '../store/cart/cartAction'

const Item = ({ product }) => {

  const dispatch = useDispatch()

  return (
    <Link to={`/products/${product.id}`} className='item'>
        <img src={product.image} alt="" />
        <p>{product.title}</p>
        <p className='brown'>{product.price} KR</p>

        <button onClick={() => dispatch(increment(product))}>Add to cart</button>
    </Link>
  )
}

export default Item