import React, {Component} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import Action from '../../redux/actions';
// import {connect} from 'react-redux';
import {Home, Game, User, ActivityType} from '../../config/type';
import {article} from '../../api';
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
    const term = '아이패드';
    try {
      const {
        data: {items: searchObject},
      } = await article.showSearch(term);
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
    // const {hello} = this.state;
    console.log(this.state);
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <Text style={{color: 'white'}}>This is Black!</Text>
        {this.state.searchObject && this.state.searchObject.length > 0 && (
          <View>
            {this.state.searchObject.map(hi => (
              <View>
                <Text style={{color: 'white'}}>
                  아이폰XS {hi.lprice} / {hi.hprice}
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
      </View>
    );
  }
}
