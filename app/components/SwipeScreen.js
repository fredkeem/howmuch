import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ViewPagerAndroid,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TINT_COLOR, BG_COLOR, POINT_COLOR} from '../config/colors';
import Swiper from 'react-native-swiper';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';
import styled from 'styled-components';
import layout from '../config/layout';
import Slider from './Slider';

import numeral from 'numeral';
import asset from '../config/asset';

const WhiteRegularText = styled.Text`
  color: ${TINT_COLOR};
  font-family: 'SpoqaHanSans-Regular';
  font-size: 18px;
  letter-spacing: 1;
`;

const WhiteBoldText = styled.Text`
  color: ${TINT_COLOR};
  font-family: 'SpoqaHanSans-Bold';
  font-size: 24px;
  letter-spacing: 1;
`;

const PointText = styled.Text`
  color: ${POINT_COLOR};
  font-family: 'SpoqaHanSans-Bold';
  letter-spacing: 2;
  font-size: 40px;
`;

const SwiperCardContainer = styled.View`
  padding: 20px;
  padding-top: 70px;
  background-color: ${BG_COLOR};
`;

const SWIPER_HEIGHT = layout.height / 3;
const sliderWidth = width;

export default class SwiperComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 180000000,
      swiperBanner: [
        {
          date: '2019. 09. 17',
          title: '오늘의 담보 대출 금액',
        },
      ],
      slider1ActiveSlide: 0,
    };
  }
  componentDidMount() {}

  get pagination() {
    const {swiperBanner, slider1ActiveSlide} = this.state;
    return (
      <Pagination
        containerStyle={{
          paddingVertical: 10,
        }}
        dotsLength={swiperBanner.length}
        activeDotIndex={slider1ActiveSlide}
        dotStyle={{
          width: 24,
          height: 4,
          borderRadius: 5,
          backgroundColor: '#DCDCDC',
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  _renderSwiperCardContainer = ({item, index}) => {
    const {slider1ActiveSlide, amount} = this.state;
    const leftAmount = numeral(amount).format('0,0');
    if (slider1ActiveSlide === 0) {
      return (
        <SwiperCardContainer>
          {/* <TouchableOpacity> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 30,
            }}>
            <TouchableOpacity>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                }}
                source={asset.home}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  marginLeft: 20,
                }}
                source={asset.home}
              />
            </TouchableOpacity>
          </View>
          <WhiteRegularText>{item.date}</WhiteRegularText>
          <WhiteBoldText>{item.title}</WhiteBoldText>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 30,
            }}>
            <View
              style={{
                width: 36,
                height: 36,
                borderRadius: 50,
                backgroundColor: `${POINT_COLOR}`,
              }}
            />
            <PointText>{leftAmount}</PointText>
          </View>
          <Slider />
          {/* </TouchableOpacity> */}
        </SwiperCardContainer>
      );
    } else {
      return (
        <View style={{width: width}}>
          <TouchableOpacity style={{marginHorizontal: 20, height: 206}}>
            <Image
              style={{width: '100%', height: 206}}
              source={asset.swipe_banner}
              resizeMode="contain"
            />
            <WhiteRegularText>{item.date}</WhiteRegularText>
            <WhiteBoldText>{item.title}</WhiteBoldText>
          </TouchableOpacity>
        </View>
      );
    }
  };

  render() {
    return (
      <View>
        <Carousel
          disabled
          autoplay={true}
          autoplayDelay={5000}
          loop={true}
          layout={'tinder'}
          data={this.state.swiperBanner}
          sliderWidth={sliderWidth}
          itemWidth={width}
          renderItem={this._renderSwiperCardContainer}
          hasParallaxImages={true}
          onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
        />
        {/* {this.pagination} */}
      </View>
    );
  }
}
