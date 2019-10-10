import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ViewPagerAndroid,
  TouchableOpacity,
  Image,
} from 'react-native';
import styled from 'styled-components';
import Camera from '../containers/Camera';
import _ from 'lodash';
import {connect} from 'react-redux';
import asset from '../config/asset';
import {savePhoto} from '../redux/main.action';
import {Actions} from 'react-native-router-flux';

const CategoriesContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const CategoriesItem = styled.View`
  width: 100%;
  height: ${height / 4};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ImageSection = styled.View`
  width: 70px;
  height: 70px;
  background-color: red;
  border-radius: 70px;
  margin-bottom: 10px;
`;

// const CategoriesItems = ({resource, action, props}) => {
//   const firstPhoto = props.props.props.productRegistration.path;
//   console.log(firstPhoto);
//   return (
//     <CategoriesItem>
//       <TouchableOpacity
//         style={{justifyContent: 'center', alignItems: 'center'}}
//         onPress={action}>
//         {_.isNil(firstPhoto) ? (
//           <ImageSection />
//         ) : (
//           <Image
//             source={{uri: firstPhoto}}
//             style={{width: 50, height: 50, backgroundColor: 'transparent'}}
//           />
//         )}
//         <Text>{resource.title}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={action}
//         style={{justifyContent: 'center', alignItems: 'center'}}>
//         {_.isNil(firstPhoto) ? (
//           <ImageSection />
//         ) : (
//           <Image
//             source={{uri: firstPhoto}}
//             style={{width: 50, height: 50, backgroundColor: 'transparent'}}
//           />
//         )}
//         <Text>{resource.title}</Text>
//       </TouchableOpacity>
//       {/* <Camera /> */}
//     </CategoriesItem>
//   );
// };

// const _renderCategoriesItem = props => {
//   return (
//     <CategoriesItems
//       props={props}
//       action={GOF('camera')}
//       // action={() => <Camera />}
//       resource={{
//         title: 'asd',
//       }}
//     />
//   );
// };

// const CategoriesComponent = props => {
//   return (
//     <CategoriesContainer>
//       <_renderCategoriesItem props={props} />
//     </CategoriesContainer>
//   );
// };

@connect(state => ({
  productRegistration: state.productRegistration,
}))
export default class CategoriesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.productRegistration.path,
    };
  }

  // componentDidMount = async () => {
  //   try {
  //     await DISPATCH(savePhoto());
  //     // console.log(savePhoto());
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  componentDidMount() {
    console.log(this.props);
    alert(1);
  }

  render() {
    const path = this.props.productRegistration.path;
    return (
      <View>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => GO('camera')}>
          {path === null ? (
            <Image
              source={asset.home}
              style={{width: 50, height: 50, backgroundColor: 'red'}}
            />
          ) : (
            <Image
              source={{uri: path}}
              style={{
                width: 100,
                height: 100,
                backgroundColor: 'transparent',
                borderRadius: 50,
              }}
            />
          )}
          {/* <Text>{resource.title}</Text> */}
        </TouchableOpacity>
      </View>
    );
  }
}

// export default CategoriesComponent;
