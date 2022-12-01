import React from 'react'

const Item = ({ product }) => {
  return (
    <div className='item'>
        <img src={product.image} alt="" />
        <p>{product.title}</p>
        <p className='brown'>{product.price} KR</p>
    </div>
  )
}

export default Item