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
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const HeadNavigationLeft = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: flex-start;
  padding-left: 15px;
  background-color: transparent;
`;

const HeadNavigationLeftTouch = styled.View`
  width: 50px;
  justify-content: center;
  align-items: flex-start;
`;

const HeadNavigationText = styled.Text`
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
  width: 50px;
  justify-content: center;
  align-items: flex-end;
`;

// height : ${CONST.NAVIGATION_HEIGHT + CONST.TOP};

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
    centerStyle: {fontFamily: 'SpoqaHanSans-bold'},
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
      <HeadNavigationBox style={this.props.style}>
        <HeadNavigationLeft style={this.props.leftStyle}>
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
          {this.props.LeftComponent && (
            <TouchableOpacity onPress={this.onPressLeft.bind(this)}>
              <HeadNavigationLeftTouch>
                {this.props.LeftComponent}
              </HeadNavigationLeftTouch>
            </TouchableOpacity>
          )}
        </HeadNavigationLeft>
        <HeadNavigationText
          style={
            (this.props.centerStyle,
            {
              color: this.props.titleColor,
              fontFamily: 'SpoqaHanSans-bold',
              fontSize: 16,
            })
          }
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
