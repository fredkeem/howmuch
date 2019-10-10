// @flow
import {chain, isNil, isEmpty} from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

const SAVE_KEYS = ['accessToken'];

export default {
  launchTime: null,
  init: async () => {
    this.accessToken = await AsyncStorage.getItem('accessToken');
    this.checkList = {};

    for (const key of SAVE_KEYS) {
      this.checkList[key] = await AsyncStorage.getItem(key);
    }
  },
  setUser: async user => {
    try {
      this.user = user;
      console.log(this.user);
      this.accessToken = user.accessToken;
      await AsyncStorage.setItem('accessToken', user.accessToken);
    } catch (e) {
      // ERROR(e);
      console.log(e);
    }
  },
  getUser: () => this.user,
  // isUserOk: (): boolean =>
  //   this.accessToken && this.user && !isEmpty(this.user.services),
  isUserOk: (): boolean => this.accessToken,
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
