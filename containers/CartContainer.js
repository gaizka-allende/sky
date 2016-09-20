import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getCartProducts } from '../reducers'
import Cart from '../components/Cart'

/*
 * The cart container
 * products and checkout handler as passed as props
 */

class CartContainer extends Component {
  render() {

    const { products } = this.props

    return (
      <Cart
        products={products}
        onCheckoutClicked={() => this.props.checkout()} />
    )
  }
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: getCartProducts(state)
  }
}

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
