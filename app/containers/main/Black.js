import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import Action from '../../redux/actions';
import {connect} from 'react-redux';
import {Home, Game, User, ActivityType} from '../../config/type';
// import {removeUserToken} from '../../redux/users.actions';

type Props = {
  user: User,
};

export default class Black extends Component {
  // static navigationOptions = {
  //   title: 'Welcome to the app!',
  // };

  remove() {
    AsyncStorage.removeItem('accessToken');
    Actions.popTo('start');
  }

  componentDidMount() {
    console.log(this.props);
  }

  onPressLogOut() {
    ALERT2(T('my_info.logout_confirm'), async () => {
      await DISPATCH({type: Action.BALANCE_LOGOUT, payload: null});
      POP('start');
    });
  }

  render() {
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
        <Text style={{color: 'white'}}>This is Black!</Text>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            borderRadius: 10,
          }}
          onPress={this.onPressLogOut}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
