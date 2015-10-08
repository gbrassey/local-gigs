import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import UserConstants from '../constants/UserConstants';
import { SPOTIFY_USER_URL } from '../constants/SpotifyConstants';

const CHANGE_EVENT = 'change';

let user = {};

function destroy() {
  user = {};
}

function create(access, callback) {
  jQuery.ajax({
    url: SPOTIFY_USER_URL,
    headers: {
      'Authorization': access.tokenType + ' ' + access.accessToken,
    },
    success(data) {
      user = data;
      callback();
    },
  });
}

class UserStore extends EventEmitter {

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
    const access = action.access;
    if (access !== '') {
      create(access, userStore.emitChange.bind(userStore));
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
