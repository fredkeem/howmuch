// @flow
import {chain, isNil, isEmpty} from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

const SAVE_KEYS = ['accessToken', 'userData'];

export default {
  launchTime: null,
  init: async () => {
    this.accessToken = await AsyncStorage.getItem('accessToken');
    this.user = await AsyncStorage.getItem('userData');

    this.checkList = {};

    for (const key of SAVE_KEYS) {
      this.checkList[key] = await AsyncStorage.getItem(key);
    }
  },
  setUser: async user => {
    try {
      this.user = user;
      this.accessToken = user.accessToken;
      await AsyncStorage.setItem('accessToken', user.accessToken);
      await AsyncStorage.setItem('userData', JSON.stringify(user));
    } catch (e) {
      // ERROR(e);
      console.log(e);
    }
  },
  getUser: () => this.user,
  isUserOk: (): boolean => this.accessToken && this.user,
  getAccessToken: () => this.accessToken,
  isChecked: (key: string): boolean => this.checkList[key] === 'true',
  check: async (key: string) => {
    try {
      return await AsyncStorage.setItem(key, 'true');
    } catch (e) {
      // ERROR(e);
      console.log(e);
    }
  },
  clearStorage: async () => {
    this.accessToken = null;
    SAVE_KEYS.forEach(async key => {
      await AsyncStorage.removeItem(key);
      this.checkList[key] = null;
    });
  },
};
