import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  // AsyncStorage,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
import styles from './SigninStyles';
import SelectOptionButton from '../../../components/button/SelectOptionButton';
// import {connect} from 'react-redux';
import {loginUser} from '../../../redux/users.actions';
// import {saveUserToken} from '../../redux/actions';
import _ from 'lodash';

export default class EmailLogin extends Component {
  static navigationOptions = {
    title: 'Please sign in',
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      loader: false,
    };
  }

  async onPressLoginUser() {
    try {
      const {error} = await DISPATCH(
        loginUser(this.state.email, this.state.password),
      );

      if (!_.isEmpty(error)) {
        return alert(error);
      } else {
        GO('home');
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.fullSize}>
          <ScrollView
            keyboardShouldPersistTaps="never"
            scrollEnabled={false}
            contentContainerStyle={styles.fullSize}>
            <View>
              <Text>{this.state.errorMessage}</Text>
              <TextInput
                onChangeText={email => this.setState({email})}
                value={this.state.email}
                placeholder="EMAIL ADDRESS"
                autoCapitalize="none"
                onFocus={() => this.setState({email: ''})}
                underlineColorAndroid="#fff"
                style={styles.signin_input}
              />
              <TextInput
                onChangeText={password => this.setState({password})}
                value={this.state.password}
                placeholder="PASSWORD"
                autoCapitalize="none"
                onFocus={() => this.setState({password: ''})}
                underlineColorAndroid="#fff"
                style={styles.signin_input}
              />
            </View>
            <View>
              <SelectOptionButton
                // selectTextColor={loginButtonColorOption.darkBlueColor}
                // defaultTextColor={loginButtonColorOption.blueColor}
                text="Login"
                onPressOutButton={() => this.onPressLoginUser()}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

// const mapStateToProps = state => ({
//   token: state.token,
// });

// const mapDispatchToProps = dispatch => ({
//   saveUserToken: () => dispatch(saveUserToken()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(EmailLogin);
