import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import styled from 'styled-components';
import {POINT_COLOR} from '../config/colors';
import asset from '../config/asset';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 6;

const ItemBubble = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
  margin-right: 10px;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 80px;
  border-radius: 10px
  background-color: ${POINT_COLOR};
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 20px;
`;

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic AntelopeCanyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
  },
];

const BannerSectionItem = ({resource, action}) => (
  <ItemBubble onPress={action}>
    <ImageContainer>
      <Image
        style={{width: 35, height: 35}}
        resizeMode="contain"
        source={resource.image}
      />
      <Text
        style={{
          fontFamily: 'SpoqaHanSans-Regular',
          marginTop: 3,
          fontSize: 12,
        }}>
        {resource.title}
      </Text>
    </ImageContainer>
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
  _renderItem({item, index}) {
    return (
      <View
        style={{
          width: '100%',
          height: 80,
          backgroundColor: '#E1F6FF',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          padding: 20,
        }}>
        <Image style={{width: 40, height: 40}} source={asset.home} />
        <Text style={{fontFamily: 'SpoqaHanSans-bold'}}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{marginTop: 10}}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>
    );
  }
}
