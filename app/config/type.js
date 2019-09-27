// @flow
import {SERVICE_TYPE} from '../config/const';

export type ErrorType = {
  response: {
    data: {
      code: number,
      message: string,
    },
  },
};

export type Error = {
  code: number, // 에러 코드
  message: string, // 에러 메세지
};

export type ActionType = {
  type: string,
  payload: ?Object,
  error: ?string,
  errorCode: ?string,
  key: string,
};

export type Group = {
  id: number,
  email: string,
  logo: string,
};

export type Product = {
  path: string,
};

export type ServiceTypes =
  | SERVICE_TYPE.ZIKTO
  | SERVICE_TYPE.FITBIT
  | SERVICE_TYPE.APPLE_WATCH
  | SERVICE_TYPE.IPHONE
  | SERVICE_TYPE.ANDROID
  | SERVICE_TYPE.SAMSUNG_HEALTH;

export type Service = {
  syncDate: string,
  serviceType: ServiceTypes,
  userId: number,
  serviceId: number,
  token: string,
  expireDate: string,
};

export type User = {
  id: number,
  email: string,
  name: string,
  phoneNumber: string,
  birth: string,
  gender: number,
  gchNumber: ?string,
  accessToken: ?string,
  refreshToken: ?string,
  mallCookieName: ?string,
  mallCookie: ?string,
  group?: Group, // 그룹 정보는 group 이메일로 가입한 사람만 있음
  services: Array<Service>,
  push: boolean, // 푸쉬 수신 여부
  createdAt: ?string,
  activity: ActivityType, // 다른 유저정보,
  imgUrl: string, // 이미지
  age: number, // 다른 유저정보 연령대,
  lastReward: string, // 다른 유저정보 마지막 보상,
  rewardTotalCount: number, // 다른 유저정보 보상받은 횟수,
  phoneAuth: boolean, // 전화번호 실명 인증을 한 사람인지 아닌지,
};

export type ActivityType = {
  userId: number,
  serviceId: number,
  date: string,
  steps: number,
  totalSteps?: number, // 전체 보수
  averageSteps?: number, // 평균 보수
  userInfo: User,
};

export type ActivityWeeklyData = {
  duration: string,
  activities: Array<ActivityType>,
};

export type Game = {
  id: number,
  title: string,
  type: 0 | 1, // 0(미션형), 1(경쟁형)
  typeText: string, // 미션형, 경쟁형
  typeDesc: string, // 미션 경쟁 설명 텍스트
  sponsor: boolean,
  listImage: string,
  listReward: string,
  backImage: string,
  mainImage: string,
  ingameImage: string,
  rewardImage: string,
  rewardImages: string, // 경쟁형에 리워드 이미지가 다를경우
  rewardDesc: string,
  ruleDesc: string,
  etcDesc: string,
  startDate: string,
  startDateFormat: string,
  endDate: string,
  endDateFormat: string,
  pedo: number, // 해당 보수를 넘어야 미션 성공
  missDate: number, // 미션 실패 가능횟수
  rank: number, // 몇등 까지 상품을 줄지
  maxUser: number, // 최대 입장 가능한 유저수
  ruleUrl: string, // 룰 설명 주소
  rewardUrl: ?string, // 보상 주소
  rewardReceiveUrl: ?string, // 보상 수령 주소
  shareUrl: ?string, // 공유 하기 주소
  userCount: number, // 참여 인원
  userCountText: string, // 참여인원 설명
  status: 0 | 1 | 2, // 게임상태 0(준비중) 1(진행중) 2(종료)
  todaySuccessPercent: number, // 미션형 오늘 성공한 유저들 퍼센트
  rewardLeftTime: string, // 게임종료 남은 시간
  leftDay: number, // 남은 날짜
  requiredSuccessCount: number, // 성공해야 하는 횟수
  info: string,
  count: number,
  me: {
    rank: number,
    status: string,
    allStep: number,
    allStepText: string,
    rank: number,
    rankStatus: string,
    remainStatus: string, // 얼마 남았는지 설명 텍스트
    myProgress: number, // 미션 달성 확률
    myTodayProgress: number, // 오늘 미션 달성 퍼센트
    successPercent: number, // 하루하루 성공 확률
    missionText: string, // 미션
    missionDescText: string, //
    missionSuccessDesc: string,
  },
  competition: {
    rank: number,
    status: string,
    allStep: number,
    rank: number,
    rankStatus: string,
    rewardRemainStep: number,
    todayStep: number,
    successCount: number,
  },
  result: {
    info: number, // 등수, 성공횟수
    infoText: string, // n위 n회
    isSuccess: boolean, // 성공 실패 여부
    isSuccessText: string, // 성공 실패 설명 텍스트
    successCount: number, // 성공한 사람수
  },
  rewardEnable: boolean, // 보상 가능 시간인지
  users: Array<User>, // 참여가능
  winning: boolean, //
  stepDiff: number,
  bet: number,
  win: number,
  sponsorResource: string,
  contactURLs: string,
  successDay: boolean,
};

export type RankUser = {
  id: number,
  name: string,
  phoneNumber: string,
  imgUrl: string,
  service: Service,
  rank: number,
  successCount: number,
  missCount: number,
  steps: number,
  averageSteps: number,
};

export type Config = {
  appVersion: string,
  storeUrl: string,
  inquirePhoneNumber: string,
};

export type Routes = {
  routeName: string,
  type: string,
};

export type ParsedUrl = {
  host: string,
  query: any,
  pathname: string,
  hash: string,
};

export type Home = {
  steps: number, // 걸음수
  joinGames: Array<Game>, // 참가한 시작한 게임
  beforeGames: Array<Game>, // 참가했지만 시작하지 않은 게임
  unchecked: number, // 확인하지 읺은 결과 게시물 수
  pedoResource: string,
  backgroundURL: string,
  lottieURL: string,
};

export type Notice = {
  title: string,
  url: string,
};

export type LiivMate = {
  point: number,
  membership: boolean,
};

export type Card = {
  cardId: string,
};

export type StepData = {
  date: string,
  steps: number,
  accSteps: number,
};
