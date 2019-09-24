import React, {Component} from 'react';

import {View, Text, Image, BackHandler, TouchableOpacity} from 'react-native';
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
import Home from './main/Home';
import Blue from './main/Blue';
import Camera from './main/Camera';
import Green from './main/Green';
import Profile from './main/Profile';
import Register from '../components/Register';
import PhoneLogin from './main/signin/PhoneLogin';
import EmailLogin from './main/signin/EmailLogin';
import Start from '../containers/main/starts/Start';
import asset from '../config/asset';
import ProductRegistration from './ProductRegistration';
import Tutorial from './information/Tutorials';

class TabIcon extends Component {
  props: {
    focused: boolean,
    name: boolean,
    title: string,
  };

  render() {
    const images = {
      home: asset.home,
      blue: asset.logo,
      camera: asset.logo,
      green: asset.logo,
      profile: asset.my_page,
    };

    const color = this.props.focused ? '#1E2746' : '#efefefff';
    // console.log(this.props);
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={images[this.props.name]}
          style={{marginTop: 5, width: 40, height: 25, tintColor: color}}
          resizeMode="contain"
        />
        {this.props.focused && (
          <Text style={{color, fontSize: 10, fontWeight: 'bold'}}>
            {this.props.title}
          </Text>
        )}
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
    if (Actions.currentScene !== 'home') {
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
      <Router
        getSceneStyle={getSceneStyle}
        createReducer={this.reducerCreate.bind(this)}
        backAndroidHandler={this.backHandler.bind(this)}>
        <Overlay>
          <Modal hideNavBar>
            <Lightbox>
              <Stack key="root" hideNavBar>
                <Scene key={'start'} component={Start} initial />
                <Scene key={'phoneLogin'} component={PhoneLogin} />
                <Scene key={'emailLogin'} component={EmailLogin} />
                <Scene key={'register'} component={Register} />
                <Scene
                  key={'productRegistration'}
                  component={ProductRegistration}
                />
                <Scene key={'tutorial'} component={Tutorial} />
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
                    name="home"
                    key="home"
                    component={Home}
                    icon={TabIcon}
                    hideNavBar
                    title="Home"
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
                    name="camera"
                    key="camera"
                    component={Camera}
                    icon={TabIcon}
                    hideNavBar
                    title="Camera"
                  />
                  <Scene
                    name="green"
                    key="green"
                    component={Green}
                    icon={TabIcon}
                    hideNavBar
                    title="Green"
                  />
                  <Scene
                    name="profile"
                    key="profile"
                    component={Profile}
                    icon={TabIcon}
                    hideNavBar
                    title="Profile"
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
