import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { FETCH_CARD_SET_TYPES_REQUEST, fetchCardSetTypesSuccess, fetchCardSetTypesFail } from '../actions';

const SETS_ENDPOINTS = 'https://api.magicthegathering.io/v1/sets/';

export default function* watchFetchCardSetTypes() {
  yield takeLatest(FETCH_CARD_SET_TYPES_REQUEST, fetchCardSetTypes);
}

function* fetchCardSetTypes() {
  try {
    const responseBody = yield call(fetch, SETS_ENDPOINTS);
    const data = yield responseBody.json();
    yield put(fetchCardSetTypesSuccess(data));
  } catch (e) {
    yield put(fetchCardSetTypesFail(e));
  }
}