import React from 'react';
import {View, TouchableOpacity, Text, Image, FlatList} from 'react-native';
import _ from 'lodash';
import Base from '../Base';
import BaseHeader from '../../components/BaseHeader';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {savePhoto} from '../../redux/main.action';
import asset from '../../config/asset';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {POINT_COLOR, TINT_COLOR} from '../../config/colors';
import Modal from 'react-native-modal';

import {
  productCategory1,
  productCategory2,
  productCategory3,
  productCategory4,
  productCategory5,
} from '../../redux/main.action';

const SECTION = {
  laptop: [
    {
      title: '노트북',
    },
  ],
  camera: [
    {
      title: '카메라',
    },
  ],
  bag: [
    {
      title: '가방',
    },
  ],
  watch: [
    {
      title: '시계',
    },
  ],
};

const PictureItemTouch = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
`;

const ItemContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const EmptyImage = styled.View`
  background-color: ${POINT_COLOR};
  width: 60px;
  height: 60px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`;

const UploadImage = styled.Image`
  width: 100px;
  height: 100px;
  background-color: transparent;
  border-radius: 50px;
`;

@connect(state => ({
  productRegistration: state.productRegistration,
  category1: state.main.category1,
  category2: state.main.category2,
  category3: state.main.category3,
  category4: state.main.category4,
  category5: state.main.category5,
}))

// type Props = {
//   pictureSaveScreenType: String
// }
export default class PictureSaveScreen extends Base {
  props: Props;

  static defaultProps = {
    pictureSaveScreenType: 'laptop',
  };

  constructor(props) {
    super(props);

    this.state = {
      path: props.productRegistration.path,
      modalVisible: false,
    };
  }

  componentDidMount = async () => {
    const {
      productType,
      category_1,
      category_2,
      category_3,
      category_4,
    } = this.props.state;
    console.log(1);
    console.log(this.props.state);
    try {
      const r = await DISPATCH(
        productCategory5(
          encodeURI(productType),
          encodeURI(category_1),
          encodeURI(category_2),
          encodeURI(category_3),
          encodeURI(category_4),
        ),
      );
      console.log(r);
      console.log('--------------', this.state);
    } catch (e) {
      console.log(e);
    }
  };

  submit() {
    console.log(this.state.path);
    // if (this.state.path === null) {
    //   alert('최소 1장 이상의 사진을 업로드 해주세요.');
    // } else {
    this.setState({modalVisible: true});
    // }
  }

  render() {
    const path = this.props.productRegistration.path;
    const entries = SECTION[this.props.pictureSaveScreenType];
    const data = this.props.category5 && this.props.category5.data;

    console.log(data, '----------------------------');
    return (
      <View>
        <BaseHeader title={'담보 상품 등록'} closed />
        <View style={{padding: 20}}>
          <FlatList
            data={entries}
            renderItem={({item}) => (
              <View>
                <Text
                  style={{
                    fontFamily: 'SpoqaHanSans-bold',
                    fontSize: 24,
                    marginBottom: 10,
                  }}>
                  {item.title} 담보 신청
                </Text>
                <View style={{marginBottom: 36}}>
                  <Text
                    style={{fontFamily: 'SpoqaHanSans-regular', fontSize: 12}}>
                    1. 필수 조건 업로드: 최소 감정가 책정{'\n'}2. 권장 조건
                    업로드: 평균 가격 책정{'\n'}3. 선택 조건 업로드: 평균 가격 +
                    @책정
                  </Text>
                </View>
              </View>
            )}
          />
          <Text style={{fontFamily: 'SpoqaHanSans-bold', marginBottom: 14}}>
            담보 상품 촬영
          </Text>
          <PictureItemTouch onPress={() => GO('cameraScreen')}>
            {path === null ? (
              // <Image
              //   source={asset.home}
              //   style={{width: 50, height: 50, backgroundColor: 'red'}}
              // />
              <ItemContainer>
                <View style={{flexDirection: 'row'}}>
                  <EmptyImage>
                    <Icon
                      name={IOS ? 'ios-camera' : 'md-camera'}
                      size={40}
                      color={`${TINT_COLOR}`}
                    />
                  </EmptyImage>
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{fontFamily: 'SpoqaHanSans-bold', fontSize: 20}}>
                      상품 정면
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'SpoqaHanSans-regular',
                        color: `${POINT_COLOR}`,
                      }}>
                      필수 품목입니다.
                    </Text>
                  </View>
                </View>
                <View>
                  <IconAnt name={'right'} size={25} />
                </View>
              </ItemContainer>
            ) : (
              <UploadImage source={{uri: path}} />
            )}
          </PictureItemTouch>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={this.submit.bind(this)}
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: `${POINT_COLOR}`,
                height: 50,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'SpoqaHanSans-bold',
                  color: `${TINT_COLOR}`,
                }}>
                물품 등록 완료
              </Text>
            </TouchableOpacity>
          </View>
          <Modal isVisible={this.state.modalVisible}>
            <View
              style={{
                backgroundColor: `${TINT_COLOR}`,
                borderRadius: 10,
                marginHorizontal: 15,
                padding: 20,
              }}>
              {/* <UploadImage source={{uri: path}} /> */}
              <Text
                style={{
                  fontFamily: 'SpoqaHanSans-bold',
                  color: `${POINT_COLOR}`,
                  marginBottom: 20,
                }}>
                대출금 정보
              </Text>
              <Text>예상 대출 금액</Text>
              <Text style={{fontFamily: 'SpoqaHanSans-bold', fontSize: 24}}>
                900,000 원
              </Text>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
