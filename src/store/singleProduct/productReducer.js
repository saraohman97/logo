import actiontypes from '../actiontypes'

const initState = {
    loading: false,
    error: null,
    data: []
}

const productReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().products.getProduct:
        return {
            ...state,
            loading: true
        }

    case actiontypes().products.getProductSuccess:
        return {
            ...state,
            loading: false,
            error: null,
            data: action.payload
        }

    case actiontypes().products.getProductFailure:
        return {
            ...state,
            loading: false,
            error: action.payload
        }

    default:
        return state

  }
}

export default productReducer