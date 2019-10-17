// @flow
import {isNil, isEmpty, startsWith} from 'lodash';
import initialState from './initialState';
import Action from '../redux/actions';
import user from '../api/userInfo';
import type, {ActionType} from '../config/type';

export const saveUser = data => ({
  type: AUTH_RESPONSE,
  payload: data,
});
const saveUserInfo = userInfo => {
  console.log('--------------------------', userInfo);
  if (isNil(userInfo.accessToken)) {
    return;
  }
  user.setUser(userInfo);
};

const clearUserInfo = () => {
  user.clearStorage();
};

export default (state: any = initialState.users, action: ActionType) => {
  const {type, error, errorCode, payload} = action;
  if (!isNil(error) && !isEmpty(error)) {
    return {
      ...state,
      type,
      errorCode,
      error,
    };
  }
  if (!isNil(payload)) {
    saveUserInfo(payload);
  }
  if (action.type === Action.BALANCE_LOGOUT) {
    clearUserInfo();
  }
  if (startsWith(action.type, 'USER_')) {
    return {
      ...state,
      user: payload,
      error: null,
      errorCode: null,
    };
  }
  return state;
};
