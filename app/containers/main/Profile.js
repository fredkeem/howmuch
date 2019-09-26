import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Base from '../Base';
import {connect} from 'react-redux';
import type, {User, Config, Routes} from '../../config/type';

type Props = {
  user: User,
  configs: Config,
  routes: Routes,
};

@connect(state => ({
  user: state.users.user,
  configs: state.main.configs,
  routes: state.routes,
}))
export default class Profile extends Base {
  props: Props;
  state: State;

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  onPressLogOut() {
    ALERT2(T('로그아웃'), async () => {
      await DISPATCH({type: Action.BALANCE_LOGOUT, payload: null});
      POP('start');
    });
  }

  render() {
    return (
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
    );
  }
}
