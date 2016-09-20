import React, { Component, PropTypes } from 'react'

export default class Purchase extends Component {
  render() {

    const { purchaseId } = this.props

    return (
      <section id="purchase-container">
        <h3>Purchase confirmation</h3>
        <div>Purchase id: {purchaseId}</div>
      </section>
    )
  }
}

Purchase.propTypes = {
  purchaseId: PropTypes.string
}
