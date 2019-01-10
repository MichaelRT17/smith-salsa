const initialState = {
    quantity: 0,
}

const ORDER_QUANTITY = 'ORDER_QUANTITY';

export function orderQuantity(quantity) {
    return {
        type: ORDER_QUANTITY,
        payload: quantity
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ORDER_QUANTITY:
            return Object.assign({}, state, {quantity: action.payload})
        default:
            return state;
    }
}