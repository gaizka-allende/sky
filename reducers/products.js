import { combineReducers } from 'redux'
import { CHANNELS_SUCCESS, ADD_TO_CART } from '../constants/ActionTypes'

function products(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state)
    default:
      return state
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case CHANNELS_SUCCESS:
      return Object.assign({},
        state,
        action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        })
      )
    default:
      const { productId } = action
      if (productId) {
        return Object.assign({}, state, {
          [productId]: products(state[productId], action)
        })
      }
      return state
  }
}

function visibleIds(state = [], action) {
  switch (action.type) {
    case CHANNELS_SUCCESS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export function getProduct(state, id) {
  return state.byId[id]
}

export function getVisibleProducts(state) {
  return state.visibleIds.map(id => getProduct(state, id))
}
