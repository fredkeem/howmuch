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

const ItemBubble = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-right: 25px;
`;

const ImageContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 50px
  background-color: ${POINT_COLOR};
  justify-content: center;
  align-items: center;
`;

const GuideSectionItem = ({resource, action}) => (
  <ItemBubble onPress={action}>
    <ImageContainer>
      <Image
        style={{width: 35, height: 35}}
        resizeMode="contain"
        source={resource.image}
      />
    </ImageContainer>
    <Text
      style={{fontFamily: 'SpoqaHanSans-Regular', marginTop: 3, fontSize: 12}}>
      {resource.title}
    </Text>
  </ItemBubble>
);

const GuideSectionItems = () => (
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <GuideSectionItem
      action={GOF('camera')}
      resource={{
        image: asset.icon.laptop,
        title: '노트북',
      }}
    />
    <GuideSectionItem
      action={GOF('camera')}
      resource={{
        image: asset.icon.compouter,
        title: '데스크탑',
      }}
    />
    <GuideSectionItem
      action={GOF('camera')}
      resource={{
        image: asset.icon.bag,
        title: '가방',
      }}
    />
    <GuideSectionItem
      action={GOF('camera')}
      resource={{
        image: asset.icon.watch,
        title: '시계',
      }}
    />
    <GuideSectionItem
      action={GOF('camera')}
      resource={{
        image: asset.icon.watch,
        title: '아이폰',
      }}
    />
  </ScrollView>
);

export default class GuideSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <GuideSectionItems />;
  }
}
