import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  AsyncStorage,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../signin/SigninStyles';
import SelectOptionButton from '../button/SelectOptionButton';
import {loginUser} from '../../api';
import _ from 'lodash';

export default class EmailLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      loader: false,
      coins: [],
    };
  }

  componentDidMount() {
    // this.loginUser();
    // console.log(this.state);
  }

  async loginUser() {
    try {
      const {user, error} = await loginUser(
        this.state.email,
        this.state.password,
      );
      if (!_.isEmpty(error)) {
        return alert(error);
      } else {
        Actions.black();
        // console.log(error);
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({loading: false});
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
                onPressOutButton={() => this.loginUser()}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
