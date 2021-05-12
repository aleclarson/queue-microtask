/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var promise

var qm = typeof queueMicrotask == 'function'
  ? queueMicrotask
  : function queueMicrotask(cb) {
      if (!promise) promise = Promise.resolve()
      promise.then(cb).catch(e => setTimeout(() => { throw e }, 0))
    }

module.exports = cb => qm(cb)