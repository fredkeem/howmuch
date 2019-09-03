import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Black = () => {
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
        backgroundColor: 'green',
      }}
      onPress={goToBlue}>
      <Text style={{color: 'white'}}>This is Green!</Text>
    </TouchableOpacity>
  );
};
export default Black;
