import React, { Component, PropTypes } from 'react'
import Product from './Product'

export default class ProductItem extends Component {
  render() {
    const { product } = this.props

    return (
      <li>
        <input className="product-select" type="checkbox"
          onClick={this.props.onAddToCartClicked} />
        <Product
          title={product.title}/>
      </li>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}
