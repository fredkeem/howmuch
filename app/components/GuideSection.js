import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styled from 'styled-components';
import {POINT_COLOR} from '../config/colors';
import asset from '../config/asset';
import IconFeather from 'react-native-vector-icons/Feather';

const ItemBubble = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;

const ImageContainer = styled.View`
  background-color: #f0f0f0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 40px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-horizontal: 20;
`;

const BoldText = styled.Text`
  font-family: 'SpoqaHanSans-bold';
`;

const GuideSectionItem = ({resource, action}) => (
  <ItemBubble onPress={action}>
    <ImageContainer>
      <Image
        style={{width: 24, height: 24, marginRight: 14}}
        resizeMode="contain"
        source={resource.image}
      />
      <BoldText>{resource.title}</BoldText>
    </ImageContainer>
    <View
      style={{
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
      <BoldText style={{fontSize: 16, lineHeight: 35}}>맥북 15inch</BoldText>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginRight: 20,
          }}>
          <IconFeather
            name={'chevron-up'}
            size={16}
            style={{marginRight: 5, paddingTop: 2}}
            color={'#d63031'}
          />
          <Text
            style={{
              fontFamily: 'SpoqaHanSans-Regular',
              fontSize: 14,
              color: '#d63031',
            }}>
            1,000,000 원
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <IconFeather
            name={'chevron-down'}
            size={16}
            style={{marginRight: 5, paddingTop: 2}}
            color={'#0984e3'}
          />
          <Text
            style={{
              fontFamily: 'SpoqaHanSans-Regular',
              fontSize: 14,
              color: '#0984e3',
            }}>
            800,000 원
          </Text>
        </View>
      </View>
    </View>
  </ItemBubble>
);
export default class GuideSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressGuideLaptop() {
    GO('tutorial', {tutorialType: 'laptop'});
  }
  onPressGuideComputer() {
    GO('tutorial', {tutorialType: 'computer'});
  }
  onPressGuideBag() {
    GO('tutorial', {tutorialType: 'bag'});
  }
  onPressGuideWatch() {
    GO('tutorial', {tutorialType: 'watch'});
  }

  render() {
    return (
      <View style={{width: '100%'}}>
        <GuideSectionItem
          action={this.onPressGuideLaptop}
          resource={{
            image: asset.icon.laptop,
            title: '노트북 중고 시세',
          }}
        />
      </View>
    );
  }
}
