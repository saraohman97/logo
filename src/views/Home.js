import React from 'react'
import test from '../imgs/test.jpg'

const Home = () => {
  return (
    <div className='home'>

      <div className="showcase-1">
        <h3>Look out for Autumns newest arrivals <i className="fa-solid fa-circle-arrow-right"></i></h3>
        <div className="product-wrapper-1">
          <img src={test} alt="" />
          <img src={test} alt="" />
          <img src={test} alt="" />

          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      <div className="showcase-2">
        <h2>Look out for Autumns newest arrivals</h2>
        <div className="product-wrapper-2">
          <img src={test} alt="" />
          <img src={test} alt="" />
          <img src={test} alt="" />
        </div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>

      <div className="showcase-3">
        <h3>Look out for Autumns </h3> 
        <h2>newest arrivals </h2> 
          <img src={test} alt="" />
          <img src={test} alt="" />
      </div>

    </div>
  )
}

export default Home