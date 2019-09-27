import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  AppState,
} from 'react-native';
// import {Actions} from 'react-native-router-flux';
// import AsyncStorage from '@react-native-community/async-storage';
// import Action from '../../redux/actions';
// import {connect} from 'react-redux';
import {Home, Game, User, ActivityType} from '../../config/type';
// import {object} from '../../api';
// import {removeUserToken} from '../../redux/users.actions';
// import user from '../../api/userInfo';
import Loader from '../../components/Loader';
import Base from '../Base';
import asset from '../../config/asset';
import styled from 'styled-components';
import SwiperComponent from '../../components/SwipeScreen';
import SwiperBanner from '../../components/SwiperBanner';
import TextTicker from '../../components/TextTicker';
import {BG_COLOR, POINT_COLOR} from '../../config/colors';
import GuideSection, {GuideSectionItems} from '../../components/GuideSection';
import {connect} from 'react-redux';
// const Container = styled.View`
//   padding-top: 40;
// `;
const Container = styled.View``;

const SectionTitle = styled.Text`
  font-size: 14px;
  font-family: 'SpoqaHanSans-Bold';
  letter-spacing: 1;
`;

type Props = {
  user: User,
};
type State = {};

@connect(state => ({
  routes: state.routes,
  user: state.users.user,
}))
export default class HomeScene extends Base {
  constructor(props) {
    super(props);

    this.state = {
      searchObject: null,
      // loading: true,
    };
  }

  props: Props;
  state: State;

  async componentDidMount() {
    console.log(this.state);
    console.log(this.props);
    console.log('---------------------------', this.props.user.name);
    const iPad = '아이패드';
    const iPhone = '아이폰XS';
    // try {
    //   const {
    //     data: {items: searchObject},
    //   } = await object.showSearch(iPhone);
    //   this.setState({
    //     searchObject,
    //     loading: false,
    //   });
    // } catch (e) {
    //   console.log(e);
    // } finally {
    //   this.setState({
    //     searchObject,
    //     loading: false,
    //   });
    // }

    this.setStatusWhite();
  }

  // async componentDidMount() {
  //   try {
  //     // this.startLoading();
  //     const r = await DISPATCH(getUserInfo(this.props.user.id));
  //   } catch (e) {
  //     ERROR(e);
  //   } finally {
  //     // this.startLoading(false);
  //   }
  // }

  render() {
    const {loading} = this.state;
    console.log(this.props);
    console.log(loading);
    return loading ? (
      <Loader />
    ) : (
      <ScrollView>
        <Container>
          <View>
            <SwiperComponent />
          </View>
        </Container>
        <TextTicker />
        <View style={{margin: 20, marginRight: 0}}>
          <SectionTitle>촬영 가이드</SectionTitle>
          <GuideSection />
        </View>
        <View style={{margin: 20, marginRight: 0}}>
          <SectionTitle>얼마야 혜택</SectionTitle>
          <SwiperBanner />
        </View>
        <View />
        {/* {this.state.searchObject && this.state.searchObject.length > 0 && (
              <View>
                {this.state.searchObject.map(item => (
                  <View>
                    <Text>
                      {item.lprice} / {item.hprice} / {item.productType}
                    </Text>
                  </View>
                ))}
              </View>
            )} */}
      </ScrollView>
    );
  }
}
