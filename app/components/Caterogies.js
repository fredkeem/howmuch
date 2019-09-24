import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ViewPagerAndroid,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';

const CategoriesContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const CategoriesItem = styled.View`
  width: 100%;
  height: ${height / 4};
  background-color: blue;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ImageSection = styled.View`
  width: 70px;
  height: 70px;
  background-color: red;
  border-radius: 70px;
  margin-bottom: 10px;
`;

_press = () => {
  GO('ProductRegistration');
};

const CategoriesItems = ({resource, action}) => (
  <CategoriesItem>
    <TouchableOpacity
      style={{justifyContent: 'center', alignItems: 'center'}}
      onPress={action}>
      <ImageSection />
      <Text>{resource.title}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
      <ImageSection />
      <Text>{resource.title}</Text>
    </TouchableOpacity>
  </CategoriesItem>
);

const _renderCategoriesItem = () => (
  <CategoriesItems
    action={GOF('productRegistration')}
    resource={{
      title: 'asd',
    }}
  />
);

const CategoriesComponent = () => {
  return (
    <CategoriesContainer>
      <_renderCategoriesItem />
    </CategoriesContainer>
  );
};

export default CategoriesComponent;
