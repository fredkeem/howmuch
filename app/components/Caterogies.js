import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ViewPagerAndroid,
  TouchableOpacity,
  Image,
} from 'react-native';
import styled from 'styled-components';
import Camera from '../containers/Camera';

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

const CategoriesItems = ({resource, action}) => (
  <CategoriesItem>
    <TouchableOpacity
      style={{justifyContent: 'center', alignItems: 'center'}}
      onPress={action}>
      <ImageSection />
      <Image
        source={resource.image}
        style={{width: 50, height: 50, backgroundColor: 'black'}}
      />
      <Text>{resource.title}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
      <ImageSection />
      <Text>{resource.title}</Text>
    </TouchableOpacity>
    {/* <Camera /> */}
  </CategoriesItem>
);

const _renderCategoriesItem = () => (
  <CategoriesItems
    action={GOF('camera')}
    // action={() => <Camera />}
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
