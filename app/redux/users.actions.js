// import axois from 'axios';
import api, {apiRequest} from '../api';
import Action from './actions';

const userRequest = (type: string, request: Promise) =>
  apiRequest(type, request, 'user');

export const loginUser = (email: string, password: string) => {
  const request = api.post('/api/balance/login', {email, password});

  return userRequest(Action.BALANCE_LOGIN_RESPONSE, request);
};
