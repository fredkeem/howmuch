import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import styled from 'styled-components';
import asset from '../../config/asset';
import Base from '../Base';
import BaseHeader from '../../components/BaseHeader';
import {POINT_COLOR, GREY_COLOR, TINT_COLOR} from '../../config/colors';
import IconAnt from 'react-native-vector-icons/AntDesign';
import SelectOptionButton from '../../components/button/SelectOptionButton';
import Modal from 'react-native-modal';

const textButtonColorOption = {
  whiteColor: '#ffffff',
  blueColor: '#418DD9',
  blackColor: '#000',
};

const SECTION = {
  laptop: [
    {
      title: '노트북',
      image: asset.icon.laptop,
      product: {
        step_1: '회사 선택',
        step_2: '기종 선택',
        step_3: '색상 선택',
        step_4: '담보 상태 선택',
      },
    },
  ],
  camera: [
    {
      title: '카메라',
      image: asset.icon.camera,
      product: {
        step_1: '회사 선택',
        step_2: '기종 선택',
        step_3: '색상 선택',
        step_4: '담보 상태 선택',
      },
    },
  ],
  bag: [
    {
      title: '가방',
      image: asset.icon.bag,
      product: {
        step_1: '브랜드 선택',
        step_2: '레퍼런스 넘버 선택',
        step_3: '옵션 선택',
        step_4: '담보 상태 선택',
      },
    },
  ],
  watch: [
    {
      title: '시계',
      image: asset.icon.watch,
      product: {
        step_1: '이름 선택',
        step_2: '레퍼런스 넘버 선택',
        step_3: '옵션 선택',
        step_4: '담보 상태 선택',
      },
    },
  ],
};

const OptionTouchInput = styled.TouchableOpacity`
  border-bottom-color: ${POINT_COLOR};
  width: 100%;
  border-bottom-width: 1px;
  height: 30px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: flex-end;
`;

type Props = {
  productDetailType: String,
};

export default class ProductDetailOption extends Base {
  props: Props;

  static defaultProps = {
    productDetailType: 'laptop',
  };

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      step_1: null,
      step_2: null,
      step_3: null,
      step_4: null,
    };
  }

  // renderDetail = ({item, index}) => {
  //   return (
  //       <View style={{marginBottom: 30}}>
  //         <Text style={{fontFamily: 'SpoqaHanSans-regular'}}>{item.product_name}</Text>
  //         <TouchableOpacity
  //           style={{
  //             borderBottomColor: `${POINT_COLOR}`,
  //             width: '100%',
  //             borderBottomWidth: 1,
  //             height: 30,
  //             marginTop: 10,
  //           }}
  //         />
  //       </View>
  //   )
  // }

  modalOpen() {
    this.setState({modalVisible: true});
    console.log(this.state.modalVisible);
  }
  modalClose() {
    this.setState({modalVisible: false});
  }

  renderItem = ({item, index}) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image
            source={item.image}
            style={{marginRight: 20, marginVertical: 20, width: 40, height: 40}}
            resizeMode="contain"
          />
          <Text style={{fontFamily: 'SpoqaHanSans-regular', fontSize: 20}}>
            {item.title}
          </Text>
        </View>
        <View style={{marginBottom: 30}}>
          <Text style={{fontFamily: 'SpoqaHanSans-regular'}}>
            {item.product.step_1}
          </Text>
          <OptionTouchInput onPress={this.modalOpen.bind(this)}>
            <IconAnt name={'right'} size={20} color={`${POINT_COLOR}`} />
          </OptionTouchInput>
        </View>
        <View style={{marginBottom: 30}}>
          <Text style={{fontFamily: 'SpoqaHanSans-regular'}}>
            {item.product.step_2}
          </Text>
          <OptionTouchInput>
            <IconAnt name={'right'} size={20} color={`${POINT_COLOR}`} />
          </OptionTouchInput>
        </View>
        <View style={{marginBottom: 30}}>
          <Text style={{fontFamily: 'SpoqaHanSans-regular'}}>
            {item.product.step_3}
          </Text>
          <OptionTouchInput>
            <IconAnt name={'right'} size={20} color={`${POINT_COLOR}`} />
          </OptionTouchInput>
        </View>
        <View style={{marginBottom: 30}}>
          <Text style={{fontFamily: 'SpoqaHanSans-regular'}}>
            {item.product.step_4}
          </Text>
          <OptionTouchInput>
            <IconAnt name={'right'} size={20} color={`${POINT_COLOR}`} />
          </OptionTouchInput>
        </View>
      </View>
    );
  };

  render() {
    const entries = SECTION[this.props.productDetailType];
    console.log(entries);
    console.log(this.props);
    return (
      <View>
        <BaseHeader closed title="물품 등록" />
        <View style={{paddingVertical: 20, paddingHorizontal: 30}}>
          <Text style={{fontFamily: 'SpoqaHanSans-bold'}}>등록 상품 선택</Text>
          <FlatList
            data={SECTION[this.props.productDetailType]}
            renderItem={this.renderItem}
          />
          <SelectOptionButton
            selectTextColor={`${POINT_COLOR}`}
            defaultTextColor={`${TINT_COLOR}`}
            text={'다음'}
            textStyle={{
              fontFamily: 'SpoqaHanSans-bold',
              textAlign: 'center',
              fontSize: 15,
              bottom: 0,
              lineHeight: 50,
              height: 50,
              flex: 1,
              backgroundColor: `${POINT_COLOR}`,
              borderRadius: 20,
            }}
            onPressOutButton={GOF('pictureSaveScreen')}
          />

          <Modal
            isVisible={this.state.modalVisible}
            // propagateSwipe
            swipeDirection={['down']}
            onRequestClose={this.modalClose}
            style={{justifyContent: 'flex-end', margin: 0}}>
            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: '50%',
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                padding: 40,
              }}>
              <Text style={{fontFamily: 'SpoqaHanSans-bold', marginBottom: 10}}>
                이름 선택
              </Text>
              <ScrollView>
                <View>
                  <Text>asd</Text>
                </View>
              </ScrollView>
              <TouchableOpacity
                style={{justifyContent: 'flex-end'}}
                onPress={() => this.setState({modalVisible: false})}>
                <Text>닫기</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
