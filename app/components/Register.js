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

const Register = () => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>This is Register</Text>
    </TouchableOpacity>
  );
};
export default Register;
