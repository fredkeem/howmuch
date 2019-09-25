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
// import NumberTicker from 'react-native-number-ticker';
import NumberTicker from '../components/CustomNumberTicker';
import moment from 'moment';
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

const TopIconContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const TopIcon = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 30px;
`;

const SWIPER_HEIGHT = layout.height / 3;
const sliderWidth = width;

export default class SwiperComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 182311412,
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

  _renderSwiperCardContainer = ({item, index}) => {
    const {slider1ActiveSlide, amount} = this.state;
    const leftAmount = numeral(amount).format('0,0');
    const now = new Date();
    const currentDate = moment(now).format('YYYY. MM. DD');
    if (slider1ActiveSlide === 0) {
      return (
        <SwiperCardContainer>
          <TopIconContainer>
            <TouchableOpacity>
              <TopIcon source={asset.notification} />
            </TouchableOpacity>
            <TouchableOpacity onPress={GOF('profile')}>
              <TopIcon
                style={{
                  marginLeft: 20,
                }}
                source={asset.info}
              />
            </TouchableOpacity>
          </TopIconContainer>
          <WhiteRegularText>{currentDate}</WhiteRegularText>
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
            <NumberTicker
              number={leftAmount}
              duration={3000}
              textStyle={{
                fontFamily: 'SpoqaHanSans-Bold',
                color: `${POINT_COLOR}`,
                letterSpacing: 2,
                lineHeight: 53,
              }}
            />
          </View>
          <Slider />
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
      </View>
    );
  }
}
