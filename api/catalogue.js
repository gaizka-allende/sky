/**
 * Mocking client-server processing
 */

import _channels from './channels.json'

const TIMEOUT = 2000

function searchChannelsByLocation (locationId) {

  return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve (_channels)
        },
        TIMEOUT
      );
    }
  );
}

export default {
  getChannelsByLocation(locationId, successCb, failureCb, timeout) {
    searchChannelsByLocation(locationId)
      .then(channels => {
        successCb(channels);
      })
      .catch(customerId => {
        failureCb();
      });
  }
}
