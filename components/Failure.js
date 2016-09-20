import React, { Component, PropTypes } from 'react'

export default class Failure extends Component {
  render() {

    const { purchaseId } = this.props

    return (
      <section id="failure-container">
        <h3>Failure in the purchase</h3>
        <div>Purchase id: {purchaseId}</div>
      </section>
    )
  }
}

Failure.propTypes = {
  purchaseId: PropTypes.string
}
