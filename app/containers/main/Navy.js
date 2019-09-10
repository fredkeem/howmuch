import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Navy = () => {
  const goToBlue = () => {
    Actions.blue();
  };
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#131C3A',
      }}
      onPress={goToBlue}>
      <Text style={{color: '#2bb4fc'}}>This is Navy!</Text>
    </TouchableOpacity>
  );
};
export default Navy;
