import actiontypes from '../actiontypes'

const initState = {
    cart: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().cart.increment: {

        const itemRef = state.cart.find(item => item.id === action.payload.id)

        let cartItem = {
            ...action.payload,
            quantity: 1
        }

        itemRef
        ? itemRef.quantity += 1
        : state.cart = [...state.cart, cartItem]

        return {
            ...state,
            totalQuantity: getTotalQuantity(state.cart),
            totalAmount: getTotalAmount(state.cart)
        }
    }

    case actiontypes().cart.decrement: {

        const itemRef = state.cart.find(item => item.id === action.payload)

        itemRef.quantity === 1
        ? state.cart = state.cart.filter(item => item.id !== action.payload)
        : itemRef.quantity -= 1

        return {
            ...state,
            totalQuantity: getTotalQuantity(state.cart),
            totalAmount: getTotalAmount(state.cart)
        }
    }

    case actiontypes().cart.deleteOne: {

        state.cart = state.cart.filter(item => item.id !== action.payload)

        return {
            ...state,
            totalQuantity: getTotalQuantity(state.cart),
            totalAmount: getTotalAmount(state.cart)
        }
    }

    case actiontypes().cart.deleteAll: {

        return {
            ...state,
            cart: [],
            totalAmount: 0,
            totalQuantity: 0
        }
    }

    default:
        return state
  }
}

export default cartReducer


const getTotalQuantity = cart => {
    let quantity = 0

    cart.forEach(item => {
        quantity += item.quantity
    })

    return quantity
}

const getTotalAmount = cart => {
    let amount = 0

    cart.forEach(item => {
        amount += item.quantity * item.price
    })

    return amount
}