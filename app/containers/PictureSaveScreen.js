import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import _ from 'lodash';
import Base from './Base';
import BaseHeader from '../components/BaseHeader';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {savePhoto} from '../redux/main.action';
import asset from '../config/asset';

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
          <Text style={{fontFamily: 'SpoqaHanSans-bold'}}>담보 상품 촬영</Text>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => GO('camera')}>
            {path === null ? (
              <Image
                source={asset.home}
                style={{width: 50, height: 50, backgroundColor: 'red'}}
              />
            ) : (
              <Image
                source={{uri: path}}
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'transparent',
                  borderRadius: 50,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
