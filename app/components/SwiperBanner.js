import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TINT_COLOR, BG_COLOR, POINT_COLOR} from '../config/colors';
import Swiper from 'react-native-swiper';
import styled from 'styled-components';
import layout from '../config/layout';

import numeral from 'numeral';
import asset from '../config/asset';

const BannerContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10;
  overflow: hidden
  background-color: #5352ed;
`;

const TitleText = styled.Text`
  color: ${TINT_COLOR};
  font-family: 'SpoqaHanSans-Bold';
  font-size: 22px;
`;

const SubTitleText = styled.Text`
  color: ${TINT_COLOR};
  font-family: 'SpoqaHanSans-Regular';
  font-size: 12px;
`;

const SWIPER_HEIGHT = layout.height / 10;

const BannerCard = ({resource}) => (
  <>
    <Image
      style={{
        width: 70,
        marginHorizontal: 20,
        tintColor: `${TINT_COLOR}`,
      }}
      resizeMode="contain"
      source={resource.image}
    />
    <View>
      <TitleText style={{}}>{resource.title}</TitleText>
      <SubTitleText style={{}}>{resource.subtitle}</SubTitleText>
    </View>
  </>
);

const RenderBanner = () => (
  <BannerContainer>
    <BannerCard
      resource={{
        title: `80,000,000원 대출`,
        subtitle: 'OO님께서 8천만원을 대출하셨습니다.',
        image: asset.my_page,
      }}
    />
  </BannerContainer>
);

export default class SwiperBanner extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    amount: 180000000,
  };

  render() {
    const amount = numeral(this.state.amount).format('0,0');
    console.log(amount);

    return (
      <Swiper
        style={{
          height: SWIPER_HEIGHT,
        }}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        paginationStyle={{display: 'none'}}
        dotColor={`${TINT_COLOR}`}
        activeDotColor={`${TINT_COLOR}`}
        // dot={}
      >
        <RenderBanner />
        {/* {this.renderBanner.map((item, index) => i)} */}
        {/* <View
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 10,
            overflow: 'hidden',
            backgroundColor: '#5352ed',
          }}>
          <Image
            style={{
              width: 70,
              marginHorizontal: 20,
              tintColor: `${TINT_COLOR}`,
            }}
            resizeMode="contain"
            source={asset.my_page}
          />
          <View>
            <TitleText style={{}}>{amount}원 대출</TitleText>
            <SubTitleText style={{}}>
              OO님께서 8천만원을 대출하셨습니다.
            </SubTitleText>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 10,
            overflow: 'hidden',
            backgroundColor: '#ff6b81',
          }}>
          <Image
            style={{
              width: 70,
              marginHorizontal: 20,
              tintColor: `${TINT_COLOR}`,
            }}
            resizeMode="contain"
            source={asset.my_page}
          />
          <View>
            <TitleText style={{}}>{amount}원 대출</TitleText>
            <SubTitleText style={{}}>
              OO님께서 8천만원을 대출하셨습니다.
            </SubTitleText>
          </View>
        </View> */}
      </Swiper>
    );
  }
}
