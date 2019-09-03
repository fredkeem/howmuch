// @flow
import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  Animated,
} from 'react-native';

type Props = {
  onPressOutButton: () => void,
};

export default class SelectOptionButton extends Component {
  props: Props;

  constructor(props) {
    super(props);

    this.state = {
      selectStatus: false,
    };
  }

  onPressInButton() {
    this.setState({selectStatus: true});
  }

  onPressOutButton() {
    this.setState({selectStatus: false});
    this.props.onPressOutButton && this.props.onPressOutButton();
  }

  render() {
    const {
      defaultBorderColor,
      selectBorderColor,
      defaultTextColor,
      selectTextColor,
      buttonStyle,
      textStyle,
      text,
      imageStyle,
      selectTintColor,
      defaultTintColor,
      selectBackgroundColor,
      defaultBackgroundColor,
      buttonIcon,
    } = this.props;
    return (
      <View>
        <TouchableWithoutFeedback
          onPressIn={this.onPressInButton.bind(this)}
          onPressOut={this.onPressOutButton.bind(this)}>
          <Animated.View
            style={[
              buttonStyle,
              {
                borderColor: this.state.selectStatus
                  ? selectBorderColor
                  : defaultBorderColor,
                backgroundColor: this.state.selectStatus
                  ? selectBackgroundColor
                  : defaultBackgroundColor,
              },
            ]}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={buttonIcon}
                style={[
                  imageStyle,
                  {
                    tintColor: this.state.selectStatus
                      ? selectTintColor
                      : defaultTintColor,
                  },
                ]}
              />
              <Text
                style={[
                  textStyle,
                  {
                    color: this.state.selectStatus
                      ? selectTextColor
                      : defaultTextColor,
                  },
                ]}>
                {text}
              </Text>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
