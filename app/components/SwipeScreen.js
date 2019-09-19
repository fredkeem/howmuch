import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TINT_COLOR, BG_COLOR, POINT_COLOR} from '../config/colors';
import Swiper from 'react-native-swiper';
import styled from 'styled-components';
import layout from '../config/layout';
import Slider from './Slider';

import numeral from 'numeral';

const WhiteText = styled.Text`
  color: ${TINT_COLOR};
  font-family: 'SpoqaHanSans-Regular';
  font-size: 16px;
`;

const PointText = styled.Text`
  color: ${POINT_COLOR};
  font-family: 'SpoqaHanSans-Bold';
  letter-spacing: 2;
  font-size: 30px;
`;

const SWIPER_HEIGHT = layout.height / 3;

const SwiperComponent = () => {
  const amount = numeral(18000000).format('0,0');

  return (
    <Swiper
      style={{height: SWIPER_HEIGHT}}
      showsButtons={false}
      autoplay={true}
      autoplayTimeout={3}
      dotColor={`${TINT_COLOR}`}
      activeDotColor={`${TINT_COLOR}`}
      activeDotStyle={{width: 30}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <WhiteText>2019. 09. 18</WhiteText>
        <WhiteText>대출 가능한 금액</WhiteText>
        <View style={{marginVertical: 20}}>
          {/* <Text>asd</Text> */}
          <PointText>{amount} 원</PointText>
        </View>
        <Slider />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <WhiteText>2019. 09. 18</WhiteText>
        <WhiteText>대출 가능한 금액</WhiteText>
        <View style={{marginVertical: 20}}>
          {/* <Text>asd</Text> */}
          <PointText>{amount} 원</PointText>
        </View>
        <Slider />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <WhiteText>2019. 09. 18</WhiteText>
        <WhiteText>대출 가능한 금액</WhiteText>
        <View style={{marginVertical: 20}}>
          {/* <Text>asd</Text> */}
          <PointText>{amount} 원</PointText>
        </View>
        <Slider />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <WhiteText>2019. 09. 18</WhiteText>
        <WhiteText>대출 가능한 금액</WhiteText>
        <View style={{marginVertical: 20}}>
          {/* <Text>asd</Text> */}
          <PointText>{amount} 원</PointText>
        </View>
        <Slider />
      </View>
    </Swiper>
  );
  // }
};

export default SwiperComponent;

// export default class SwiperComponent extends Component {
//   constructor(props) {
//     super(props);
//   }

//   state = {
//     amount: 180000000,
//   };

//   render() {
//     const amount = numeral(this.state.amount).format('0,0');
//     console.log(amount);

//     return (
//       <Swiper
//         style={{height: SWIPER_HEIGHT}}
//         showsButtons={false}
//         autoplay={true}
//         autoplayTimeout={3}
//         dotColor={`${TINT_COLOR}`}
//         activeDotColor={`${TINT_COLOR}`}
//         activeDotStyle={{width: 30}}>
//         <View style={{justifyContent: 'center', alignItems: 'center'}}>
//           <WhiteText>2019. 09. 18</WhiteText>
//           <WhiteText>대출 가능한 금액</WhiteText>
//           <View style={{marginVertical: 20}}>
//             <PointText>{amount} 원</PointText>
//           </View>
//           <Slider />
//         </View>
//         <View style={{justifyContent: 'center', alignItems: 'center'}}>
//           <WhiteText>2019. 09. 18</WhiteText>
//           <WhiteText>대출 가능한 금액</WhiteText>
//           <View style={{marginVertical: 20}}>
//             <PointText>{amount} 원</PointText>
//           </View>
//           <Slider />
//         </View>
//         <View style={{justifyContent: 'center', alignItems: 'center'}}>
//           <WhiteText>2019. 09. 18</WhiteText>
//           <WhiteText>대출 가능한 금액</WhiteText>
//           <View style={{marginVertical: 20}}>
//             <PointText>{amount} 원</PointText>
//           </View>
//           <Slider />
//         </View>
//         <View style={{justifyContent: 'center', alignItems: 'center'}}>
//           <WhiteText>2019. 09. 18</WhiteText>
//           <WhiteText>대출 가능한 금액</WhiteText>
//           <View style={{marginVertical: 20}}>
//             <PointText>{amount} 원</PointText>
//           </View>
//           <Slider />
//         </View>
//       </Swiper>
//     );
//   }
// }
