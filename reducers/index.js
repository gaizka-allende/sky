import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'
import shop, * as fromShop from './shop'

export default combineReducers({
  cart,
  products,
  shop
})

function getAddedIds(state) {
  return fromCart.getAddedIds(state.cart)
}

function getProduct(state, id) {
  return fromProducts.getProduct(state.products, id)
}

export function getCartProducts(state) {
  return getAddedIds(state).map(id => Object.assign(
    {},
    getProduct(state, id)
  ))
}

export function getStatus(state) {
  if (state.cart.status) {
    return state.cart.status
  }
  else if (state.shop.status) {
    return state.shop.status
  }
  else {
    return state.products.status
  }
}

export function getPurchaseId(state) {
  return state.shop.purchaseId
}
