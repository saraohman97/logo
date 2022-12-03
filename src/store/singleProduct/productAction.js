import actiontypes from "../actiontypes";
import axios from 'axios'

export const getProduct = (id) => {
    return async dispatch => {
        dispatch({
            type: actiontypes().products.getProduct
        })
        try {
            const res = await axios.get('http://localhost:9999/products/' + id)
            if(res.status === 200) {
                dispatch(getProductSuccess(res.data))
            } else {
                throw new Error('Could not fetch the data.')
            }
        } catch (err) {
            dispatch(getProductFailure(err.message))
        }
    }
}

const getProductSuccess = (product) => {
    return {
        type: actiontypes().products.getProductSuccess,
        payload: product
    }
}

const getProductFailure = (err) => {
    return {
        type: actiontypes().products.getProductFailure,
        payload: err
    }
}