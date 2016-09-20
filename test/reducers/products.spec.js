import expect from 'expect'
import products from '../../reducers/products'

describe('reducers', () => {
  describe('products', () => {
    it('should handle CHANNELS_SUCCESS action', () => {
      const action = {
        type: 'CHANNELS_SUCCESS',
        products: [
          {
            id: 1,
            title: 'SKY_NEWS'
          },
          {
            id: 2,
            title: 'SKY_SPORTS'
          }
        ]
      }

      expect(products({}, action)).toEqual({
        byId: {
          2: {
            id: 2,
            title: "SKY_SPORTS"
          },
          id: 1,
          title: "SKY_NEWS"
        },
        visibleIds: [ 1, 2 ]
      })
    })

    it('should handle ADD_TO_CART action', () => {
      const state = {
        byId: {
          1: {
            id: 1,
            title: 'SKY_NEWS'
          }
        }
      }

      expect(products(state, { type: 'ADD_TO_CART', productId: 1 }))
        .toEqual({
          byId: {
            1: {
              id: 1,
              title: 'SKY_NEWS'
            }
          },
          visibleIds: []
        })
    })
   })
})
