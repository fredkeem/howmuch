import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  CameraRoll,
  Platform,
  ToastAndroid,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import asset from '../../config/asset';
import Icon from 'react-native-vector-icons/Ionicons';

import reducer from '../../redux/reducer';
import {connect} from 'react-redux';
import Action from '../../redux/actions';
import {Actions} from 'react-native-router-flux';
import {POINT_COLOR, TINT_COLOR} from '../../config/colors';

@connect(state => ({
  productRegistration: state.productRegistration,
}))
export default class CameraScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: RNCamera.Constants.Type.back,
      flashMode: RNCamera.Constants.FlashMode.off,
      path: props.productRegistration.path,
    };
  }
  componentDidMount() {}

  takePicture = async () => {
    try {
      if (this.camera) {
        const options = {
          quality: 0.5,
          base64: true,
          forceUpOrientation: true,
          fixOrientation: true,
        };

        const {uri} = await this.camera.takePictureAsync(options);
        console.log('Path to image: ' + uri);
        // this.setState({path: uri});
        // await DISPATCH({type: Action.SAVE_PHOTO, key: 'main1', payload: uri});
        await DISPATCH({type: Action.SAVE_PHOTO, payload: uri});
        console.log(this.props);
      }
      // console.log(this.props);
      // this.props.updateImage(data.uri);
    } catch (err) {
      console.log('err: ', err);
    } finally {
    }
  };

  renderCamera() {
    const {type, flashMode} = this.state;
    return (
      <View style={styles.container}>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 20,
          }}>
          <TouchableOpacity onPress={this.flashType}>
            <Icon
              name={
                flashMode === RNCamera.Constants.FlashMode.torch
                  ? IOS
                    ? 'ios-flash'
                    : 'md-flash'
                  : IOS
                  ? 'ios-flash-off'
                  : 'md-flash-off'
              }
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.flipCamera}>
            <Icon
              name={IOS ? 'ios-refresh' : 'md-refresh'}
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View> */}
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={this.state.type}
          flashMode={this.state.flashMode}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            // console.log(barcodes);
          }}
          capture={false}>
          <View
            style={{
              // flex: 0,
              width: width,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.6)',
            }}>
            <TouchableOpacity style={styles.capture1} onPress={this.flashType}>
              <Icon
                name={
                  flashMode === RNCamera.Constants.FlashMode.torch
                    ? IOS
                      ? 'ios-flash'
                      : 'md-flash'
                    : IOS
                    ? 'ios-flash-off'
                    : 'md-flash-off'
                }
                size={25}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.capture}>
              <Icon
                name={IOS ? 'ios-camera' : 'md-camera'}
                size={45}
                color={`${POINT_COLOR}`}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => POP()} style={styles.capture1}>
              <Icon
                name={IOS ? 'ios-close' : 'md-close'}
                size={25}
                color={`${TINT_COLOR}`}
              />
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    );
  }

  renderImage() {
    const path = this.props.productRegistration.path;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          backgroundColor: 'transparent',
        }}>
        <ImageBackground
          source={{uri: path}}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: height,
            width: width,
            backgroundColor: 'transparent',
          }}>
          <View
            style={{
              width: width,
              backgroundColor: 'rgba(0,0,0,0.6)',
              paddingTop: 20,
              paddingBottom: 30,
              paddingHorizontal: 30,
            }}>
            <Text style={{color: 'white'}}>상품을 업로드 하시겠습니까?</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 66,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'SpoqaHanSans-Bold',
                  backgroundColor: `${POINT_COLOR}`,
                  paddingVertical: 15,
                  paddingHorizontal: 50,
                  borderRadius: 5,
                }}
                onPress={this.cancelPhoto}>
                재촬영
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'SpoqaHanSans-Bold',
                  backgroundColor: `${POINT_COLOR}`,
                  paddingVertical: 15,
                  paddingHorizontal: 50,
                  borderRadius: 5,
                }}
                onPress={this.savePhoto}>
                업로드
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  flipCamera = () => {
    this.setState({
      type:
        this.state.type === RNCamera.Constants.Type.back
          ? RNCamera.Constants.Type.front
          : RNCamera.Constants.Type.back,
    });
  };

  flashType = () => {
    this.setState({
      flashMode:
        this.state.flashMode === RNCamera.Constants.FlashMode.off
          ? RNCamera.Constants.FlashMode.torch
          : RNCamera.Constants.FlashMode.off,
    });
  };

  savePhoto = () => {
    // this.props.productRegistration.path = this.state.path;
    // this.state.path
    // this.setState({})
    // await DISPATCH({type: Action.SAVE_PHOTO, payload: uri});
    console.log(this.props, 'save');
    POP();
  };

  cancelPhoto = async () => {
    await DISPATCH({type: Action.SAVE_PHOTO, payload: null});
    // this.props.productRegistration.path = null;
    console.log(this.props, 'cancel');
  };

  render() {
    const {type, flashMode} = this.state;
    const path = this.props.productRegistration.path;
    // const IOS = Platform.OS === 'ios'
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'tranparent',
        }}>
        {path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: width,
    height: height,
    flexDirection: 'column',
    // backgroundColor: 'black',
    // padding: 20,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    width: 94,
    height: 94,
    borderWidth: 3,
    borderRadius: 94,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: `${POINT_COLOR}`,
    marginVertical: 30,
  },
  capture1: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: `${TINT_COLOR}`,
  },
});
