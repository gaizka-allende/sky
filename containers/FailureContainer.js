import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getPurchaseId } from '../reducers'
import Failure from '../components/Failure'

/*
 * The purchase failure container
 */
class FailureContainer extends Component {
  render() {

    return (
      <Failure
        purchaseId={purchaseId} />
    )
  }
}

FailureContainer.propTypes = {
  purchaseId: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    purchaseId: getPurchaseId(state)
  }
}

export default connect(
  mapStateToProps,
  {  }
)(FailureContainer)
