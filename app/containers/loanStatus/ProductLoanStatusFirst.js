import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import Base from '../Base';
import BaseHeader from '../../components/BaseHeader';
import {connect} from 'react-redux';
import {
  HOME_GREY_COLOR,
  GREY_COLOR,
  TINT_COLOR,
  POINT_COLOR,
  INACTIVE_COLOR,
} from '../../config/colors';
import styled from 'styled-components';
import numeral from 'numeral';
import * as Animatable from 'react-native-animatable';
import SelectOptionButton from '../../components/button/SelectOptionButton';
import Icon from 'react-native-vector-icons/FontAwesome';
const UploadImageContainer = styled.View`
  padding-horizontal: 30px;
  padding-vertical: 20px;
  justify-content: flex-start;
  flex-direction: row;
`;

const UploadImageItem = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin-right: 20px;
`;

const LoanPriceText = styled.Text`
  font-family: 'SpoqaHanSans-bold'
  font-size: 26px;
  letter-spacing: 1px;
`;

const HighPriceText = styled.Text`
  font-family: 'SpoqaHanSans-Regular'
  letter-spacing: 1px;
  color: #d63031
`;

const LowPriceText = styled.Text`
  font-family: 'SpoqaHanSans-Regular'
  letter-spacing: 1px;
  color: #0984e3
`;

const PriceText = styled.Text`
  font-family: 'SpoqaHanSans-Regular';
`;

const loanButtonColorOption = {
  defaultBackgroundColor: '#00EEB6',
  defaultTextColor: `${TINT_COLOR}`,
  loanButtonStyle: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  loanButtonTextStyle: {
    fontSize: 14,
    fontFamily: 'SpoqaHanSans-bold',
  },
  loanBorderButtonStyle: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderBottomColor: '#00EEB6',
    borderLeftColor: '#00EEB6',
    borderRightColor: '#00EEB6',
    borderTopColor: '#00EEB6',
  },
};

const UploadImageWrap = ({resource, index}) => {
  return (
    <UploadImageContainer>
      <UploadImageItem resizeMode="cover" source={{uri: resource.image_1}} />
      <UploadImageItem resizeMode="cover" source={{uri: resource.image_2}} />
      <UploadImageItem resizeMode="cover" source={{uri: resource.image_3}} />
      <UploadImageItem resizeMode="cover" source={{uri: resource.image_4}} />
      <UploadImageItem
        style={{marginRight: 0}}
        resizeMode="cover"
        source={{uri: resource.image_5}}
      />
    </UploadImageContainer>
  );
};

const PriceContainerWrap = ({resource, index}) => {
  return (
    <View style={{marginTop: 10, marginBottom: 20}}>
      <LoanPriceText>
        {numeral(resource.valuation1).format('0,0')} 원
      </LoanPriceText>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <HighPriceText>최고 시세</HighPriceText>
        <PriceText>{numeral(resource.valuation1).format('0,0')} 원</PriceText>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <LowPriceText>최저 시세</LowPriceText>
        <PriceText>{numeral(resource.valuation2).format('0,0')} 원</PriceText>
      </View>
    </View>
  );
};

@connect(state => ({
  routes: state.routes,
  user: state.users.user,
}))
export default class ProductLoanStatusFirst extends Base {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const productList = this.props.item;
    console.log(productList);
    console.log(productList.picture1);
    console.log('this props ~~~~~~', this.props);

    return (
      <View style={{height}}>
        <BaseHeader title={'담보 상품 정보'} closed />
        <ScrollView>
          <View style={{paddingHorizontal: 30, paddingVertical: 10}}>
            <Text style={{fontFamily: 'SpoqaHanSans-bold'}}>업로드 이미지</Text>
          </View>
          <View style={{width, backgroundColor: `${GREY_COLOR}`}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <UploadImageWrap
                resource={{
                  image_1: productList.picture1,
                  image_2: productList.picture2,
                  image_3: productList.picture3,
                  image_4: productList.picture4,
                  image_5: productList.picture5,
                }}
              />
            </ScrollView>
          </View>
          <Animatable.View
            animation="fadeIn"
            duration={2000}
            style={{paddingHorizontal: 30, paddingVertical: 10}}>
            <Text style={{fontFamily: 'SpoqaHanSans-bold'}}>
              중고 시세&nbsp;&nbsp;|&nbsp;&nbsp;손목 시계
            </Text>
            <PriceContainerWrap
              resource={{
                valuation1: productList.valuation1,
                valuation2: productList.valuation2,
              }}
            />
            <Text style={{fontFamily: 'SpoqaHanSans-bold'}}>
              대출 진행 현황
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  width: '15%',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  // backgroundColor: 'red',
                  paddingTop: 4,
                }}>
                <Icon size={15} name={'circle-o'} color={`${INACTIVE_COLOR}`} />
                <View
                  style={{
                    borderWidth: 0.5,
                    height: 180,
                    marginVertical: 2,
                    borderColor: `${INACTIVE_COLOR}`,
                  }}
                />
                <Icon size={15} name={'circle-o'} color={`${INACTIVE_COLOR}`} />
              </View>
              <View
                style={{
                  // backgroundColor: 'red',
                  width: '85%',
                  height: '100%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  // backgroundColor: 'red',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: `${POINT_COLOR}`,
                      fontFamily: 'SpoqaHanSans-bold',
                    }}>
                    선대출 금액
                  </Text>

                  <Text
                    style={{
                      color: `${INACTIVE_COLOR}`,
                      fontFamily: 'SpoqaHanSans-regular',
                    }}>
                    &nbsp;&nbsp;=&nbsp;&nbsp;중고 시세 / 50%
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    width: '100%',
                    borderWidth: 1,
                    borderColor: `${INACTIVE_COLOR}`,
                    padding: 15,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'SpoqaHanSans-bold',
                      fontSize: 24,
                      marginBottom: 5,
                    }}>
                    {numeral(productList.valuation1 / 2).format('0,0')} 원
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      height: 24,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'SpoqaHanSans-regular',
                        color: `${INACTIVE_COLOR}`,
                      }}>
                      이자율
                    </Text>
                    <Text style={{fontFamily: 'SpoqaHanSans-regular'}}>
                      5.4%
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'SpoqaHanSans-regular',
                        color: `${INACTIVE_COLOR}`,
                      }}>
                      대출 시작일
                    </Text>
                    <Text style={{fontFamily: 'SpoqaHanSans-regular'}}>
                      미정
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'SpoqaHanSans-regular',
                        color: `${INACTIVE_COLOR}`,
                      }}>
                      대출 상환일
                    </Text>
                    <Text style={{fontFamily: 'SpoqaHanSans-regular'}}>
                      미정
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Animatable.View>
        </ScrollView>
        <View style={{padding: 20}}>
          <SelectOptionButton
            defaultTextColor={loanButtonColorOption.defaultTextColor}
            defaultBackgroundColor={
              loanButtonColorOption.defaultBackgroundColor
            }
            selectTextColor={loanButtonColorOption.defaultTextColor}
            buttonStyle={loanButtonColorOption.loanButtonStyle}
            textStyle={loanButtonColorOption.loanButtonTextStyle}
            text="선대출 신청하기"
            onPressOutButton={() => GO('productLoanStatusFirst', {item})}
          />
        </View>
      </View>
    );
  }
}
