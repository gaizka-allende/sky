import {
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
}


export default function shop(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_SUCCESS:
      return Object.assign({}, state, {status: CHECKOUT_SUCCESS, purchaseId: action.purchaseId });
    case CHECKOUT_FAILURE:
    return Object.assign({}, state,{status: CHECKOUT_FAILURE, purchaseId: action.purchaseId });
    default:
      return state
  }
}
