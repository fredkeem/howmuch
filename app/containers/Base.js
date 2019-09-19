// @flow
import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import Action from '../redux/actions';
import type, {Routes} from '../config/type';

export default class Base extends Component {
  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {}

  async componentWillReceiveProps(nextProps: Props) {}

  onPressBack() {
    POP();
  }

  isOnEnter(nextProps) {
    const {routeName: currentRoute}: Routes = this.props.routes;
    const {routeName: nextRoute}: Routes = nextProps.routes;
    return nextRoute === this.props.name && currentRoute !== nextRoute;
  }

  startLoading(start = true) {
    DISPATCH({type: Action.LOADING, payload: start});
  }

  startPayLoading(start = true) {
    DISPATCH({type: Action.PAY_LOADING, payload: start});
  }

  splashShow(start = true) {
    DISPATCH({type: Action.SPLASH, payload: start});
  }

  setStatusHidden(hidden = true) {
    StatusBar.setHidden(hidden);
  }

  setStatusBlack() {
    StatusBar.setHidden(false);
    StatusBar.setBarStyle('dark-content', false);
  }

  setStatusWhite() {
    StatusBar.setHidden(false);
    StatusBar.setBarStyle('light-content', false);
    ANDROID && StatusBar.setBackgroundColor('#000000', false);
  }

  render() {
    return <View />;
  }
}
