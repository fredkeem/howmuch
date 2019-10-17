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
    case Action.CATEGORY_SELECT:
      return {
        ...state,
        category_1: payload,
        // category_2: payload,
        // category_3: payload,
        // category_4: payload,
      };
    default:
      return state;
  }
};
