import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PhoneLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <ScrollView keyboardShouldPersistTaps="never" scrollEnabled={false}>
          <View
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
            }}>
            <Text>{this.state.errorMessage}</Text>
            <TextInput
              onChangeText={email => this.setState({email})}
              value={this.state.email}
              placeholder="EMAIL ADDRESS"
              autoCapitalize="none"
              onFocus={() => this.setState({email: ''})}
              underlineColorAndroid="#fff"
            />
            <TextInput
              onChangeText={password => this.setState({password})}
              value={this.state.password}
              placeholder="PASSWORD"
              autoCapitalize="none"
              onFocus={() => this.setState({password: ''})}
              underlineColorAndroid="#fff"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
