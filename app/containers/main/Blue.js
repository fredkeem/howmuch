import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Blue = () => {
  const goToBlack = () => {
    Actions.home();
  };
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}
      onPress={goToBlack}>
      <Text style={{color: 'white'}}>This is Blue</Text>
    </TouchableOpacity>
  );
};
export default Blue;
