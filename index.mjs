/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
let promise

const qm = typeof queueMicrotask == 'function'
  ? queueMicrotask
  : function queueMicrotask(cb) {
      if (!promise) promise = Promise.resolve()
      promise.then(cb).catch(e => setTimeout(() => { throw e }, 0))
    }

export default cb => qm(cb)