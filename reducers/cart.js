import {
  ADD_TO_CART,
  CHECKOUT_REQUEST
} from '../constants/ActionTypes'

const initialState = {
  addedIds: []
}

function addedIds(state = initialState.addedIds, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    default:
      return state
  }
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return Object.assign({}, state, {status: CHECKOUT_REQUEST });
    default:
      return {
        addedIds: addedIds(state.addedIds, action)
      }
  }
}

export function getAddedIds(state) {
  return state.addedIds
}
