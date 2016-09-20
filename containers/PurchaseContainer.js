import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getPurchaseId } from '../reducers'
import Purchase from '../components/Purchase'

/*
 * The purchase confirmation container
 */
class PurchaseContainer extends Component {
  render() {

    const { purchaseId } = this.props

    return (
      <Purchase
        purchaseId={purchaseId} />
    )
  }
}

PurchaseContainer.propTypes = {
  purchaseId: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    purchaseId: getPurchaseId(state)
  }
}

export default connect(
  mapStateToProps,
  { }
)(PurchaseContainer)
