import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
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
}))
export default class PictureSaveScreen extends Base {
  constructor(props) {
    super(props);

    this.state = {
      path: props.productRegistration.path,
    };
  }

  componentDidMount() {
    console.log(1);
    console.log(this.props);
  }

  render() {
    const path = this.props.productRegistration.path;

    return (
      <View>
        <BaseHeader title={'담보 상품 등록'} closed />
        <View style={{padding: 20}}>
          <Text
            style={{
              fontFamily: 'SpoqaHanSans-bold',
              fontSize: 24,
              marginBottom: 10,
            }}>
            $'손목 시계' 담보 신청
          </Text>
          <View style={{marginBottom: 36}}>
            <Text style={{fontFamily: 'SpoqaHanSans-regular', fontSize: 12}}>
              1. 필수 조건 업로드: 최소 감정가 책정{'\n'}2. 권장 조건 업로드:
              평균 가격 책정{'\n'}3. 선택 조건 업로드: 평균 가격 + @책정
            </Text>
          </View>
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
        </View>
      </View>
    );
  }
}
