import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Product from '../../components/Product'
import ProductItem from '../../components/ProductItem'

function setup(product) {
  const actions = {
    onAddToCartClicked: expect.createSpy()
  }

  const component = shallow(
    <ProductItem product={product} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    selectBox: component.find('.product-select'),
    product: component.find(Product)
  }
}

let productProps

describe('ProductItem component', () => {
  beforeEach(() => {
    productProps = {
      title: 'SKY_NEWS'
    }
  })

  it('should render product', () => {
    const { product } = setup(productProps)
    expect(product.props()).toEqual({ title: 'SKY_NEWS' })
  })


  it('should call action on button click', () => {
    const { selectBox, actions } = setup(productProps)
    selectBox.simulate('click')
    expect(actions.onAddToCartClicked).toHaveBeenCalled()
  })

 })
