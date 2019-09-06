// @flow
import {
  Alert,
  Platform,
  Dimensions,
  Linking,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import I18n from 'react-native-i18n';
// import {Sentry} from 'react-native-sentry';
import store from '../redux/store';
import CONST from '../config/const';

let {height, width} = Dimensions.get('window');
console.disableYellowBox = true;
console.log('VERSION ', Platform.Version);
popIng = false;

GLOBAL.DEV = __DEV__;
GLOBAL.PROD = !DEV;
GLOBAL.LOG = console.log;
GLOBAL.T = (key: string) => I18n.t(key);
GLOBAL.GO = (scene: string, info: any) => Actions[scene](info);
GLOBAL.GOF = (scene: string) => Actions[scene];
GLOBAL.POP = (scene: ?string, info: any) => {
  if (!popIng) {
    popIng = true;
    scene ? Actions.popTo(scene, info) : Actions.pop(info);
  }
  setTimeout(() => {
    popIng = false;
  }, 1000);
};
GLOBAL.POPF = () => Actions.pop;
GLOBAL.LINK = url => {
  Linking.openURL(url);
};
// GLOBAL.LOTTIE = animation => animation && animation.play();
GLOBAL.LOTTIE = animation => {
  LOG('LOTTIE RUN');
  animation && animation.play();
};
GLOBAL.ANIMATABLE = (animation, type: string, duration: number = 1000) => {
  if (animation) {
    return animation[type](duration);
  }
  return Promise.resolve();
};

GLOBAL.ALERT = (title, onPress: () => void) => {
  Alert.alert('HOW MUCH', JSON.stringify(title), [{text: T('ok'), onPress}]);
};

GLOBAL.ALERT2 = (title, onPress: () => void) => {
  Alert.alert('HOW MUCH', title, [
    {text: T('cancel'), onPress: null},
    {text: T('ok'), onPress},
  ]);
};

GLOBAL.IOS = Platform.OS === 'ios';
GLOBAL.ANDROID = !IOS;

GLOBAL.ERROR = (error: string | Error, tags: ?any, context: ?any) => {
  LOG(error);
  PROD && SENTRY(error, tags, context, 'error');
};

GLOBAL.DISPATCH = (promise: Promise) => store.dispatch(promise);
GLOBAL.width = width;
GLOBAL.height = height;
GLOBAL.WIDTH = width;
GLOBAL.HEIGHT = height;

export default () => {
  Text.defaultProps = Object.assign({}, Text.defaultProps || {}, {
    allowFontScaling: false,
  });

  if (DEV) {
    TouchableOpacity.defaultProps.style = {
      borderWidth: 1,
      borderColor: 'red',
    };
  }

  Dimensions.addEventListener('change', dims => {
    width = dims.window.width;
    height = dims.window.height;

    GLOBAL.width = width;
    GLOBAL.height = height;
  });

  LOG('CONST.TOP ', CONST.TOP);
};
