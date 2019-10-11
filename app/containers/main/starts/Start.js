import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import SelectOptionButton from '../../../components/button/SelectOptionButton';
import userInfo from '../../../api/userInfo';
import Base from '../../../components/BaseHeader';
import {authUser} from '../../../redux/users.actions';
import AsyncStorage from '@react-native-community/async-storage';
// import {connect} from 'react-redux';
import _ from 'lodash';

export default class Start extends Component {
  async componentDidMount() {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      // const accessToken = userInfo.getAccessToken();
      console.log(accessToken);
      if (!_.isEmpty(accessToken)) {
        return GO('phoneLogin');
      }
    } catch (e) {
      console.log(e);
    } finally {
      if (userInfo.isUserOk()) {
        GO('home');
      }
    }
  }

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
