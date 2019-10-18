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
import Product from './main/Product';
import Profile from './main/Profile';
import Register from '../components/Register';
import PhoneLogin from './main/signin/PhoneLogin';
import EmailLogin from './main/signin/EmailLogin';
import Start from '../containers/main/starts/Start';
import asset from '../config/asset';
import ProductRegistration from './ProductRegistration';
import Tutorial from './information/Tutorials';
import CameraScreen from './product/CameraScreen';
import PictureSaveScreen from './product/PictureSaveScreen';
import ProductDetailOption from './product/ProductDetailOption';
import ProductLoanStatusFirst from './loanStatus/ProductLoanStatusFirst';

import Icon from 'react-native-vector-icons/FontAwesome';
import {POINT_COLOR, TINT_COLOR} from '../config/colors';
import IconAnt from 'react-native-vector-icons/AntDesign';

class TabIcon extends Component {
  props: {
    focused: boolean,
    name: boolean,
    title: string,
  };

  render() {
    const images = {
      home: asset.home,
      // blue: asset.logo,
      product: asset.logo,
      // green: asset.logo,
      profile: asset.my_page,
    };

    const color = this.props.focused ? '#1E2746' : '#efefefff';
    // console.log(this.props);
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {images[this.props.name] === images.product ? (
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              backgroundColor: `${POINT_COLOR}`,
              shadowRadius: 2,
              shadowOpacity: 0.2,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              flexDirection: 'row',
              paddingTop: 2,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              // top: -55,
            }}>
            <IconAnt name={'pluscircleo'} size={20} color={`${TINT_COLOR}`} />
          </View>
        ) : (
          <Image
            source={images[this.props.name]}
            style={{marginTop: 5, width: 40, height: 25, tintColor: color}}
            resizeMode="contain"
          />
        )}
        {this.props.focused && (
          <Text style={{color, fontSize: 10, fontWeight: 'bold'}}>
            {images[this.props.name] === images.product ? (
              <Text />
            ) : (
              this.props.name
            )}
          </Text>
        )}
      </View>
    );
  }
}

export default class AppRouter extends Component {
  props: Props;
  state: State;

  componentDidMount() {
    // console.log(this.props);
  }

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
                <Scene
                  key={'productDetailOption'}
                  component={ProductDetailOption}
                />
                <Scene
                  key={'pictureSaveScreen'}
                  component={PictureSaveScreen}
                />
                <Scene key={'cameraScreen'} component={CameraScreen} />
                <Scene
                  key={'productLoanStatusFirst'}
                  component={ProductLoanStatusFirst}
                />
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
                    borderTopWidth: 0.5,
                    borderColor: '#c3c3c3',
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
                    name="product"
                    key="product"
                    component={Product}
                    icon={TabIcon}
                    hideNavBar={true}
                    title="Product"
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
