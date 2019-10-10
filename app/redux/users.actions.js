// import axois from 'axios';
import api, {apiRequest} from '../api';
import Action from './actions';

const userRequest = (type: string, request: Promise) =>
  apiRequest(type, request, 'user');

export const loginUser = (email: string, password: string) => {
  const request = api.post('/api/balance/login', {email, password});

  return userRequest(Action.BALANCE_LOGIN_RESPONSE, request);
};

export const phoneNumber = (phoneNumber: string) => {
  const request = api.get(`/api/user/phoneNumberLogin/${phoneNumber}`);
  return userRequest(Action.HOWMUCH_PHONENUMBER_RESPONSE, request);
  // phoneNumber
};

export const phoneNumberLogin = (phoneNumber: string, code: string) => {
  const request = api.post('/api/user/phoneNumberLogin', {phoneNumber, code});
  return userRequest(Action.HOWMUCH_LOGIN_RESPONSE, request);
  // PhoneNumber / SMS Code
};
