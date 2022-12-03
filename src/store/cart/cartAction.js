import actiontypes from '../actiontypes'

export const increment = product => {
    return {
        type: actiontypes().cart.increment,
        payload: product
    }
}

export const decrement = id => {
    return {
        type: actiontypes().cart.decrement,
        payload: id
    }
}

export const deleteOne = id => {
    return {
        type: actiontypes().cart.deleteOne,
        payload: id
    }
}

export const deleteAll = id => {
    return {
        type: actiontypes().cart.deleteAll,
        payload: id
    }
}