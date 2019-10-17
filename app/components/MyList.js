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
import IconAnt from 'react-native-vector-icons/Feather';
import numeral from 'numeral';
import SelectOptionButton from './button/SelectOptionButton';

const Container = styled.TouchableOpacity`
  margin-vertical: 10px;
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

const loanButtonColorOption = {
  defaultBackgroundColor: '#DCFFF7',
  defaultTextColor: '#00EEB6',
  loanButtonStyle: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  loanButtonTextStyle: {
    fontSize: 14,
    fontFamily: 'SpoqaHanSans-bold',
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
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomWidth: 1,
                paddingBottom: 5,
                borderBottomColor: `${GREY_COLOR}`,
              }}>
              <ProductName>이름</ProductName>
              <StatusText>대기중</StatusText>
              {/* <StatusColorBox>
              <StatusText>대출중</StatusText>
            </StatusColorBox> */}
            </View>
            <PriceContainer>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <IconAnt
                    name={'chevron-up'}
                    size={20}
                    style={{marginRight: 5}}
                    color={'#d63031'}
                  />
                  <Text
                    style={{
                      fontFamily: 'SpoqaHanSans-Regular',
                      fontSize: 14,
                      color: '#d63031',
                    }}>
                    최고
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <IconAnt
                    name={'chevron-down'}
                    size={20}
                    style={{marginRight: 5}}
                    color={'#0984e3'}
                  />
                  <Text
                    style={{
                      fontFamily: 'SpoqaHanSans-Regular',
                      fontSize: 14,
                      color: '#0984e3',
                    }}>
                    최저 시세
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: 'SpoqaHanSans-Regular',
                    fontSize: 14,
                    textAlign: 'right',
                  }}>
                  {numeral(item.valuation2).format('0,0')} 원
                </Text>
                <Text
                  style={{
                    fontFamily: 'SpoqaHanSans-Regular',
                    fontSize: 14,
                    textAlign: 'right',
                  }}>
                  {numeral(item.valuation1).format('0,0')} 원
                </Text>
              </View>
            </PriceContainer>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                // marginTop: 10,
              }}>
              <Text style={{fontFamily: 'SpoqaHanSans-Bold', fontSize: 14}}>
                예상 거래 금액
              </Text>
              <Text style={{fontFamily: 'SpoqaHanSans-Bold', fontSize: 14}}>
                {numeral(item.valuation1).format('0,0')} 원
              </Text>
            </View>
          </StatusDescriptionContainer>
        </Container>
        <SelectOptionButton
          defaultTextColor={loanButtonColorOption.defaultTextColor}
          defaultBackgroundColor={loanButtonColorOption.defaultBackgroundColor}
          selectTextColor={loanButtonColorOption.defaultTextColor}
          buttonStyle={loanButtonColorOption.loanButtonStyle}
          textStyle={loanButtonColorOption.loanButtonTextStyle}
          text="대출 하기"
          onPressOutButton={() => GO('product')}
        />
      </View>
    );
  };

  render() {
    // console.log(this.props, '---------------------asdasdasdada');
    const productList =
      this.props.props.productList && this.props.props.productList.data;
    // console.log(productList.length, '------------------------');
    return (
      <View>
        <FlatList data={productList} renderItem={this._productRenderItem} />
      </View>
    );
  }
}
// export const InprocessContainer = props => {

// };
