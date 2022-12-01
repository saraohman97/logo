import actiontypes from '../actiontypes'

const initState = {
    data: [],
    loading: false,
    error: null
}

const productsReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().products.getProducts:
        return {
            ...state,
            loading: true
        }

    case actiontypes().products.getProductsSuccess:
        return {
            ...state,
            loading: false,
            error: null,
            data: action.payload
        }

    case actiontypes().products.getProductsFailure:
        return {
            ...state,
            loading: false,
            error: action.payload
        }

    default:
        return state

  }
}

export default productsReducer