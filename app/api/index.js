import axios from 'react-native-axios';
import Action from '../redux/actions';
const api = axios.create({
  baseURL: 'https://challenge.zikto.com',
});

export const apiRequest = (type: string, request: Promise, key: string) => (
  dispatch: any,
) =>
  withTimeoutNetwork(request)
    .then(res => {
      dispatch({type, payload: res.data, key});
      const data = res.data;
      return {[key]: data};
    })
    .catch(error => {
      const errorInfo = getError(error, type);
      dispatch(errorInfo);
      return {...errorInfo};
    });

const userRequest = (type: string, request: Promise) =>
  apiRequest(type, request, 'user');

export const loginUser = (email: string, password: string) => {
  const request = api.post('/api/balance/login', {email, password});
  console.log(request);
  return userRequest(Action.BALANCE_LOGIN_RESPONSE, request);
};

// export const getPrices = () => api.get('/tickers');
// export const getExchanges = () => api.get('/exchanges');
// export const getCoins = () => api.get('/coins');
