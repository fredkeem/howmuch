import {Platform, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

let TOP = Platform.OS === 'ios' ? 30 : 35;
if (Platform.OS === 'ios' && width === 375 && height === 812) {
  TOP = 38;
}

export default {
  // HOST: 'https://challenge.zikto.com',
  HOST: 'http://dev.zikto.com:3001', // 얼마야 Dev
  // HOST: 'http://dev.zikto.com:3000', // 챌린지 Dev
  WIDTH: width, // 전체 뷰에 width
  HEIGHT: height, // 전체 뷰에 height
  TOP, // 상태바 고려해서 뷰 그리기 시작하는 위치
  NAVIGATION_HEIGHT: TOP + 40, // 네비게이션바 높이, 상태바에 따라 높이가 다르다
  TAB_BAR_HEIGHT: 60, // 메인 탭바 높이
};
