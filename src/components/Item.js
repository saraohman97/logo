import React from 'react'
import test from '../imgs/test.jpg'

const Item = () => {
  return (
    <div className='item'>
        <img src={test} alt="" />
        <p>SKINNY FIT HÖG MIDJA BYXOR</p>
        <p className='brown'>449.95 KR</p>
    </div>
  )
}

export default Item