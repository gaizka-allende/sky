import React, { Component, PropTypes } from 'react'
import Product from './Product'

export default class Confirmation extends Component {
  render() {

    const { products, onConfirmClicked } = this.props

    const hasProducts = products.length > 0
    const nodes = !hasProducts ?
      <li>No products selected</li> :
      products.map(product =>
        <Product
          title={product.title}
          key={product.id}/>
    )
    return (
      <section id="confirmation-container">
        <h3>Checkout confirmation</h3>
        <ul>{nodes}</ul>
        <button onClick={onConfirmClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Confirm
        </button>
      </section>
    )
  }
}

Confirmation.propTypes = {
  products: PropTypes.array,
  onConfirmClicked: PropTypes.func
}
