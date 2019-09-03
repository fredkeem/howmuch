import React, {Component} from 'react';

import {View, Text, Image, BackHandler} from 'react-native';
import {
  Scene,
  Router,
  Reducer,
  Overlay,
  Tabs,
  Modal,
  Stack,
  Lightbox,
  Actions,
} from 'react-native-router-flux';
import Black from './main/Black';
import Blue from './main/Blue';
import Yellow from './main/Yellow';
import Green from './main/Green';
import Register from '../components/Register';
import PhoneLogin from '../components/signin/PhoneLogin';
import EmailLogin from '../components/signin/EmailLogin';
import Start from '../containers/main/starts/Start';
import asset from '../config/asset';

class TabIcon extends Component {
  props: {
    focused: boolean,
    name: boolean,
    title: string,
  };

  render() {
    const images = {
      black: asset.logo,
      blue: asset.logo,
      yellow: asset.logo,
      green: asset.logo,
    };

    const color = this.props.focused ? '#47ffd3ff' : '#efefefff';
    console.log(this.props);
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={images[this.props.name]}
          style={{marginTop: 10, width: 27, height: 20, tintColor: color}}
          resizeMode="contain"
        />
        <Text style={{marginTop: 5, color, fontSize: 10, fontWeight: 'bold'}}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export default class AppRouter extends Component {
  props: Props;
  state: State;

  componentDidMount() {}

  reducerCreate(params) {
    const routerReducer = new Reducer(params);
    return (state, action) => {
      DISPATCH(action);
      return routerReducer(state, action);
    };
  }

  backHandler() {
    if (Actions.currentScene !== 'black') {
      POP();
    } else {
      ALERT2('앱을 종료 하시겠습니까?', () => {
        BackHandler.exitApp();
      });
    }
    return true;
  }

  render() {
    const getSceneStyle = () => ({
      backgroundColor: 'white',
      shadowOpacity: 1,
      shadowRadius: 3,
    });

    return (
      <Router getSceneStyle={getSceneStyle}>
        <Overlay>
          <Modal hideNavBar>
            <Lightbox>
              <Stack key="root" hideNavBar>
                <Scene key={'start'} component={Start} />
                <Scene key={'phoneLogin'} component={PhoneLogin} />
                <Scene key={'emailLogin'} component={EmailLogin} />
                <Scene key={'register'} component={Register} />
                <Tabs
                  key="tabsContainer"
                  showLabel={false}
                  tabBarPosition="bottom"
                  title={'main'}
                  wrap={false}
                  back
                  lazy={true}
                  showLabel={false}
                  panHandlers={null}
                  tabBarStyle={{
                    backgroundColor: 'white',
                    height: 60,
                    borderTopWidth: 1,
                    borderColor: '#CECECE',
                  }}>
                  <Scene
                    name="black"
                    key="black"
                    component={Black}
                    icon={TabIcon}
                    hideNavBar
                    title="Black"
                  />
                  <Scene
                    name="blue"
                    key="blue"
                    component={Blue}
                    icon={TabIcon}
                    hideNavBar
                    title="Blue"
                  />
                  <Scene
                    name="yellow"
                    key="yellow"
                    component={Yellow}
                    icon={TabIcon}
                    hideNavBar
                    title="yellow"
                  />
                  <Scene
                    name="green"
                    key="green"
                    component={Green}
                    icon={TabIcon}
                    hideNavBar
                    title="Green"
                  />
                </Tabs>
              </Stack>
            </Lightbox>
          </Modal>
        </Overlay>
      </Router>
    );
  }
}
