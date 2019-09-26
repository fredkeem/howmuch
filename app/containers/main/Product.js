import React, {Component} from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CategoriesComponent from '../../components/Caterogies';
import Base from '../Base';

export default class ProductScene extends Base {
  constructor(props) {
    super(props);
  }
  props: Props;
  state: State;

  componentDidMount() {
    this.setStatusBlack();

    console.log(this.props);
  }

  render() {
    return (
      <View>
        <ScrollView
          contentContainerStyle={{
            // backgroundColor: 'red',
            height: height - 60,
            width: width,
            paddingVertical: 30,
          }}>
          <CategoriesComponent props={this.props} />
        </ScrollView>
      </View>
    );
  }
}
