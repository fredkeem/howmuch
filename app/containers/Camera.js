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
import asset from '../config/asset';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CameraScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: RNCamera.Constants.Type.back,
      flashMode: RNCamera.Constants.FlashMode.off,
      path: null,
    };
  }
  componentDidMount() {
    console.log(this.state);
  }

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
        this.setState({path: uri});
        console.log('Path to image: ' + uri);
      }
      // this.props.updateImage(data.uri);
    } catch (err) {
      console.log('err: ', err);
    }
  };

  renderCamera() {
    const {type, flashMode} = this.state;
    return (
      <View style={styles.container}>
        <View
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
        </View>
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
            console.log(barcodes);
          }}
          capture={false}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Image
              style={{width: 30, height: 30}}
              resizeMode="contain"
              source={asset.logo}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderImage() {
    const {path} = this.state;
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
        <Image
          source={{uri: path}}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            backgroundColor: 'transparent',
          }}
        />
        <Text
          style={{color: 'red'}}
          onPress={() => this.setState({path: null})}>
          Cancel
        </Text>
        <Text
          style={{color: 'red'}}
          onPress={() => this.setState({path: null})}>
          Save
        </Text>
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

  render() {
    const {type, flashMode} = this.state;
    // const IOS = Platform.OS === 'ios'
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
        }}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: 20,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
