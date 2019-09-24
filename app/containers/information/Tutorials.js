// @flow
import React from 'react';
import {View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Base from '../Base';
import BaseHeader from '../../components/BaseHeader';
// import styles from '../../styles/informations/tutorial';
import asset from '../../config/asset';
import styled from 'styled-components';
import {TINT_COLOR} from '../../config/colors';

const SECTIONS = {
  home: [
    {
      subtitle:
        '1. 손목 시계는 인덱스의 프린트 상태 \n2. 오토매틱일 경우 디스플레이백 상태 \n3. 시계 외형 손상 정도 \n4. 검증 가능한 시리얼 번호',
      title: '손목 시계 촬영 가이드',
      background: asset.icon.watch,
    },
    {
      subtitle:
        '1. 박스 보존 상태 \n2. 보증서 보유 \n3. 구입 당시의 영수증 \n4. A/S 기간',
      title: '손목 시계 촬영 가이드',
      background: asset.icon.watch,
    },
  ],
  activity: [
    {
      subtitle: '나의 활동 내역을 체크해보는 것은\n언제나 성공의 지름길!',
      title: '내 활동 내역을 체크해봐요',
      background: asset.home,
    },
    {
      subtitle:
        '더챌린지에서는 여러가지의\n디바이스를 사용할 수 있어요.\n\n그 중에서 그 날 제일 많이 걸은 디바이스' +
        '\n기준으로 그 날 걸음 수가 책정됩니다!\n\n여러 디바이스 등록하면 웨어러블 디바이스를\n놓고와도 문제 없죠!',
      title: '상세보기를 눌러보세요',
      background: asset.home,
    },
    {
      subtitle: '그래프를 클릭하면 해당 날짜에\n걸었던 걸음 수가 표시 됩니다.',
      title: '내가 얼마나 걸었더라..?',
      background: asset.home,
    },
  ],
  ranking: [
    {
      subtitle: '내 순위와 날짜에 따른 전체 랭킹을 체크해보세요',
      title: '나는 몇등일까?',
      background: asset.home,
    },
    {
      subtitle:
        '타 유저의 섬네일을 클릭하면\n그들의 정보를 볼 수 있어요\n\n그들의 평균 걸음 수를 계산해서\n더 앞설 수 있게 노력해봐요!',
      title: '다른 유저들은?',
      background: asset.home,
    },
  ],
  new: [
    {
      subtitle:
        '소지하고 계신 포인트를 사용하여\n챌린지에 참여하세요.' +
        '\n\n포인트 챌린지는 모두 미션형입니다.\n\n미션에 성공하시면 챌린지에 따라 포인트를\n최대 5배까지 보상을 받으실 수 있습니다.',
      title: '새로운 타입의 포인트 챌린지 추가!',
      background: asset.home,
    },
    {
      subtitle:
        '매 주 새로운 챌린지가 탭 상단에\n슬라이드 형식으로 생성됩니다.\n\n참여하신 챌린지는 홈탭에서 확인 가능합니다.',
      title: '기존의 스폰서 챌린지는 상단으로 이동!',
      background: asset.home,
    },
    {
      subtitle:
        '나와의 싸움인 미션형 그리고\n많은 사람들과의 싸움인 경쟁형이 있습니다.',
      title: '챌린지에는 종류가 있습니다',
      background: asset.home,
    },
    {
      subtitle:
        '클릭해서 들어가면 더 디테일한\n정보를 볼 수 있습니다.\n\n세부 룰을 꼭 확인해주세요!',
      title: '참여할지 결정해봐요!',
      background: asset.home,
    },
    {
      subtitle:
        '지속적인 걸음과 앱과의 연동만이\n상위권 진출을 위한 방법입니다!\n\n데이터 연동 후 순위에 적용되는데에는\n10분정도 소요됩니다.',
      title: '경쟁에서 상위권을 노려보세요!',
      background: asset.home,
    },
    {
      subtitle:
        '지속적인 걸음과 앱과의 연동만이\n상위권 진출을 위한 방법입니다!\n\n데이터 연동 후 순위에 적용되는데에는\n10분정도 소요됩니다.',
      title: '미션은 나와의 싸움!',
      background: asset.home,
    },
    {
      subtitle:
        '다른 유저의 상태가 궁금하다면\n참여자 페이지로 가세요.\n\n상위권이 평소에 얼마나 걷는지\n체크하는것도 지름길!',
      title: '다른 사람들의 상태는?',
      background: asset.home,
    },
    {
      subtitle:
        '게임 결과 페이지에서 결과 발표가 난 방에는\n내가 성공을 했는지 안했는지 알 수 있습니다.\n\n실패하더라도 걱정마세요!\n\n다음 기회는 언제든지 찾아옵니다!',
      title: '보상 성공이냐 실패냐!',
      background: asset.home,
    },
  ],
};

type Props = {
  tutorialType: string,
};

const Container = styled.View`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
`;
const Slide = styled.View`
  justify-content: center;
  align-items: center;
  width: ${width};
  height: ${height / 1.5};
`;

const SlideUpper = styled.View`
  padding-top: 10px;
  overflow: hidden;
  flex: 1;
  background-color: #e4e4e4;
  justify-content: center;
  width: ${width};
  align-items: center;
`;

const SlideInner = styled.View`
  flex: 1;
  width: ${width}
  justify-content: flex-start;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
`;

export default class TutorialHome extends Base {
  props: Props;

  static defaultProps = {
    tutorialType: 'home',
  };

  constructor(props) {
    super(props);

    this.animations = [];
    this.animations2 = [];
    this.state = {
      activeSlide: 0,
    };
  }

  componentDidMount() {
    this.setStatusBlack();
  }

  onPressBack() {
    POP();
  }

  get pagination() {
    const {activeSlide} = this.state;
    const entries = SECTIONS[this.props.tutorialType];
    LOG('pagination', entries, activeSlide);
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  renderItem = ({item, index}) => {
    if (!item) return null;
    return (
      <Slide key={index}>
        {/*슬라이드*/}
        <SlideUpper>
          <Image
            style={{width: 40, height: 40}}
            resizeMode="contain"
            source={item.background}
          />
        </SlideUpper>
        {/*슬라이드 속 텍스트 및 버튼*/}
        <SlideInner>
          <Animatable.Text
            style={{
              fontSize: 20,
              color: 'black',
              textAlign: 'left',
              paddingTop: 5,
              paddingBottom: 30,
              backgroundColor: 'transparent',
              fontWeight: 'bold',
            }}
            animation="fadeInUp"
            ref={ref => (this.animations[index] = ref)}>
            {item.title}
          </Animatable.Text>
          <Animatable.Text
            style={{
              fontSize: 12,
              color: 'black',
              textAlign: 'left',
              backgroundColor: 'transparent',
              fontFamily: 'SpoqaHanSans-Regular',
              lineHeight: 25,
            }}
            animation="fadeInUp"
            ref={ref => (this.animations2[index] = ref)}>
            {item.subtitle}
          </Animatable.Text>
        </SlideInner>
        {/*슬라이드 속 텍스트 및 버튼*/}
        {/*//슬라이드*/}
      </Slide>
    );
  };

  render() {
    return (
      <View style={{position: 'relative'}}>
        <Container>
          <BaseHeader
            title={'홈 사용 설명'}
            closed
            style={{backgroundColor: '#E4E4E4'}}
          />
          {/*Navigation*/}
          <Carousel
            data={SECTIONS[this.props.tutorialType]}
            renderItem={this.renderItem}
            sliderWidth={width}
            itemWidth={width}
            itemHeight={height}
            inactiveSlideScale={1}
            // enableMomentum={false}
            // lockScrollWhileSnapping={true}
            firstItem={0}
            onBeforeSnapToItem={index => {
              this.animations[index] && this.animations[index].fadeInUp();
              this.animations2[index] && this.animations2[index].fadeInUp();
            }}
            onSnapToItem={index => this.setState({activeSlide: index})}
          />
          {this.pagination}
        </Container>
      </View>
    );
  }
}
