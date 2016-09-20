import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import ConfirmationContainer from './ConfirmationContainer'
import PurchaseContainer from './PurchaseContainer'
import FailureContainer from './FailureContainer'
import { getStatus } from '../reducers'
import { CHANNELS_SUCCESS, CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAILURE } from '../constants/ActionTypes'

/*
 * Main App container
 * The header and footer always remain the same
 * The body depends on the status property of the state, possible statuses are:
 * CHECKOUT_REQUEST: View that asks the customer to confirm the purchase
 * CHECKOUT_SUCCESS: View that shows the purchase confirmation
 * CHECKOUT_FAILURE: View that shows error when purchasing the channels
 * default: inital view of products and baskets
 */
export default class AppContainer extends Component {
  render() {
    const { status } = this.props;

    let appContainers;

    switch(status) {
      case CHECKOUT_REQUEST:
        appContainers = (<main id="app-main"><ConfirmationContainer /></main>);
        break;

      case CHECKOUT_SUCCESS:
        appContainers = (<main id="app-main"><PurchaseContainer /></main>);
        break;

      case CHECKOUT_FAILURE:
        appContainers = (<main id="app-main"><FailureContainer /></main>);
        break;

      default:
        appContainers = (<main id="app-main"><ProductsContainer /><CartContainer /></main>);


    }

    return (
      <div id="app">
        <header id="app-header">
          <h2>Sky product selection</h2>
        </header>

          {appContainers}

        <footer id="app-footer">
          <ul>
            <li>Contact us</li>
            <li>About us</li>
          </ul>
        </footer>
      </div>
    )
  }
}

 AppContainer.propTypes = {
   status: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    status: getStatus(state)
  }
}


export default connect(
  mapStateToProps
)(AppContainer)
