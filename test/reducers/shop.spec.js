import expect from 'expect'
import shop from '../../reducers/shop'
import {
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE
} from '../../constants/ActionTypes'

describe('reducers', () => {
  describe('shop', () => {
    const initialState = {}

    it('should provide the initial state', () => {
      expect(shop(undefined, {})).toEqual(initialState)
    })

    it('should handle CHECKOUT_FAILURE action', () => {
      expect(shop({}, { type: 'CHECKOUT_SUCCESS', purchaseId: 'b7ec0353-2231-4fe3-8512-662416d55c0b' }))
        .toEqual(Object.assign(
          {},
          initialState,
          {purchaseId: 'b7ec0353-2231-4fe3-8512-662416d55c0b'},
          {status: CHECKOUT_SUCCESS }))
    })

    it('should handle CHECKOUT_FAILURE action', () => {
      expect(shop({}, { type: 'CHECKOUT_FAILURE', purchaseId: 'b7ec0353-2231-4fe3-8512-662416d55c0b' }))
        .toEqual(Object.assign(
          {},
          initialState,
          {purchaseId: 'b7ec0353-2231-4fe3-8512-662416d55c0b'},
          {status: CHECKOUT_FAILURE }))
    })

   })
 })
