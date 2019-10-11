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
import Camera from '../../containers/CameraScreen';
import _ from 'lodash';
import {connect} from 'react-redux';
import asset from '../../config/asset';
import {savePhoto} from '../../redux/main.action';
import {Actions} from 'react-native-router-flux';
import Base from '../../containers/Base';
import BaseHeader from '../BaseHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CategoriesContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const CategoriesItem = styled.View`
  width: 100%;
  height: ${height / 4};
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
  width: 35px;
  height: 35px;
  margin-right: 30px;
`;

const ItemText = styled.Text`
  font-family: 'SpoqaHanSans-regular';
  font-size: 22px;
`;

const ArrowImage = styled.Image`
  width: 8px;
  height: 16px;
`;

// const CategoriesItems = ({resource, action, props}) => {
//   const firstPhoto = props.props.props.productRegistration.path;
//   console.log(firstPhoto);
//   return (
//     <CategoriesItem>
//       <TouchableOpacity
//         style={{justifyContent: 'center', alignItems: 'center'}}
//         onPress={action}>
//         {_.isNil(firstPhoto) ? (
//           <ImageSection />
//         ) : (
//           <Image
//             source={{uri: firstPhoto}}
//             style={{width: 50, height: 50, backgroundColor: 'transparent'}}
//           />
//         )}
//         <Text>{resource.title}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={action}
//         style={{justifyContent: 'center', alignItems: 'center'}}>
//         {_.isNil(firstPhoto) ? (
//           <ImageSection />
//         ) : (
//           <Image
//             source={{uri: firstPhoto}}
//             style={{width: 50, height: 50, backgroundColor: 'transparent'}}
//           />
//         )}
//         <Text>{resource.title}</Text>
//       </TouchableOpacity>
//       {/* <Camera /> */}
//     </CategoriesItem>
//   );
// };

// const _renderCategoriesItem = props => {
//   return (
//     <CategoriesItems
//       props={props}
//       action={GOF('camera')}
//       // action={() => <Camera />}
//       resource={{
//         title: 'asd',
//       }}
//     />
//   );
// };

// const CategoriesComponent = props => {
//   return (
//     <CategoriesContainer>
//       <_renderCategoriesItem props={props} />
//     </CategoriesContainer>
//   );
// };

const RegisterItemCategories = ({resource, action}) => {
  return (
    <View style={{marginTop: 14}}>
      <CategoriesItemTouch onPress={action}>
        <JustifyCenter>
          <ItemTouchImage source={resource.image} resizeMode="contain" />
          <ItemText>{resource.text}</ItemText>
        </JustifyCenter>
        <Icon name={'keyboard-arrow-right'} size={30} />

        {/* <ArrowImage source={asset.home} /> */}
      </CategoriesItemTouch>
    </View>
  );
};

@connect(state => ({
  productRegistration: state.productRegistration,
}))
export default class CategoriesComponent extends Base {
  constructor(props) {
    super(props);

    this.state = {
      path: props.productRegistration.path,
    };
  }

  // componentDidMount = async () => {
  //   try {
  //     await DISPATCH(savePhoto());
  //     // console.log(savePhoto());
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  componentDidMount() {
    console.log(this.props);
    // alert(1);
  }

  render() {
    const path = this.props.productRegistration.path;
    return (
      <View>
        <BaseHeader title={'담보 상품 등록'} closed />
        <View style={{padding: 20, marginTop: 40}}>
          <Text style={{fontFamily: 'SpoqaHanSans-bold'}}>등록 상품 선택</Text>
          <RegisterItemCategories
            action={() => GO('pictureSaveScreen')}
            resource={{
              text: '노트북',
              image: asset.icon.laptop,
            }}
          />
          <RegisterItemCategories
            action={() => alert(1)}
            resource={{
              text: '카메라',
              image: asset.icon.camera,
            }}
          />
          <RegisterItemCategories
            action={() => alert(1)}
            resource={{
              text: '가방',
              image: asset.icon.bag,
            }}
          />
          <RegisterItemCategories
            action={() => alert(1)}
            resource={{
              text: '시계',
              image: asset.icon.watch,
            }}
          />
          <RegisterItemCategories
            action={() => alert(1)}
            resource={{
              text: '시계',
              image: asset.icon.watch,
            }}
          />
        </View>
      </View>
    );
  }
}

// export default CategoriesComponent;
