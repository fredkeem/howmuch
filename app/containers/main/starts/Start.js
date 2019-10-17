import React, {Component} from 'react';
import {TouchableOpacity, Text, View, AppState} from 'react-native';
import {Actions} from 'react-native-router-flux';
import SelectOptionButton from '../../../components/button/SelectOptionButton';
import userInfo from '../../../api/userInfo';
import Base from '../../../components/BaseHeader';
import {authUser} from '../../../redux/users.actions';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Action from '../../../redux/actions';
import {saveUserInfo} from '../../../redux/users.reducers';
// import {connect} from 'react-redux';
import _ from 'lodash';
type Props = {
  paused: boolean,
};

type State = {
  appState: string,
};
@connect(state => ({
  routes: state.routes,
  user: state.users.user,
}))
export default class Start extends Base {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.setStatusHidden();
  }

  async componentWillMount() {
    try {
      let user = await AsyncStorage.getItem('userData');
      let data = JSON.parse(user);
      await DISPATCH({type: Action.AUTH_RESPONSE, payload: data});
    } catch (e) {
      console.log(e);
    } finally {
      if (_.isEmpty(accessToken)) {
        return GO('phoneLogin');
      } else if (userInfo.isUserOk()) {
        GO('home');
      } else {
        alert(1);
      }
    }
  }
  // challenge

  //   try {
  //     const accessToken = userInfo.getAccessToken();
  //     console.log(accessToken);
  //     if (_.isEmpty(accessToken)) {
  //       // 처음으로 들어온거라면 시작화면에서 진행
  //       alert(1);
  //       // return SplashScreen && SplashScreen.hide();
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     // if (userInfo.isUserOk()) {
  //     GO('home');
  //     // } else {
  //     //   alert(2);
  //     // this.startLoading(false);
  //     // }
  //   }
  // }

  // componentDidMount() {
  //   try {
  //     const accessToken = userInfo.getAccessToken();
  //     console.log(accessToken);
  //     if (_.isEmpty(accessToken)) {
  //       return GO('phoneLogin');
  //     }
  //     // if (user) userInfo.setUser(user);
  //   } catch (e) {
  //     LOG(e);
  //   } finally {
  //     if (userInfo.isUserOk()) {
  //       GO('home');
  //     }
  //   }
  // }

  render() {
    const loginButtonColorOption = {
      darkerGoldColor: '#B49A43',
      darkBlueColor: '#418DD9',
      blueColor: '#51AAE7',
      goldColor: '#d1bf83',
    };

    const registerButtonColorOption = {
      whiteColor: '#ffffff',
      blueColor: '#418DD9',
      goldColor: '#d1bf83',
    };
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <Text style={{color: 'white'}}>안녕하세요. 얼마야입니다.</Text>
        <SelectOptionButton
          selectTextColor={loginButtonColorOption.darkBlueColor}
          defaultTextColor={loginButtonColorOption.blueColor}
          text="간편 휴대폰 로그인"
          onPressOutButton={() => Actions.phoneLogin()}
        />
        <SelectOptionButton
          selectTextColor={loginButtonColorOption.darkBlueColor}
          defaultTextColor={loginButtonColorOption.blueColor}
          text="이메일 로그인"
          onPressOutButton={() => Actions.emailLogin()}
        />
        <SelectOptionButton
          selectTextColor={loginButtonColorOption.darkBlueColor}
          defaultTextColor={loginButtonColorOption.blueColor}
          text="회원가입"
          onPressOutButton={() => Actions.register()}
        />
      </View>
    );
  }
}
