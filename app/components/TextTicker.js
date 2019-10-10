import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import {object} from '../api';
import numeral from 'numeral';
import styled from 'styled-components';
import {POINT_COLOR, GREY_COLOR} from '../config/colors';

const TickerContainer = styled.View`
  flex: 1;
  padding-vertical: 10;
  justify-content: center;
  align-items: center;
  background-color: ${GREY_COLOR};
`;

export default class TextTickerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchObject: null,
    };
  }

  async componentDidMount() {
    const iPad = '아이패드';
    const iPhone = '아이폰XS';
    try {
      const {
        data: {items: searchObject},
      } = await object.showSearch(iPhone);
      this.setState({
        searchObject,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        searchObject,
        loading: false,
      });
    }

    this.setStatusWhite();
  }

  articleRender = () => {
    const {searchObject} = this.state;
    return (
      <>
        {searchObject && searchObject.length > 0 && (
          <Text style={{flexDirection: 'row'}}>
            {searchObject.map((item, index) => (
              <Text key={index} style={{fontSize: 12}}>
                iPhone Xs
                {numeral(item.lprice).format('0, 0')}원{' '}
                {numeral(item.hprice).format('0,0')}원
              </Text>
            ))}
          </Text>
        )}
      </>
    );
  };

  render() {
    return (
      <TickerContainer>
        <TextTicker
          duration={15000}
          loop
          bounce
          repeatSpacer={0}
          marqueeDelay={1000}>
          {this.articleRender()}
          {this.articleRender()}
          {this.articleRender()}
        </TextTicker>
      </TickerContainer>
    );
  }
}
