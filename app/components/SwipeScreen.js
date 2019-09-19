import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {TINT_COLOR, BG_COLOR, POINT_COLOR} from '../config/colors';
import Swiper from 'react-native-swiper';
import styled from 'styled-components';
import layout from '../config/layout';

const WhiteText = styled.Text`
  color: ${TINT_COLOR};
`;

const PointText = styled.Text`
  color: ${POINT_COLOR};
`;

const SWIPER_HEIGHT = layout.height / 3;

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
        style={{height: SWIPER_HEIGHT}}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={3}
        dotColor={`${TINT_COLOR}`}
        activeDotColor={`${TINT_COLOR}`}
        activeDotStyle={{width: 30}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <WhiteText style={{fontSize: 16}}>2019. 09. 18</WhiteText>
          <WhiteText style={{fontSize: 16}}>대출 가능한 금액</WhiteText>
          <View style={{marginVertical: 20}}>
            <PointText style={{fontSize: 24, fontWeight: 'bold'}}>
              180,000,000
            </PointText>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <WhiteText style={{fontSize: 16}}>2019. 09. 18</WhiteText>
          <WhiteText style={{fontSize: 16}}>대출 가능한 금액</WhiteText>
          <View style={{marginVertical: 20}}>
            <PointText style={{fontSize: 24, fontWeight: 'bold'}}>
              180,000,000
            </PointText>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <WhiteText style={{fontSize: 16}}>2019. 09. 18</WhiteText>
          <WhiteText style={{fontSize: 16}}>대출 가능한 금액</WhiteText>
          <View style={{marginVertical: 20}}>
            <PointText style={{fontSize: 24, fontWeight: 'bold'}}>
              180,000,000
            </PointText>
          </View>
        </View>
      </Swiper>
    );
  }
}

// AppRegistry.registerComponent('myproject', () => SwiperComponent);
