import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProducts } from '../store/products/productsAction'
import Item from '../components/Item'

const ProductsView = () => {

    const dispatch = useDispatch()
    const { loading, error, data: products } = useSelector(state => state.productsReducer)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}

    <div className='products-view'>
        <div className="container">
            {/* ---------SIDEBAR------- */}
            <ul className="sidebar">
                <h2>Categories</h2>
                <li><Link to='/products'>Dresses</Link></li>
                <li><Link to='/products'>Pants</Link></li>
                <li><Link to='/products'>Skirts</Link></li>
                <li><Link to='/products'>Shirts</Link></li>
                <li><Link to='/products'>Cardigans & hoodies</Link></li>
                <li><Link to='/products'>Jackets</Link></li>
                <li><Link to='/products'>Accessories</Link></li>
                <li><Link to='/products'>Shoes</Link></li>

                <h3>Events</h3>
                <li><Link to='/products'>At home</Link></li>
                <li><Link to='/products'>Professional</Link></li>
                <li><Link to='/products'>Party girl</Link></li>
                <li><Link to='/products'>Cosy autumn</Link></li>
                <li><Link to='/products'>Datenight</Link></li>
                <li><Link to='/products'>Holiday</Link></li>
            </ul>

            {/* ---------CONTENT------- */}
            <div className="content">
                <div className="products-view-showcase">
                    <h3>Paint with all the colors of the wind</h3>
                </div>

                <div className="header">
                    <button className='btn-filter'>Size <i className="fa-solid fa-chevron-down brown"></i></button>
                    <button className='btn-filter'>Size <i className="fa-solid fa-chevron-down brown"></i></button>
                    <button className='btn-filter'>Size <i className="fa-solid fa-chevron-down brown"></i></button>
                    <button className='btn-filter'>Size <i className="fa-solid fa-chevron-down brown"></i></button>
                    <button className='btn-filter'>Size <i className="fa-solid fa-chevron-down brown"></i></button>
                </div>

                <div className="products">
                    {products.map(product => (
                        <Item key={product.id} product={product} />
                    ))}
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default ProductsView