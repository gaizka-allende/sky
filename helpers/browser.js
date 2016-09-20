const TIMEOUT = 3000

export default {
   getCustomerId(cb, timeout) {

    let customerId = localStorage.getItem('customerId')
    setTimeout(() => cb(customerId), timeout || TIMEOUT);

  }
}
