import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  BackHandler,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CategoriesComponent from '../../components/Caterogies';
import Base from '../Base';
import BaseHeader from '../../components/BaseHeader';

export default class ProductRegistration extends Base {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }
  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  render() {
    return (
      <View>
        <BaseHeader
          title={'얼마야'}
          RightComponent={<Text>asd</Text>}
          onPressRight={GOF('tutorial', {tutorialType: 'new'})}
        />
        <Text>asd</Text>
      </View>
    );
  }
}
