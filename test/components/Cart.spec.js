import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Cart from '../../components/Cart'
import Product from '../../components/Product'
import { EMPTY_BASKET_MESSAGE } from '../../constants/labels';

function setup(products = []) {
  const actions = {
    onCheckoutClicked: expect.createSpy()
  }

  const component = shallow(
    <Cart products={products} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find('button'),
    products: component.find(Product),
    emptyBasketMsg: component.find('.empty-basket-message')
  }
}

describe('Cart component', () => {
  it('should display add some products message', () => {
    const { emptyBasketMsg } = setup()
    expect(emptyBasketMsg.text()).toMatch(/^Your basket is empty/)
  })

  it('should disable button', () => {
    const { button } = setup()
    expect(button.prop('disabled')).toEqual('disabled')
  })

  describe('when given product', () => {
    const product = [
      {
        title: 'SKY SPORTS'
      }
    ]

    it('should render products', () => {
      const { products } = setup(product)
      const props = {
        title: product[0].title
      }

      expect(products.at(0).props()).toEqual(props)
    })

    it('should not disable button', () => {
      const { button } = setup(product)
      expect(button.prop('disabled')).toEqual('')
    })

    it('should call action on button click', () => {
      const { button, actions } = setup(product)
      button.simulate('click')
      expect(actions.onCheckoutClicked).toHaveBeenCalled()
    })
   })
})
