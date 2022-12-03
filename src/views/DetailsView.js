import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../store/singleProduct/productAction'
import cart from '../imgs/cart.png'
import { increment } from '../store/cart/cartAction'


const DetailsView = () => {

    const dispatch = useDispatch()
    const { loading, error, data: product } = useSelector(state => state.productReducer)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProduct(id))
    }, [dispatch, id])

  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}

    <div className='details-view'>
        <div className="product">

            <img src={product.image} alt="" />
            <div className="right">
                <div className="buttons">
                    <h2>{product.title}</h2>
                    <i className="fa-regular fa-heart brown"></i>
                </div>
                <h2 className='brown'>{product.price} KR</h2>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro possimus sint distinctio autem tempora tempore eos a natus harum voluptatum reprehenderit iste asperiores minus, repellat sapiente incidunt. Quo, minima earum?</p>
                <div className="buttons">
                    <button className='btn-filter'>Size <i className="fa-solid fa-chevron-down brown"></i></button>
                    <button className='btn-filter'>Color <i className="fa-solid fa-chevron-down brown"></i></button>
                    <img src={cart} alt="" className='cart' onClick={() => dispatch(increment(product))} />
                </div>
                <div className="buttons">
                    <img src={product.imageBack} alt="" />
                    <img src={product.imagePlain} alt="" />
                </div>
            </div>





        </div>
    </div>
    </>
  )
}

export default DetailsView