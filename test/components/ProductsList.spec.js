import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import ProductsList from '../../components/ProductsList'

function setup(props) {
  const component = shallow(
    <ProductsList title={props.title}>{props.children}</ProductsList>
  )

  return {
    component: component,
    children: component.children().at(1),
    h3: component.find('h3')
  }
}

describe('ProductsList component', () => {
  it('should render title', () => {
    const { h3 } = setup({ title: 'News channels' })
    expect(h3.text()).toMatch(/^News channels$/)
  })

  it('should render children', () => {
    const { children } = setup({ title: 'News channels', children: 'children elems html' })
    expect(children.text()).toMatch(/^children elems html$/)
  })
 })
