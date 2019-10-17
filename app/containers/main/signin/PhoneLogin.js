import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';
import userInfo from '../../../api/userInfo';
import Base from '../../Base';
import {BG_COLOR, TINT_COLOR, POINT_COLOR} from '../../../config/colors';
import {phoneNumber, phoneNumberLogin} from '../../../redux/users.actions';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

import styled from 'styled-components';

const Label = styled.Text`
  color: ${TINT_COLOR};
  font-family: 'SpoqaHanSans-regular;
  font-size: 12px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #fff;
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${POINT_COLOR}
  border-radius: 10px;
`;

const TextInputStyle = styled.TextInput`
  color: ${POINT_COLOR};
  width: 100%;
  border-bottom-color: #fff;
  border-bottom-width: 1px;
  padding-vertical: 10px;
  font-family: 'SpoqaHanSans-bold';
`;

type Props = {};

type State = {};
type Inputs = {
  phoneNumber: string,
  code: string,
};

@connect(state => ({
  routes: state.routes,
  user: state.users.user,
}))
export default class PhoneLogin extends Base {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      code: '',
      errorMessage: '',
    };
  }

  componentDidMount() {
    // try {
    //   const accessToken = userInfo.getAccessToken();
    //   // console.log(accessToken);
    //   // if (_.isEmpty(accessToken)) {
    //   //   return GO('phoneLogin');
    //   // }
    // } catch (e) {
    //   console.log(e);
    // } finally {
    //   if (userInfo.isUserOk()) {
    //     GO('home');
    //   }
    // }
  }

  phoneNumberRequest = async () => {
    try {
      await DISPATCH(phoneNumber(this.state.phoneNumber));
      console.log(this.state.phoneNumber);
      // console.log('user: ', user);
    } catch (e) {
      console.log(e);
    } finally {
      alert(1);
    }
  };

  phoneNumberLogin = async () => {
    const {phoneNumber, code} = this.state;
    try {
      const r = await DISPATCH(phoneNumberLogin(phoneNumber, code));
      console.log('userLogin:', r.user.data);
      const user = r.user.data;
      // await AsyncStorage.setItem('userData', JSON.stringify(user));
      // console.log(JSON(user), '-------------------------------');
      // console.log('user', user);
      userInfo.setUser(user);
      // console.log('data', data);
      if (!_.isEmpty(error)) {
        return alert(error);
      }
    } catch (e) {
      console.log(e);
    } finally {
      GO('home');
      // alert(1);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          keyboardShouldPersistTaps="never"
          scrollEnabled={false}
          contentContainerStyle={{
            backgroundColor: `${BG_COLOR}`,
            height: height,
            padding: 20,
          }}>
          <Animatable.View
            animation="fadeInUp"
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text>{this.state.errorMessage}</Text>
            <Label>핸드폰 번호 입력</Label>
            <TextInputStyle
              onChangeText={phoneNumber => this.setState({phoneNumber})}
              value={this.state.phoneNumber}
              placeholder="- 없이 번호만 입력해주세요."
              autoCapitalize="none"
              onFocus={() => this.setState({phoneNumber: ''})}
              underlineColorAndroid="#fff"
              placeholderTextColor={`${POINT_COLOR}`}
              style={{marginBottom: 40}}
            />
            <TouchableOpacity
              onPress={this.phoneNumberRequest}
              style={{position: 'absolute', right: 0, top: 323}}>
              <Text style={{color: `${TINT_COLOR}`}}>인증번호</Text>
            </TouchableOpacity>
            <Label>인증번호 입력</Label>
            <TextInputStyle
              onChangeText={code => this.setState({code})}
              value={this.state.code}
              placeholder="인증번호를 입력해주세요."
              autoCapitalize="none"
              onFocus={() => this.setState({code: ''})}
              underlineColorAndroid="#fff"
              placeholderTextColor={`${POINT_COLOR}`}
            />
          </Animatable.View>
          <LoginButton onPress={this.phoneNumberLogin}>
            <Text style={{color: `${POINT_COLOR}`}}>로그인 하기</Text>
          </LoginButton>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
