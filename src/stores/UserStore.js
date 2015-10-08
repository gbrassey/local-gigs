import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import UserConstants from '../constants/UserConstants';

const CHANGE_EVENT = 'change';

let user = {};

function create(name) {
  user = {
    name: name,
    complete: false,
  };
}

function destroy() {
  user = {};
}

class UserStore extends EventEmitter {
  constructor() {
    super();
  }

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getUser() {
    return user;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const userStore = new UserStore();

userStore.dispatcherIndex = AppDispatcher.register((action) => {
  switch (action.actionType) {
  case UserConstants.USER_CREATE:
    const userName = action.userName.trim();
    if (userName !== '') {
      create(userName);
      userStore.emitChange();
    }
    break;

  case UserConstants.USER_DESTROY:
    destroy();
    userStore.emitChange();
    break;

  default:
    break;

  }

  return true; // No errors. Needed by promise in Dispatcher.
});

export default userStore;
