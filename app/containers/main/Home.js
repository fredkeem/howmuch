import React, {Component} from 'react';
import {TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import Action from '../../redux/actions';
// import {connect} from 'react-redux';
import {Home, Game, User, ActivityType} from '../../config/type';
import {object} from '../../api';
// import {removeUserToken} from '../../redux/users.actions';

type Props = {
  user: User,
  challengeUser: User,
};

export default class Black extends Component {
  constructor(props) {
    super(props);
  }

  props: Props;
  state: State;

  state = {
    searchObject: null,
  };

  async componentDidMount() {
    const iPad = '아이패드';
    const iPhone = '아이폰 중고';

    try {
      const {
        data: {items: searchObject},
      } = await object.showSearch(iPhone);
      this.setState({
        searchObject,
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        searchObject,
      });
    }
  }

  onPressLogOut() {
    ALERT2(T('로그아웃'), async () => {
      await DISPATCH({type: Action.BALANCE_LOGOUT, payload: null});
      POP('start');
    });
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
    // const results =
    //   this.state &&
    // this.state.searchObject.filter(item => item.productType === 4);
    // const r = this.state.searchObject.map(item => item.length);
    // console.log(
    //   this.state.searchObject.filter(item => item.productType === '4'),
    // );
    // const {hello} = this.state;
    // console.log(this.state.searchObject);

    return (
      <View
        style={{
          width: '100%',
          height: 2000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          flex: 1,
        }}>
        <ScrollView
          contentContainerStyle={{
            width: '100%',
            flexGrow: 1,
            height: 2000,
            marginTop: 50,
          }}>
          <Text style={{color: 'white'}}>This is Black!</Text>
          {this.state.searchObject && this.state.searchObject.length > 0 && (
            <View>
              {this.state.searchObject.map(item => (
                <View>
                  <Text style={{color: 'white'}}>
                    {item.lprice} / {item.hprice} / {item.productType}
                  </Text>
                </View>
              ))}
              <Text style={{color: 'white'}} />
            </View>
          )}
          <TouchableOpacity
            style={{
              width: 100,
              height: 50,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              borderRadius: 10,
            }}
            onPress={this.onPressLogOut}>
            <Text>Log out</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
