/**
 * Mocking client-server processing
 */
import _locations from './locations.json'

const TIMEOUT = 2000

function searchLocation(customerId) {
  return new Promise((resolve, reject) => {
      setTimeout(() => { resolve ('LONDON') }, TIMEOUT)
    }
  );
}

export default {
  getCustomerLocation(customerId, successCb, failureCb, timeout) {

    searchLocation(customerId)
      .then(locationId => {
        successCb(locationId);
      })
      .catch(customerId => {
        failureCb();
      });

  }
}
