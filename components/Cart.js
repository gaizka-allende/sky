import React, { Component, PropTypes } from 'react'
import Product from './Product'
import { EMPTY_BASKET_MESSAGE } from '../constants/labels';

export default class Cart extends Component {
  render() {

    const { products, onCheckoutClicked } = this.props

    const hasProducts = products.length > 0
    const nodes = !hasProducts ?
      <li><span className="empty-basket-message">{ EMPTY_BASKET_MESSAGE }</span></li> :
      products.map(product =>
        <Product
          title={product.title}
          key={product.id}/>
    )

    //<p>Total: &#36;{total}</p>
    return (
      <section id="basket-container">
        <h3>Basket</h3>
        <ul>{nodes}</ul>
        <button onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </section>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  onCheckoutClicked: PropTypes.func
}
