import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Product from '../../components/Product'

function setup(props) {
  const component = shallow(
    <Product {...props} />
  )

  return {
    component: component
  }
}

describe('Product component', () => {
  it('should render title', () => {
    const { component } = setup({ title: 'SKY NEWS' })
    expect(component.text()).toMatch(/^SKY NEWS/)
  })

})
