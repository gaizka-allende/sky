import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { confirm } from '../actions'
import { getCartProducts } from '../reducers'
import Confirmation from '../components/Confirmation'

/*
 * The purchase confirmation request container
 * products and confirm handler passed as props
 */
class ConfirmationContainer extends Component {
  render() {

    const { products } = this.props

    return (
      <Confirmation
        products={products}
        onConfirmClicked={() => this.props.confirm()} />
    )
  }
}

ConfirmationContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  confirm: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: getCartProducts(state),
  }
}

export default connect(
  mapStateToProps,
  { confirm }
)(ConfirmationContainer)
