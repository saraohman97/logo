import React from 'react'
import test from '../imgs/test.jpg'
import cart from '../imgs/cart.png'

const DetailsView = () => {
  return (
    <div className='details-view'>
        <div className="product">

            <img src={test} alt="" />
            <div className="right">
                <div className="buttons">
                    <h2>SKINNY FIT HÖG MIDJA BYXOR</h2>
                    <i className="fa-regular fa-heart brown"></i>
                </div>
                <h2 className='brown'>449.95 KR</h2>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro possimus sint distinctio autem tempora tempore eos a natus harum voluptatum reprehenderit iste asperiores minus, repellat sapiente incidunt. Quo, minima earum?</p>
                <div className="buttons">
                    <button className='btn-filter'>Size <i className="fa-solid fa-chevron-down brown"></i></button>
                    <button className='btn-filter'>Color <i className="fa-solid fa-chevron-down brown"></i></button>
                    <img src={cart} alt="" className='cart' />
                </div>
                <div className="buttons">
                    <img src={test} alt="" />
                    <img src={test} alt="" />
                </div>
            </div>





        </div>
    </div>
  )
}

export default DetailsView