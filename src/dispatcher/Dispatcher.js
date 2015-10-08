import assign from'object-assign';

const _callbacks = [];

const Dispatcher = function noop() {};
Dispatcher.prototype = assign({}, Dispatcher.prototype, {

  /**
   * Register a Store's callback so that it may be invoked by an action.
   * @param {function} callback The callback to be registered.
   * @return {number} The index of the callback within the _callbacks array.
   */
  register(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1; // index
  },

  /**
   * dispatch
   * @param  {object} payload The data from the action.
   */
  dispatch(payload) {
    // First create array of promises for callbacks to reference.
    const resolves = [];
    const rejects = [];
    _callbacks.map(function mapCallbacks(_p, index) {
      return new Promise(function registerPromise(resolve, reject) {
        resolves[index] = resolve;
        rejects[index] = reject;
      });
    });
    // Dispatch to callbacks and resolve/reject promises.
    _callbacks.forEach(function forEachCallback(callback, index) {
      // Callback can return an obj, to resolve, or a promise, to chain.
      // See waitFor() for why this might be useful.
      Promise.resolve(callback(payload)).then(function doneCallback() {
        resolves[index](payload);
      }, function errorCallback() {
        rejects[index](new Error('Dispatcher callback unsuccessful'));
      });
    });
  },
});

export default Dispatcher;
