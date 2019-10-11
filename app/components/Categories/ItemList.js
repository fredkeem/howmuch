import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import asset from '../../config/asset';
const CategoriesItemTouch = styled.TouchableOpacity`
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const JustifyCenter = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const ItemTouchImage = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 30px;
`;

const ItemText = styled.Text`
  font-family: 'SpoqaHanSans-bold';
  font-size: 24px;
`;

const ArrowImage = styled.Image`
  width: 8px;
  height: 16px;
`;

const ItemList = () => {
  return (
    <View style={{padding: 20, marginTop: 40}}>
      <Text style={{fontFamily: 'SpoqaHanSans-bold'}}>등록 상품 선택</Text>
      <View style={{marginTop: 14}}>
        <CategoriesItemTouch>
          <JustifyCenter>
            <ItemTouchImage source={asset.icon.laptop} resizeMode="contain" />
            <ItemText>노트북</ItemText>
          </JustifyCenter>
          <Icon name={'keyboard-arrow-right'} size={30} />

          {/* <ArrowImage source={asset.home} /> */}
        </CategoriesItemTouch>
      </View>
    </View>
  );
};

export default ItemList;
