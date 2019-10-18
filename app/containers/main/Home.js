import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  AppState,
} from 'react-native';
import {Home, Game, User, ActivityType} from '../../config/type';
import Loader from '../../components/Loader';
import Base from '../Base';
import asset from '../../config/asset';
import styled from 'styled-components';
import SwiperComponent from '../../components/SwipeScreen';
import SwiperBanner from '../../components/SwiperBanner';
import TextTicker from '../../components/TextTicker';
import {BG_COLOR, POINT_COLOR} from '../../config/colors';
import GuideSection, {GuideSectionItems} from '../../components/GuideSection';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import InprocessContainer from '../../components/MyList';
import {productList} from '../../redux/main.action';
const Container = styled.View``;

const SectionTitle = styled.Text`
  font-size: 14px;
  font-family: 'SpoqaHanSans-Bold';
  letter-spacing: 1;
`;

const EmptyImageContainer = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const EmptyImageItem = styled.Image`
  margin-vertical: 30px;
  width: 70%;
`;

const EmptyImageText = styled.Text`
  font-family: 'SpoqaHanSans-regular'
  text-align: center;
  font-size: 18px;
`;

@connect(state => ({
  routes: state.routes,
  user: state.users.user,
  productList: state.main.productList,
}))
export default class HomeScene extends Base {
  constructor(props) {
    super(props);

    this.state = {};
  }

  props: Props;
  state: State;

  async componentDidMount() {
    const r = await AsyncStorage.getAllKeys();
    await DISPATCH(productList());
    console.log(r);
    console.log(this.props);

    this.setStatusBlack();
  }

  render() {
    const {loading} = this.state;
    const productList = this.props.productList && this.props.productList.data;
    // console.log(productList.length);
    return loading ? (
      <Loader />
    ) : (
      <ScrollView contentContainerStyle={{paddingVertical: 20}}>
        <Container>
          <View>
            <SwiperComponent />
          </View>
        </Container>
        {/* <TextTicker /> */}
        <View style={{marginHorizontal: 20}}>
          <SectionTitle>대출 정보</SectionTitle>
          <GuideSection />
        </View>
        <View style={{marginVertical: 20}}>
          <SectionTitle style={{marginHorizontal: 20}}>공지 사항</SectionTitle>
          <SwiperBanner />
        </View>
        <View style={{marginHorizontal: 20}}>
          <SectionTitle>나의 상품</SectionTitle>
          {productList.length === 0 ? (
            <EmptyImageContainer onPress={() => GO('product')}>
              <EmptyImageItem
                resizeMode="contain"
                source={asset.empty_product}
              />
              <EmptyImageText>
                빠르고 쉬운 '얼마야'를 통해 {'\n'} 대출을 받아보세요.
              </EmptyImageText>
            </EmptyImageContainer>
          ) : (
            <InprocessContainer props={this.props} />
          )}
        </View>
        <View />
      </ScrollView>
    );
  }
}
