import React, {Component} from 'react';
import {TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import Action from '../../redux/actions';
import {connect} from 'react-redux';
import {Home, Game, User, ActivityType} from '../../config/type';
import {object} from '../../api';
// import {removeUserToken} from '../../redux/users.actions';
import user from '../../api/userInfo';
import Loader from '../../components/Loader';
import Base from '../Base';
import asset from '../../config/asset';
import styled from 'styled-components';
import SwiperComponent from '../../components/SwipeScreen';
import SwiperBanner from '../../components/SwiperBanner';
import TextTicker from '../../components/TextTicker';
import {BG_COLOR} from '../../config/colors';

const Container = styled.View`
  background-color: ${BG_COLOR};
  padding-top: 40;
  padding-horizontal: 5;
`;

type Props = {
  user: User,
  challengeUser: User,
};
type State = {};

export default class HomeScene extends Base {
  // constructor(props) {
  //   super(props);
  // }

  props: Props;
  state: State;

  state = {
    searchObject: null,
    // loading: true,
  };

  async componentDidMount() {
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
    const {searchObject, loading} = this.state;
    console.log(this.props);
    console.log(loading);
    return loading ? (
      <Loader />
    ) : (
      <ScrollView>
        <Container>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              marginVertical: 30,
            }}>
            <Image
              style={{width: 40, height: 25}}
              resizeMode="contain"
              source={asset.logo}
            />
            <Image
              style={{width: 50, height: 25}}
              resizeMode="contain"
              source={asset.logo}
            />
          </View>
          <View style={{marginTop: 30}}>
            <SwiperComponent />
          </View>
        </Container>
        <View>
          <TextTicker />
        </View>
        <View style={{margin: 10}}>
          <SwiperBanner />
        </View>

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
