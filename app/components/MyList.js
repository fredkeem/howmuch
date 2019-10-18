import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styled from 'styled-components';
import asset from '../config/asset';
import {
  POINT_COLOR,
  TINT_COLOR,
  GREY_COLOR,
  HOME_GREY_COLOR,
} from '../config/colors';
import IconFeather from 'react-native-vector-icons/Feather';
import numeral from 'numeral';
import SelectOptionButton from './button/SelectOptionButton';

const Container = styled.TouchableOpacity`
  margin-vertical: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageContainer = styled.View`
  width: 88px;
  height: 128px;
  margin-right: 20px;
`;

const ImageItem = styled.Image`
  width: 88px;
  height: 128px;
  background-color: red;
  border-radius: 5px;
`;

const StatusDescriptionContainer = styled.View`
  flex: 1;
`;

const ProductName = styled.Text`
  font-size: 20px;
  font-family: 'SpoqaHanSans-Bold';
`;

const StatusColorBox = styled.View`
  width: 60px;
  height: 22px;
  justify-content: center;
  align-items: center;
  background-color: ${POINT_COLOR};
  border-radius: 4px;
`;

const StatusText = styled.Text`
  font-size: 12px;
  color: ${HOME_GREY_COLOR};
  font-family: 'SpoqaHanSans-Bold';
`;

const PriceContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-vertical: 10px;
`;

const ListDetailTop = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px;
  padding-bottom: 5px;
  border-bottom-color: ${GREY_COLOR};
`;

const BoldText = styled.Text`
  font-family: 'SpoqaHanSans-bold';
  font-size: 14px;
`;
const RegularText = styled.Text`
  font-family: 'SpoqaHanSans-regular';
  font-size: 14px;
`;
const loanButtonColorOption = {
  defaultBackgroundColor: '#DCFFF7',
  defaultTextColor: '#00EEB6',
  loanButtonStyle: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  loanButtonTextStyle: {
    fontSize: 14,
    fontFamily: 'SpoqaHanSans-bold',
  },
  loanBorderButtonStyle: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderBottomColor: '#00EEB6',
    borderLeftColor: '#00EEB6',
    borderRightColor: '#00EEB6',
    borderTopColor: '#00EEB6',
    marginBottom: 10,
  },
};

// export default class InprocessContainer extends Component {

// }

export default class InprocessContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('222222222222222222', this.props);
  }

  _productRenderItem = ({item, index}) => {
    return (
      <View>
        <Container>
          <ImageContainer>
            <ImageItem source={{uri: item.picture1}} />
          </ImageContainer>
          <StatusDescriptionContainer>
            <ListDetailTop>
              <ProductName>이름</ProductName>
              <If condition={item.status === 1}>
                <StatusText>대기중</StatusText>
              </If>
              <If condition={item.status === 2 || 3 || 4 || 5}>
                <StatusText style={{color: `${POINT_COLOR}`}}>50%</StatusText>
              </If>
            </ListDetailTop>
            <PriceContainer>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <IconFeather
                    name={'chevron-up'}
                    size={20}
                    style={{marginRight: 5}}
                    color={'#d63031'}
                  />
                  <RegularText
                    style={{
                      color: '#d63031',
                    }}>
                    최고
                  </RegularText>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <IconFeather
                    name={'chevron-down'}
                    size={20}
                    style={{marginRight: 5}}
                    color={'#0984e3'}
                  />
                  <RegularText
                    style={{
                      color: '#0984e3',
                    }}>
                    최저 시세
                  </RegularText>
                </View>
              </View>
              <View>
                <RegularText
                  style={{
                    textAlign: 'right',
                  }}>
                  {numeral(item.valuation2).format('0,0')} 원
                </RegularText>
                <RegularText
                  style={{
                    textAlign: 'right',
                  }}>
                  {numeral(item.valuation1).format('0,0')} 원
                </RegularText>
              </View>
            </PriceContainer>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                // marginTop: 10,
              }}>
              <BoldText>예상 거래 금액</BoldText>
              <BoldText>{numeral(item.valuation1).format('0,0')} 원</BoldText>
            </View>
          </StatusDescriptionContainer>
        </Container>
        <If condition={item.status === 1}>
          <SelectOptionButton
            defaultTextColor={loanButtonColorOption.defaultTextColor}
            defaultBackgroundColor={
              loanButtonColorOption.defaultBackgroundColor
            }
            selectTextColor={loanButtonColorOption.defaultTextColor}
            buttonStyle={loanButtonColorOption.loanButtonStyle}
            textStyle={loanButtonColorOption.loanButtonTextStyle}
            text="대출 하기"
            onPressOutButton={() => GO('productLoanStatusFirst', {item})}
          />
        </If>
        <If condition={item.status === 2}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <SelectOptionButton
              defaultTextColor={loanButtonColorOption.defaultTextColor}
              defaultBackgroundColor={
                loanButtonColorOption.defaultBackgroundColor
              }
              selectTextColor={loanButtonColorOption.defaultTextColor}
              buttonStyle={loanButtonColorOption.loanButtonStyle}
              textStyle={loanButtonColorOption.loanButtonTextStyle}
              text="중도 상환"
              onPressOutButton={() => GO('product')}
            />
            <SelectOptionButton
              defaultTextColor={loanButtonColorOption.defaultTextColor}
              defaultBackgroundColor={
                loanButtonColorOption.defaultBackgroundColor
              }
              selectTextColor={loanButtonColorOption.defaultTextColor}
              buttonStyle={loanButtonColorOption.loanButtonStyle}
              textStyle={loanButtonColorOption.loanButtonTextStyle}
              text="추가 대출"
              onPressOutButton={() => GO('product')}
            />
          </View>
        </If>
        <If condition={item.status === 3}>
          <SelectOptionButton
            defaultTextColor={loanButtonColorOption.defaultTextColor}
            defaultBackgroundColor={
              loanButtonColorOption.defaultBackgroundColor
            }
            selectTextColor={loanButtonColorOption.defaultTextColor}
            buttonStyle={loanButtonColorOption.loanBorderButtonStyle}
            textStyle={loanButtonColorOption.loanButtonTextStyle}
            text="추가 대출 감정가 확인"
            onPressOutButton={() => GO('productLoanStatusFirst', {item})}
          />
        </If>
        <If condition={item.status === 4}>
          <SelectOptionButton
            defaultTextColor={loanButtonColorOption.defaultTextColor}
            defaultBackgroundColor={
              loanButtonColorOption.defaultBackgroundColor
            }
            selectTextColor={loanButtonColorOption.defaultTextColor}
            buttonStyle={loanButtonColorOption.loanButtonStyle}
            textStyle={loanButtonColorOption.loanButtonTextStyle}
            text="대출 자세히 보기"
            onPressOutButton={() => GO('productLoanStatusFirst', {item})}
          />
        </If>
      </View>
    );
  };

  render() {
    const productList =
      this.props.props.productList && this.props.props.productList.data;
    console.log(productList);
    return (
      <View>
        <FlatList data={productList} renderItem={this._productRenderItem} />
      </View>
    );
  }
}
// export const InprocessContainer = props => {

// };
