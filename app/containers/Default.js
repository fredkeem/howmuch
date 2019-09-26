// @flow
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';

type Props = {};

type State = {};

class Howmuch extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      before: 0,
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false} />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const bindAction = dispatch => ({});

export default connect(
  mapStateToProps,
  bindAction,
)(Howmuch);
