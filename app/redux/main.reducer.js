// @flow
import {isNil, isEmpty, startsWith} from 'lodash';
import initialState from './initialState';
import Action from '../redux/actions';
import type, {ActionType} from '../config/type';

export default (state: any = initialState.main, action: ActionType) => {
  const {type, error, errorCode, payload, key} = action;
  if (!isNil(error) && !isEmpty(error)) {
    return {
      ...state,
      type,
      errorCode,
      error,
    };
  }
  switch (type) {
    case Action.SPLASH:
      return {
        ...state,
        splash: payload,
      };
    case Action.LOADING:
      return {
        ...state,
        loading: payload,
      };

    default:
  }
  if (startsWith(action.type, 'MAIN_')) {
    return {
      ...state,
      [key]: payload,
      error: null,
      errorCode: null,
    };
  }
  return state;
};
