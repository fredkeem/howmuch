import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components';
import asset from '../config/asset';
import {POINT_COLOR, TINT_COLOR, GREY_COLOR} from '../config/colors';

const Container = styled.TouchableOpacity`
  margin-vertical: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageContainer = styled.View`
  width: 88px;
  height: 128px;
  margin-right: 20px;
`;

const ImageItem = styled.Image`
  width: 88px;
  height: 128px;
  background-color: red;
  border-radius: 5px;
`;

const StatusDescriptionContainer = styled.View`
  flex: 1;
`;

const ProductName = styled.Text`
  font-size: 20px;
  font-family: 'SpoqaHanSans-Bold';
`;

const StatusColorBox = styled.View`
  width: 60px;
  height: 22px;
  justify-content: center;
  align-items: center;
  background-color: ${POINT_COLOR};
  border-radius: 4px;
`;

const StatusText = styled.Text`
  font-size: 12px;
  color: ${TINT_COLOR};
  font-family: 'SpoqaHanSans-Bold';
`;

const PriceContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-vertical: 15px;
  border-bottom-width: 1
  border-bottom-color: ${GREY_COLOR}
`;

export const InprocessContainer = () => {
  return (
    <Container>
      <ImageContainer>
        {/* <ImageItem source={{uri: asset.home}} /> */}
      </ImageContainer>
      <StatusDescriptionContainer>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <ProductName>이름</ProductName>
          <StatusColorBox>
            <StatusText>대출중</StatusText>
          </StatusColorBox>
        </View>
        <PriceContainer>
          <View>
            <Text style={{fontFamily: 'SpoqaHanSans-Regular', fontSize: 12}}>
              총 대출 금액
            </Text>
            <Text style={{fontFamily: 'SpoqaHanSans-Regular', fontSize: 12}}>
              상환된 금액
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'SpoqaHanSans-Regular', fontSize: 12}}>
              123,123
            </Text>
            <Text style={{fontFamily: 'SpoqaHanSans-Regular', fontSize: 12}}>
              123,213
            </Text>
          </View>
        </PriceContainer>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{fontFamily: 'SpoqaHanSans-Bold', fontSize: 14}}>
            남은 금액
          </Text>
          <Text style={{fontFamily: 'SpoqaHanSans-Bold', fontSize: 14}}>
            11,645,700 원
          </Text>
        </View>
      </StatusDescriptionContainer>
    </Container>
  );
};
