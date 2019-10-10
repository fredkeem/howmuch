import Action from '../redux/actions';
import initialState from './initialState';
import type, {Product} from '../config/type';
import _ from 'lodash';

export default (
  state: any = initialState.product,
  // key: String,
  action: Product,
) => {
  const {payload} = action;
  switch (action.type) {
    case Action.SAVE_PHOTO:
      return {
        ...state,
        // [key]: payload,
        path: payload,
      };
    default:
      return state;
  }
};
