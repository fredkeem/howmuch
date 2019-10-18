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
import {
  TINT_COLOR,
  BG_COLOR,
  POINT_COLOR,
  GREY_COLOR,
  HOME_GREY_COLOR,
} from '../config/colors';
import Swiper from 'react-native-swiper';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';
import styled from 'styled-components';
import layout from '../config/layout';
import Slider from './Slider';
// import {TintButton} from '../components/button/TintButton';
import numeral from 'numeral';
import asset from '../config/asset';
import {connect} from 'react-redux';
import SelectOptionButton from './button/SelectOptionButton';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const BoldText = styled.Text`
  font-family: 'SpoqaHanSans-bold';
  font-size: 14px;
  letter-spacing: 1;
`;
const RegularText = styled.Text`
  font-family: 'SpoqaHanSans-regular';
  font-size: 14px;
  letter-spacing: 1;
`;

const WhiteBoldText = styled.Text`
  font-family: 'SpoqaHanSans-Bold';
  font-size: 14px;
  letter-spacing: 1;
`;

const PointBoldText = styled.Text`
  color: ${HOME_GREY_COLOR};
  font-family: 'SpoqaHanSans-Bold';
  font-size: 18px;
  letter-spacing: 1;
  margin-bottom: 13px;
`;

const PointText = styled.Text`
  color: ${POINT_COLOR};
  font-family: 'SpoqaHanSans-Bold';
  letter-spacing: 2;
  font-size: 40px;
`;

const SwiperCardContainer = styled.View``;

const TopIcon = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 30px;
`;

const loanButtonColorOption = {
  defaultBackgroundColor: '#DCFFF7',
  defaultTextColor: '#00EEB6',
  loanButtonStyle: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  loanButtonTextStyle: {
    fontSize: 14,
    fontFamily: 'SpoqaHanSans-bold',
  },
};

const SWIPER_HEIGHT = layout.height / 3;
const sliderWidth = width;

@connect(state => ({
  routes: state.routes,
  user: state.users.user,
}))
export default class SwiperComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 182311412,
      swiperBanner: [
        {
          date: '2019. 09. 17',
          title: '담보 대출 금액',
          total: 300000000,
        },
      ],
      slider1ActiveSlide: 0,
    };
  }
  componentDidMount() {
    // console.log(this.props);
  }

  requestLoan() {
    alert(1);
  }

  _renderSwiperCardContainer = ({item, index}) => {
    const {slider1ActiveSlide, amount} = this.state;
    const leftAmount = numeral(amount).format('0,0');
    const now = new Date();
    const currentDate = moment(now).format('MM. DD');
    console.log(this.props);
    if (slider1ActiveSlide === 0) {
      return (
        <SwiperCardContainer>
          <Animatable.View
            animation="bounceInDown"
            style={{padding: 20, backgroundColor: 'white'}}>
            <View style={{paddingVertical: 15}}>
              <BoldText>
                {item.title}&nbsp;&nbsp;|&nbsp;&nbsp;
                {numeral(item.total).format('0,0')} 원
              </BoldText>
            </View>
            <View
              // colors={['#4c669f', '#3b5998', '#192f6a']}
              style={{
                // backgroundColor: '#16E9B4',
                padding: 20,
                borderRadius: 20,
                shadowRadius: 2,
                ...Platform.select({
                  ios: {
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 2,
                      height: 6,
                    },
                    shadowOpacity: 0.1,
                  },
                  android: {
                    elevation: 3,
                  },
                }),
              }}>
              <View style={{marginBottom: 20}}>
                <RegularText>현재 대출 가능액</RegularText>
              </View>
              <View
                style={{
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 36,
                    height: 36,
                    marginRight: 16,
                    borderRadius: 50,
                    // backgroundColor: `${POINT_COLOR}`,
                    // background: 'linear-gradient(#e66465, #9198e5)',
                  }}
                />
                <NumberTicker
                  number={leftAmount}
                  duration={3000}
                  textStyle={{
                    fontFamily: 'SpoqaHanSans-Bold',
                    color: `${TINT_COLOR}`,
                    letterSpacing: 2,
                    lineHeight: 53,
                  }}
                />
              </View>
              <Slider />
              <SelectOptionButton
                defaultTextColor={loanButtonColorOption.defaultTextColor}
                defaultBackgroundColor={
                  loanButtonColorOption.defaultBackgroundColor
                }
                selectTextColor={loanButtonColorOption.defaultTextColor}
                buttonStyle={loanButtonColorOption.loanButtonStyle}
                textStyle={loanButtonColorOption.loanButtonTextStyle}
                text="대출금 신청하기"
                onPressOutButton={() => GO('product')}
              />
            </View>
          </Animatable.View>
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
            <Text>{item.date}</Text>
            <Text>{item.title}</Text>
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
