const actiontypes = () => {
  return {
    products: {
      getProducts: 'GET_PRODUCTS',
      getProductsSuccess: 'GET_PRODUCTS_SUCCESS',
      getProductsFailure: 'GET_PRODUCTS_FAILURE',

      getProduct: 'GET_PRODUCT',
      getProductSuccess: 'GET_PRODUCT_SUCCESS',
      getProductFailure: 'GET_PRODUCT_FAILURE'
    },
    cart: {
      increment: 'INCREMENT',
      decrement: 'DECREMENT',
      deleteOne: 'DELETE_ONE',
      deleteAll: 'DELETE_ALL'
    }
  }
}

export default actiontypes