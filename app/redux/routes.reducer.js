// @flow
import {Actions, Reducer, ActionConst} from 'react-native-router-flux';

import initialState from './initialState';
import type, {Routes} from '../config/type';

export default (state = initialState.routes, action: Routes = {}) => {
  if (action.type === ActionConst.FOCUS) {
    return {...action};
  }
  return state;
};
