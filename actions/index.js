import shop from '../api/shop'
import location from '../api/location'
import catalogue from '../api/catalogue'
import browser from '../helpers/browser'
import * as types from '../constants/ActionTypes'


function receiveChannels(channels) {
  return {
    type: types.CHANNELS_SUCCESS,
    products: channels
  }
}

function noChannelsReceived() {
  return {
    type: types.CHANNELS_FAILURE
  }
}

export function getChannelsByLocation(locationId) {
  return dispatch => {
    catalogue.getChannelsByLocation(
      locationId,
      channels => {
        dispatch(receiveChannels(channels))
      },
      () => {
        dispatch(noChannelsReceived())
      }
    )
  }
}

export function getCustomerLocation(customerId) {
  return dispatch => {
    location.getCustomerLocation(
      customerId,
      locationId => {
        dispatch(getChannelsByLocation(locationId))
      },
      () => {
        dispatch({
          type: types.LOCATION_FAILURE
        })
      }
    )
  }
}

export function getCustomerId() {
  return dispatch => {
    browser.getCustomerId(customerId => {
      dispatch(getCustomerLocation(customerId))
    })
  }
}

function addToCartUnsafe(productId) {
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export function addToCart(productId) {
  return (dispatch, getState) => {
    dispatch(addToCartUnsafe(productId))
  }
}

export function checkout(products) {
  return (dispatch, getState) => {

    const cart = getState().cart

    dispatch({
      type: types.CHECKOUT_REQUEST,
      cart
    })

  }
}

export function confirm(products) {

  return (dispatch, getState) => {

    const cart = getState().cart

    shop.purchaseChannels(
      cart.addedIds,
      (purchaseId) => {
        dispatch({
          type: types.CHECKOUT_SUCCESS,
          purchaseId
        })
      },
      () => {
        dispatch({
          type: types.CHECKOUT_FAILURE,
          purchaseId
        })
      }
    )
  }
}
