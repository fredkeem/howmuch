import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  position: absolute;
`;

export default () => (
  <Container>
    <ActivityIndicator color="#0000ff" size="large" />
  </Container>
);
