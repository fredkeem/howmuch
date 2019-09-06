/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import global from './app/config/global';
import Router from './app/containers/Router';
import user from './app/api/userInfo';

type Props = {
  startTime: number,
  accessTokenRecovery: string,
};

export default class App extends Component {
  props: props;
  state = {
    isReady: false,
  };

  async componentWillMount() {
    await global();
    await user.init();

    this.setState({isReady: true});
  }
  render() {
    return (
      <Provider store={store}>
        {this.state.isReady ? <Router /> : <View />}
      </Provider>
    );
  }
}

// export default App;
