import AppDispatcher from '../dispatcher/AppDispatcher';
import UserConstants from '../constants/UserConstants';

const UserActions = {

  /**
   * @param  {string} text
   */
  create(access) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_CREATE,
      access: access,
    });
  },

  /**
   * @param  {string} id
   */
  destroy() {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_DESTROY,
    });
  },

  /**
   * Delete all the completed ToDos
   */
  destroyCompleted() {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_DESTROY_COMPLETED,
    });
  },

};

export default UserActions;
