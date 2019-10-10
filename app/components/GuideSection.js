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
  margin-top: 20px;
  margin-right: 32px;
`;

const ImageContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 60px
  background-color: ${POINT_COLOR};
  justify-content: center;
  align-items: center;
`;

const GuideSectionItem = ({resource, action}) => (
  <ItemBubble onPress={action}>
    <ImageContainer>
      <Image
        style={{width: 33, height: 33}}
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

// const GuideSectionItems = () => (
//   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//     <GuideSectionItem
//       action={this.actionTest.bind(this)}
//       resource={{
//         image: asset.icon.laptop,
//         title: '노트북',
//       }}
//     />
//     <GuideSectionItem
//       action={GOF('tutorial')}
//       resource={{
//         image: asset.icon.compouter,
//         title: '데스크탑',
//       }}
//     />
//     <GuideSectionItem
//       action={GOF('tutorial')}
//       resource={{
//         image: asset.icon.bag,
//         title: '가방',
//       }}
//     />
//     <GuideSectionItem
//       action={GOF('tutorial')}
//       resource={{
//         image: asset.icon.watch,
//         title: '시계',
//       }}
//     />
//     <GuideSectionItem
//       action={GOF('tutorial')}
//       resource={{
//         image: asset.icon.watch,
//         title: '아이폰',
//       }}
//     />
//   </ScrollView>
// );

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
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <GuideSectionItem
          action={this.onPressGuideLaptop}
          resource={{
            image: asset.icon.laptop,
            title: '노트북',
          }}
        />
        <GuideSectionItem
          action={this.onPressGuideComputer}
          resource={{
            image: asset.icon.camera,
            title: '카메라',
          }}
        />
        <GuideSectionItem
          action={this.onPressGuideBag}
          resource={{
            image: asset.icon.bag,
            title: '가방',
          }}
        />
        <GuideSectionItem
          action={this.onPressGuideWatch}
          resource={{
            image: asset.icon.watch,
            title: '시계',
          }}
        />
        <GuideSectionItem
          action={this.onPressGuideWatch}
          resource={{
            image: asset.icon.watch,
            title: '아이폰',
          }}
        />
      </ScrollView>
    );
  }
}
