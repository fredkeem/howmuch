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
    return loading ? (
      <Loader />
    ) : (
      <ScrollView>
        <Container>
          <View>
            <SwiperComponent />
          </View>
        </Container>
        {/* <TextTicker /> */}
        <View style={{margin: 20, marginRight: 0}}>
          <SectionTitle>공지사항</SectionTitle>
          <GuideSection />
        </View>
        <View style={{margin: 20, marginRight: 0}}>
          <SectionTitle>이벤트</SectionTitle>
          <SwiperBanner />
        </View>
        <View style={{margin: 20}}>
          <SectionTitle>나의 상품</SectionTitle>
          <InprocessContainer props={this.props} />
        </View>
        <View />
      </ScrollView>
    );
  }
}
