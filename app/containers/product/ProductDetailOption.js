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
import {
  productType,
  productCategory1,
  productCategory2,
  productCategory3,
  productCategory4,
  productCategory5,
} from '../../redux/main.action';
import IconAnt from 'react-native-vector-icons/AntDesign';
import SelectOptionButton from '../../components/button/SelectOptionButton';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import _ from 'lodash';

const textButtonColorOption = {
  whiteColor: '#ffffff',
  blueColor: '#418DD9',
  blackColor: '#000',
};

const CATEGORY_1 = {
  laptop: [
    {
      key: 'Apple',
    },
    {
      key: 'LG',
    },
    {
      key: 'Samsung',
    },
  ],
  camera: [
    {
      key: '니콘',
    },
    {
      key: '캐논',
    },
    {
      key: '후지필름',
    },
  ],
  bag: [
    {
      key: '루이비통',
    },
    {
      key: '구찌',
    },
    {
      key: '에르메스',
    },
  ],
  watch: [
    {
      key: '롤렉스',
    },
    {
      key: '오메가',
    },
  ],
};

const CATEGORY_2 = {
  apple: [
    {
      key: 'iPhone 6',
    },
    {
      key: 'iPhone 7',
    },
    {
      key: 'iPhone 8',
    },
  ],
  samsung: [
    {
      key: 'Galaxy S8',
    },
    {
      key: 'Galaxy S9',
    },
    {
      key: 'Galaxy S10',
    },
  ],
  lg: [
    {
      key: 'LG1',
    },
    {
      key: 'LG2',
    },
    {
      key: 'LG3',
    },
  ],
};

