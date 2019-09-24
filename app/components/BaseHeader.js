import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components';
import asset from '../config/asset';
import CONST from '../config/const';

type Props = {
  title: ?string,
  titleColor: ?string,
  popTo: ?string,
  showBackBtn: ?boolean,
  closed: ?boolean,
  style: ?StyleSheet,
  leftStyle: ?StyleSheet,
  centerStyle: ?StyleSheet,
  rightStyle: ?StyleSheet,
  LeftComponent: ?View,
  RightComponent: ?View,
  onPressLeft: () => void,
  onPressRight: () => void,
};

const HeadNavigationBox = styled.View`
  height: ${CONST.NAVIGATION_HEIGHT};
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: ${CONST.TOP};
  padding-bottom: 10px;
`;

const HeadNavigationLeft = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: flex-start;
  padding-left: 15px;
  background-color: transparent;
`;

const HeadNavigationLeftTouch = styled.View`
  height: ${CONST.NAVIGATION_HEIGHT - CONST.TOP};
  width: 100px;
  justify-content: center;
  align-items: flex-start;
`;

const HeadNavigationText = styled.Text`
  height: ${CONST.NAVIGATION_HEIGHT - CONST.TOP};
  width: 100px;
  justify-content: center;
  align-items: flex-start;
`;

const HeadNavigationRight = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: flex-end;
  padding-right: 15px;
`;

const HeadNavigationRightTouch = styled.View`
  height: ${CONST.NAVIGATION_HEIGHT - CONST.TOP};
  width: 100px;
  justify-content: center;
  align-items: flex-end;
`;

export default class BaseHeader extends Component {
  props: Props;

  static defaultProps = {
    title: 'HOW MUCH',
    titleColor: 'black',
    popTo: null,
    showBackBtn: true,
    closed: false,
    style: {},
    leftStyle: {},
    centerStyle: {},
    rightStyle: {},
    LeftComponent: null,
    RightComponent: null,
    onPressLeft: null,
    onPressRight: null,
  };

  componentDidMount() {}

  onPressBack() {
    POP(this.props.popTo);
  }

  onPressLeft() {
    this.props.onPressLeft && this.props.onPressLeft();
  }

  onPressRight() {
    this.props.onPressRight && this.props.onPressRight();
  }

  render() {
    return (
      <HeadNavigationBox>
        <HeadNavigationLeft>
          {this.props.showBackBtn && (
            <TouchableOpacity onPress={this.onPressBack.bind(this)}>
              <HeadNavigationLeftTouch>
                <Image
                  source={this.props.closed ? asset.logo : asset.logo}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: this.props.titleColor,
                  }}
                />
              </HeadNavigationLeftTouch>
            </TouchableOpacity>
          )}
          {/* {this.props.LeftComponent && (
            <TouchableOpacity onPress={this.onPressLeft.bind(this)}>
              <View style={style.headNavigationLeftTouch}>
                {this.props.LeftComponent}
              </View>
            </TouchableOpacity>
          )} */}
        </HeadNavigationLeft>
        <HeadNavigationText
          // style={[
          //   style.headNavigationText,
          //   this.props.centerStyle,
          //   {color: this.props.titleColor},
          // ]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {this.props.title.replace('\n', ' ')}
        </HeadNavigationText>
        <HeadNavigationRight>
          {this.props.RightComponent && (
            <TouchableOpacity onPress={this.onPressRight.bind(this)}>
              <HeadNavigationRightTouch>
                {this.props.RightComponent}
              </HeadNavigationRightTouch>
            </TouchableOpacity>
          )}
        </HeadNavigationRight>
      </HeadNavigationBox>
    );
  }
}
