// @flow
import api, {apiRequest} from '../api';
import Action from '../redux/actions';

export const getConfig = () => {
  const request = api.get('/api/config');

  return apiRequest(Action.CONFIG_GET_RESPONSE, request, 'configs');
};

export const checkEmail = (email: string) => {
  const request = api.post('/api/balance/emailCheck', {email});

  return apiRequest(Action.CHECK_EMAIL_RESPONSE, request, 'emailCheck');
};

export const phoneAuth = (userMobileInfo: any) => {
  const request = api.post('/api/phone/auth/request', userMobileInfo);

  return apiRequest(Action.CHECK_MOBILE_RESPONSE, request, 'phoneAuth');
};

export const phoneConfirm = (mobileAuthInfo: Object) => {
  const request = api.post('/api/phone/auth/confirm', mobileAuthInfo);

  return apiRequest(Action.CHECK_MOBILE_AUTH_RESPONSE, request, 'confirm');
};

export const getRanking = (
  type: string,
  duration: string,
  phones: ?Array<string> = null,
  facebookIds: ?Array<string> = null,
) => {
  const request = api.post('/api/ranking', {
    type,
    duration,
    phones,
    facebookIds,
  });

  return apiRequest(Action.RANKING_TABLE_RESPONSE, request, 'rankings');
};

export const getActivity = () => {
  const request = api.get('/api/activity');

  return apiRequest(Action.ACTIVITY_RESPONSE, request, 'activity');
};

export const getActivities = (ago: number = 0) => {
  const request = api.get('/api/activity/data', {params: {ago}});

  return apiRequest(Action.ACTIVITIES_RESPONSE, request, 'activityWeekly');
};

export const getEndGames = () => {
  const request = api.get('/api/game/endGames');

  return apiRequest(Action.GAMES_GET_RESPONSE, request, 'endGames');
};

export const getAllSponsorGames = () => {
  const request = api.get('/api/game/all');

  return apiRequest(
    Action.ALL_SPONSOR_GAMES_GET_RESPONSE,
    request,
    'sponsorGames',
  );
};

export const getGameInfo = (id: number) => {
  const request = api.get(`/api/game/${id}/info`);

  return apiRequest(Action.GAME_INFO_GET_RESPONSE, request, 'detailGame');
};

export const joinGame = (
  gameId: number,
  params: {cardId: string, cardPass: string, betType: number},
) => {
  const request = api.post(`/api/game/${gameId}/join`, params);

  return apiRequest(Action.GAME_JOIN_RESPONSE, request, 'games');
};

export const getGameUsers = (id: number, params: any) => {
  const request = api.get(`/api/game/${id}/users`, {params});

  return apiRequest(Action.GAME_USERS_GET_RESPONSE, request, 'users');
};

export const getGameResultUsers = (id: number, page, size, success) => {
  const request = api.get(`/api/game/${id}/result/users`, {
    params: {page, size, success},
  });

  return apiRequest(Action.GAME_USERS_GET_RESPONSE, request, 'users');
};

export const getUserInfo = (id: number) => {
  const request = api.get(`/api/user/${id}/info`);

  return apiRequest(Action.GET_USER_INFO_RESPONSE, request, 'challengeUser');
};

export const getCardData = (year, month) => {
  const request = api.get('/api/card/data', {params: {year, month}});

  return apiRequest(Action.GET_USER_CARD_DATA_RESPONSE, request, 'points');
};

export const getHome = () => {
  const request = api.get('/api/home');

  return apiRequest(Action.GET_HOME, request, 'home');
};

export const getNotice = () => {
  const request = api.get('/api/notice');
  // LOG(request)
  return apiRequest(Action.GET_NOTICE, request, 'notice');
};

export const getGameFeed = (id: number) => {
  const request = api.get(`/api/game/${id}/feed`);

  return apiRequest(Action.GET_GAME_FEED_RESPONSE, request, 'feeds');
};

export const getHardGames = () => {
  const request = api.get('/api/game/hardGames');
  LOG(request);
  return apiRequest(Action.GET_HARD_GAMES_RESPONSE, request, 'hardGames');
};

export const getLiivmatePoints = () => {
  const request = api.get('/api/liivmate/point');

  return apiRequest(Action.GET_HARD_GAMES_RESPONSE, request, 'point');
};

export const getUserPaymentNumber = () => {
  const request = api.get('/api/user/payment');

  return apiRequest(Action.GET_USER_PAYMENT_ID_RESPONSE, request, 'card');
};

export const getInsureumTransaction = () => {
  const request = api.get('/api/insureum/transaction');

  return apiRequest(
    Action.GET_INSUREUM_TRANSACTION_RESPONSE,
    request,
    'insureumTransaction',
  );
};

export const getZiktoCashTransaction = () => {
  const request = api.get('/api/ziktocash/transaction');

  return apiRequest(
    Action.GET_INSUREUM_TRANSACTION_RESPONSE,
    request,
    'ziktoCashTransaction',
  );
};

export const buyZiktoCash = (amount, impId) => {
  const request = api.post('/api/ziktocash/buy', {impId, amount});

  return apiRequest(
    Action.GET_INSUREUM_TRANSACTION_RESPONSE,
    request,
    'ziktoCashTransaction',
  );
};

export const getInsureumWallet = () => {
  const request = api.get('/api/insureum/wallets');

  return apiRequest(
    Action.GET_INSUREUM_TRANSACTION_RESPONSE,
    request,
    'insureumWallet',
  );
};

export const addInsureumWallet = () => {
  const request = api.post('/api/insureum/wallets');

  return apiRequest(
    Action.GET_INSUREUM_TRANSACTION_RESPONSE,
    request,
    'insureumWallet',
  );
};

export const withdrawRequest = (amount: number, address: string) => {
  const request = api.post('/api/insureum/withdrawRequest', {amount, address});

  return apiRequest(Action.INSUREUM_WITHDRAW_REQUSET, request, 'insureum');
};

export const getDustWeather = (lat: string, lng: string) => {
  const request = api.get('/api/weather/dust/location', {
    params: {
      lat,
      lng,
    },
  });
  return apiRequest(Action.GET_WEATHER_RESPONSE, request, 'weatherDust');
};

export const getWeather = (lat: string, lng: string) => {
  const request = api.get('/api/weather/today', {
    params: {
      lat,
      lng,
    },
  });
  return apiRequest(Action.GET_WEATHER_RESPONSE, request, 'weatherToday');
};

export const ziktoCashWithdrawRequest = (amount, bankName, accountNumber) => {
  const request = api.post('/api/ziktocash/withdrawRequest', {
    amount,
    bankName,
    accountNumber,
  });

  return apiRequest(
    Action.ZIKTO_CASH_WITHDRAW_REQUEST,
    request,
    'ziktoCashWithdraw',
  );
};

export const insureumBuy = amount => {
  const request = api.post('/api/ziktocash/insureumBuy', {amount});

  return apiRequest(Action.BUY_INSUREUM, request, 'insureumBuy');
};

export const buyWithOCB = (cardId, cardPass, amount) => {
  const request = api.post('/api/ziktocash/buyWithOCB', {
    cardId,
    cardPass,
    amount,
  });

  return apiRequest(Action.BUY_WITH_OCB, request, 'buyWithOCB');
};

export const insureumRate = () => {
  const request = api.get('/api/ziktocash/insureum/rate');

  return apiRequest(Action.INSUREUM_RATE, request, 'insureumRate');
};
