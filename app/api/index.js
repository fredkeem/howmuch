// @flow
import {StatusBar} from 'react-native';
import axios from 'react-native-axios';
import {isNil} from 'lodash';
import CONST from '../config/const';
import user from './userInfo';
import type, {ErrorType} from '../config/type';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000;
axios.defaults.baseURL = CONST.HOST;

axios.interceptors.request.use(
  config => {
    const token = user.getAccessToken();
    // 인증 헤더 설정을 해준다.
    config.headers.common.Authorization = `Bearer ${token}`;
    // config.headers.common.DeviceInfo = JSON.stringify(user.getUserDeviceInfo());
    // config.headers.common.UserAgent = user.getUserAgent();
    // console.log("axios config : " + JSON.stringify(config));
    // console.log(`API request ${JSON.stringify(config)}`);
    if (!isNil(config.data)) {
      console.log('API request ', config.url, config.data);
    } else if (!isNil(config.params)) {
      console.log('API request ', config.url, config.params);
    } else {
      LOG('API request ', config.url);
    }
    IOS && StatusBar.setNetworkActivityIndicatorVisible(true);
    return config;
  },
  e => {
    IOS && StatusBar.setNetworkActivityIndicatorVisible(false);
    error(e);
    return Promise.reject(e);
  },
);

axios.interceptors.response.use(
  response => {
    // LOG("API response ", response.data);
    IOS && StatusBar.setNetworkActivityIndicatorVisible(false);
    return response;
  },
  e => {
    IOS && StatusBar.setNetworkActivityIndicatorVisible(false);
    return Promise.reject(e);
  },
);

const withTimeoutNetwork = promise => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = new Error();
      error.response = {data: {}};
      error.response.data.message = '네트워크를 확인해주세요';
      error.response.data.code = 10000;
      reject(error);
    }, axios.defaults.timeout);
  });
  return Promise.race([timeout, promise]);
};

const isUnDefinedError = (error: ErrorType) =>
  isNil(error.response) ||
  isNil(error.response.data) ||
  isNil(error.response.data.code);

const getError = (error, type) => {
  if (isUnDefinedError(error)) {
    LOG('UNDEFINED ERROR ', error);
    ERROR(error);
    return {type, error: T('network_error')};
  } else {
    LOG(
      'DEFINED ERROR ',
      error.response.data.message,
      error.response.data.code,
    );
    return {
      type,
      errorCode: error.response.data.code,
      error: `${error.response.data.message}\n${error.response.data.code}`,
    };
  }
};

export const withTimeout = (promise, msg, timeoutSec) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = new Error(msg);
      reject(error);
    }, timeoutSec);
  });
  return Promise.race([timeout, promise]);
};

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

export const getLottie = (url: string) => {
  if (isNil(url)) {
    return null;
  }
  return withTimeoutNetwork(fetch(url))
    .then(res => {
      try {
        return JSON.parse(res._bodyText);
      } catch (e) {
        return null;
      }
    })
    .catch(error => null);
};

export default axios;
