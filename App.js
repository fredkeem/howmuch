/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import global from './app/config/global';
import Router from './app/containers/Router';
import user from './app/api/userInfo';
import Loader from './app/components/Loader';

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

    console.log(user);
    console.log(user.accessToken);

    this.setState({isReady: true});
  }

  render() {
    // const {isReady} = this.state;
    return (
      <Provider store={store}>
        {this.state.isReady ? <Router /> : <View />}
      </Provider>
    );
    // if (isReady) {
    //   return (
    //     <Provider store={store}>{isReady ? <Router /> : <View />}</Provider>
    //   );
    // } else {
    //   return <ActivityIndicator size="large" color="#0000ff" />;
    // }
  }
}

// export default App;