const SECTION = {
  휴대폰: [
    {
      title: '노트북',
      image: asset.icon.laptop,
      product: {
        step_1: '회사 선택',
        step_2: '기종 선택',
        step_3: '색상 선택',
        step_4: '담보 상태 선택',
      },
      category_1: [{key: 'Apple'}, {key: 'LG'}, {key: 'Samsung'}],
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
  핸드백: [
    {
      title: '핸드백',
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

const CategoryFlatList = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CategoryItemList = styled.Text`
  line-height: 40px;
  font-family: 'SpoqaHanSans-bold';
  font-size: 18px;
`;

const SelectCategoryItemButton = styled.Text`
  line-height: 36px;
  font-family: 'SpoqaHanSans-bold';
  font-size: 16px;
  color: ${POINT_COLOR};
`;

type Props = {
  productDetailType: String,
};

@connect(state => ({
  productRegistration: state.productRegistration,
  productType: state.main.productType,
  category1: state.main.category1,
  category2: state.main.category2,
  category3: state.main.category3,
  category4: state.main.category4,
  category5: state.main.category5,
}))
export default class ProductDetailOption extends Base {
  props: Props;

  static defaultProps = {
    productDetailType: 'laptop',
  };

  constructor(props) {
    super(props);

    this.state = {
      path: props.productRegistration.path,
      modalVisible1: false,
      productType: null,
      step_1: null,
      step_2: null,
      step_3: null,
      step_4: null,
      category_1: null,
      category_2: null,
      category_3: null,
      category_4: null,
      type: 1 | 2 | 3 | 4,
    };
  }

  componentDidMount = async () => {
    console.log(this.props);
    try {
      await DISPATCH(productType(encodeURI([this.props.productDetailType])));
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({productType: [this.props.productDetailType]});
    }
    console.log(this.state);
  };

  modalOpen = async type => {
    const {productType} = this.state;
    this.setState({type});
    try {
      await DISPATCH(productCategory1(encodeURI(productType)));
    } catch (e) {
      console.log(e);
    } finally {
      if (this.state.type === 1) {
        this.setState({modalVisible: true});
      } else if (this.state.type === 2) {
        this.setState({modalVisible: true});
      } else if (this.state.type === 3) {
        this.setState({modalVisible: true});
      } else if (this.state.type === 4) {
        this.setState({modalVisible: true});
      }
    }

    // console.log(this.state.modalVisible);
  };
  modalClose() {
    this.setState({modalVisible: false});
  }

  selectCategory_1 = async item => {
    const {productType} = this.state;
    this.setState({category_2: null, category_3: null, category_4: null});
    try {
      await DISPATCH(productCategory2(encodeURI(productType), encodeURI(item)));
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        modalVisible: false,
        category_1: item,
      });
    }
    console.log(this.state);
  };
  selectCategory_2 = async item => {
    const {productType, category_1} = this.state;
    try {
      await DISPATCH(
        productCategory3(
          encodeURI(productType),
          encodeURI(category_1),
          encodeURI(item),
        ),
      );
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({modalVisible: false, category_2: item});
    }
  };

  selectCategory_3 = async item => {
    const {productType, category_1, category_2} = this.state;
    try {
      await DISPATCH(
        productCategory4(
          encodeURI(productType),
          encodeURI(category_1),
          encodeURI(category_2),
          encodeURI(item),
        ),
      );
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({modalVisible: false, category_3: item});
    }
  };
  selectCategory_4 = async item => {
    const {productType, category_1, category_2, category_3} = this.state;
    try {
      await DISPATCH(
        productCategory5(
          encodeURI(productType),
          encodeURI(category_1),
          encodeURI(category_2),
          encodeURI(category_3),
          encodeURI(item),
        ),
      );
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({modalVisible: false, category_4: item});
    }
  };

  nextStep = async type => {
    const {category_1, category_2, category_3, category_4} = this.state;
    if (
      _.isNil(category_1) ||
      _.isNil(category_2) ||
      _.isNil(category_3) ||
      _.isNil(category_4)
    ) {
      alert('카테고리를 선택해주세요');
    } else {
      GO('pictureSaveScreen', {pictureSaveScreenType: type, state: this.state});
    }
  };

  renderItem = ({item, index}) => {
    const {category_1, category_2, category_3, category_4} = this.state;

    // const category_2
    // console.log('renderItem', category_1);
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
          <OptionTouchInput
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 50,
            }}
            onPress={this.modalOpen.bind(this, 1)}>
            <Text
              ref="category_1"
              style={{
                lineHeight: 30,
                fontFamily: 'SpoqaHanSans-bold',
                fontSize: 20,
              }}>
              {category_1}
            </Text>
            <IconAnt name={'right'} size={20} color={`${POINT_COLOR}`} />
          </OptionTouchInput>
        </View>
        <View style={{marginBottom: 30}}>
          <Text style={{fontFamily: 'SpoqaHanSans-regular'}}>
            {item.product.step_2}
          </Text>
          <OptionTouchInput
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 50,
            }}
            onPress={this.modalOpen.bind(this, 2)}>
            <Text
              ref="category_2"
              style={{
                lineHeight: 30,
                fontFamily: 'SpoqaHanSans-bold',
                fontSize: 20,
              }}>
              {category_2}
            </Text>
            <IconAnt name={'right'} size={20} color={`${POINT_COLOR}`} />
          </OptionTouchInput>
        </View>
        <View style={{marginBottom: 30}}>
          <Text style={{fontFamily: 'SpoqaHanSans-regular'}}>
            {item.product.step_3}
          </Text>
          <OptionTouchInput
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 50,
            }}
            onPress={this.modalOpen.bind(this, 3)}>
            <Text
              ref="category_3"
              style={{
                lineHeight: 30,
                fontFamily: 'SpoqaHanSans-bold',
                fontSize: 20,
              }}>
              {category_3}
            </Text>
            <IconAnt name={'right'} size={20} color={`${POINT_COLOR}`} />
          </OptionTouchInput>
        </View>
        <View style={{marginBottom: 30}}>
          <Text style={{fontFamily: 'SpoqaHanSans-regular'}}>
            {item.product.step_4}
          </Text>
          <OptionTouchInput
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 50,
            }}
            onPress={this.modalOpen.bind(this, 4)}>
            <Text
              ref="category_1"
              style={{
                lineHeight: 30,
                fontFamily: 'SpoqaHanSans-bold',
                fontSize: 20,
              }}>
              {category_4}
            </Text>
            <IconAnt name={'right'} size={20} color={`${POINT_COLOR}`} />
          </OptionTouchInput>
        </View>
      </View>
    );
  };

  render() {
    const entries = SECTION[this.props.productDetailType];
    const productDetailType = this.props.productDetailType;
    const category_1 = this.props.category1 && this.props.category1.data;
    const category_2 = this.props.category2 && this.props.category2.data;
    const category_3 = this.props.category3 && this.props.category3.data;
    const category_4 = this.props.category4 && this.props.category4.data;
    // const category1 = CATEGORY_1[this.props.productDetailType];
    // const category2 = CATEGORY_2[this.props.productDetailType];
    // const path = this.props.productRegistration.path;
    // console.log('as: ', category_1);
    // console.log(category1);
    // console.log('카테고리 2', category2);
    // console.log(entries);
    // console.log(this.props);
    return (
      <View>
        <BaseHeader closed title="물품 등록" />
        <View style={{paddingVertical: 20, paddingHorizontal: 30}}>
          <Text style={{fontFamily: 'SpoqaHanSans-bold'}}>등록 상품 선택</Text>
          <FlatList
            data={entries}
            renderItem={this.renderItem}
            state={this.state}
          />
          <SelectOptionButton
            selectTextColor={`${TINT_COLOR}`}
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
              backgroundColor:
                this.state.category_1 !== null
                  ? `${POINT_COLOR}`
                  : `${GREY_COLOR}`,
              borderRadius: 20,
            }}
            onPressOutButton={this.nextStep.bind(this, productDetailType)}
          />

          <Modal
            isVisible={this.state.modalVisible}
            transparent={true}
            animationType="fade"
            style={{zIndex: -99}}
            onRequestClose={this.modalClose}
            style={{justifyContent: 'flex-end', margin: 0}}>
            <View
              // key={i}
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

              {this.state.type === 1 && (
                <FlatList
                  data={category_1}
                  keyExtractor={(item, index) => index}
                  renderItem={({item}) => (
                    <ScrollView>
                      <CategoryFlatList
                        onPress={this.selectCategory_1.bind(this, item)}>
                        <CategoryItemList>{item}</CategoryItemList>
                        <SelectCategoryItemButton>
                          선택
                        </SelectCategoryItemButton>
                      </CategoryFlatList>
                    </ScrollView>
                  )}
                />
              )}
              {this.state.type === 2 && (
                <FlatList
                  data={category_2}
                  keyExtractor={(item, index) => index}
                  renderItem={({item}) => (
                    <ScrollView>
                      <CategoryFlatList
                        onPress={this.selectCategory_2.bind(this, item)}>
                        <CategoryItemList>{item}</CategoryItemList>
                        <SelectCategoryItemButton>
                          선택
                        </SelectCategoryItemButton>
                      </CategoryFlatList>
                    </ScrollView>
                  )}
                />
              )}
              {this.state.type === 3 && (
                <FlatList
                  data={category_3}
                  keyExtractor={(item, index) => index}
                  renderItem={({item}) => (
                    <ScrollView>
                      <CategoryFlatList
                        onPress={this.selectCategory_3.bind(this, item)}>
                        <CategoryItemList>{item}</CategoryItemList>
                        <SelectCategoryItemButton>
                          선택
                        </SelectCategoryItemButton>
                      </CategoryFlatList>
                    </ScrollView>
                  )}
                />
              )}
              {this.state.type === 4 && (
                <FlatList
                  data={category_4}
                  keyExtractor={(item, index) => index}
                  renderItem={({item}) => (
                    <ScrollView>
                      <CategoryFlatList
                        onPress={this.selectCategory_4.bind(this, item)}>
                        <CategoryItemList>{item}</CategoryItemList>
                        <SelectCategoryItemButton>
                          선택
                        </SelectCategoryItemButton>
                      </CategoryFlatList>
                    </ScrollView>
                  )}
                />
              )}
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisible: false})}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: `${POINT_COLOR}`,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconAnt color={`${TINT_COLOR}`} name={'down'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
            {/* ))} */}
          </Modal>
        </View>
      </View>
    );
  }
}
