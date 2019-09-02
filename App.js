/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Router from './app/containers/Router'



export default class App extends Component { 
  props: Props

  state = {
    isReady: false
  }

  componentDidMount() {
    this.setState({ isReady: true })
  }

  render() {
    return (
      <View style={{backgroundColor: 'black', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Text style={{color: 'white'}}>얼마야</Text></View>
    ) 
  }
}


// export default App;
