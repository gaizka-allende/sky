import expect from 'expect'
import cart from '../../reducers/cart'
import {
  ADD_TO_CART,
  CHECKOUT_REQUEST
} from '../../constants/ActionTypes'

describe('reducers', () => {
  describe('cart', () => {
    const initialState = {
      addedIds: []
    }

    it('should provide the initial state', () => {
      expect(cart(undefined, {})).toEqual(initialState)
    })

    it('should handle CHECKOUT_REQUEST action', () => {
      expect(cart(initialState, { type: 'CHECKOUT_REQUEST' }))
        .toEqual(Object.assign({}, initialState, {status: CHECKOUT_REQUEST }))
    })


    it('should handle ADD_TO_CART action', () => {
      expect(cart(initialState, { type: 'ADD_TO_CART', productId: 1 }))
      .toEqual({
        addedIds: [ 1 ]
      })
    })

    describe('when product is already in cart', () => {
      it('should handle ADD_TO_CART action', () => {
        const state = {
          addedIds: [ 1, 2 ]
        }

        expect(cart(state, { type: 'ADD_TO_CART', productId: 2 }))
        .toEqual({
          addedIds: [ 1, 2 ]
        })
      })
    })
   })
 })
