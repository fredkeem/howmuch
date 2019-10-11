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
  align-items: flex-start;
  margin-top: 10px;
  margin-right: 25px;
`;

const ImageContainer = styled.View`
  width: 210px;
  height: 100px;
  border-radius: 10px
  background-color: ${POINT_COLOR};
  justify-content: center;
  align-items: center;
`;

const BannerSectionItem = ({resource, action}) => (
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

const BannerSectionItems = () => (
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <BannerSectionItem
      action={GOF('cameraScreen')}
      resource={{
        image: asset.icon.laptop,
        title: '노트북',
      }}
    />
    <BannerSectionItem
      action={GOF('cameraScreen')}
      resource={{
        image: asset.icon.computer,
        title: '데스크탑',
      }}
    />
    <BannerSectionItem
      action={GOF('cameraScreen')}
      resource={{
        image: asset.icon.bag,
        title: '가방',
      }}
    />
    <BannerSectionItem
      action={GOF('cameraScreen')}
      resource={{
        image: asset.icon.watch,
        title: '시계',
      }}
    />
    <BannerSectionItem
      action={GOF('cameraScreen')}
      resource={{
        image: asset.icon.watch,
        title: '아이폰',
      }}
    />
  </ScrollView>
);

export default class SwiperBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <BannerSectionItems />;
  }
}
