// @flow
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import users from './users.reducers';
import main from './main.reducer';
import routes from './routes.reducer';

export const reducers = combineReducers({
  users,
  main,
  routes,
});

const middleware = [thunk];

export default function configureStore(initialState: any) {
  return createStore(reducers, initialState, applyMiddleware(...middleware));
}
