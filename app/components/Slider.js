import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';
import Slider from 'react-native-slider';
import {TINT_COLOR, POINT_COLOR} from '../config/colors';

const Container = styled.View`
  width: 100%;
  justify-content: center;
`;

const WhiteText = styled.Text`
  color: ${TINT_COLOR};
  font-family: 'SpoqaHanSans-Regular';
  font-size: 16px;
`;

const PointText = styled.Text`
  color: ${POINT_COLOR};
  font-size: 16px;
`;

export default class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Initial Value of slider
      sliderValue: 40,
    };
  }

  render() {
    return (
      <Container>
        <Slider
          maximumValue={100}
          maximumTrackTintColor={`${TINT_COLOR}`}
          minimumValue={0}
          minimumTrackTintColor={`${POINT_COLOR}`}
          thumbTintColor={`${POINT_COLOR}`}
          trackStyle={{
            height: 2,
            shadowOffset: {width: 1, height: 3},
            shadowColor: 'black',
            shadowOpacity: 2.0,
          }}
          thumbStyle={{width: 14, height: 14}}
          style={{height: 20}}
          step={1}
          value={this.state.sliderValue}
          onValueChange={sliderValue => this.setState({sliderValue})}
          disabled
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <PointText>40 %</PointText>
          <WhiteText>asd</WhiteText>
        </View>
      </Container>
    );
  }
}
