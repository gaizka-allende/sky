/**
 * Mocking client-server processing
 */

const TIMEOUT = 500;
const DB_TIMEOUT = 5000;

function saveTransaction (channelsFromBasket) {
  return new Promise((resolve, reject) => {
      setTimeout(() => { resolve ('b7ec0353-2231-4fe3-8512-662416d55c0b') }, DB_TIMEOUT)
    }
  );
}

export default {


  purchaseChannels(channelsInBasket, successCb, failureCb, timeout) {
    saveTransaction(channelsInBasket)
      .then(transactionId => {
        console.log(`transaction ${transactionId} channels saved in DB`);
        successCb(transactionId);
      })
      .catch(transactionId => {
        console.log(`transaction ${transactionId} channels not saved in DB`);
        failureCb(transactionId);
      });
  }

}
