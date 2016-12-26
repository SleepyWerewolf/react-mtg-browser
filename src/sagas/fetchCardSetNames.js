import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { FETCH_CARD_SET_NAMES_REQUEST, fetchCardSetNamesSuccess, fetchCardSetNamesFail } from '../actions';

const SETS_ENDPOINTS = 'https://api.magicthegathering.io/v1/sets/';

export default function* watchFetchCardSetNames() {
  yield takeLatest(FETCH_CARD_SET_NAMES_REQUEST, fetchCardSetNames);
}

function* fetchCardSetNames() {
  try {
    const responseBody = yield call(fetch, SETS_ENDPOINTS);
    const data = yield responseBody.json();
    yield put(fetchCardSetNamesSuccess(data));
  } catch (e) {
    yield put(fetchCardSetNamesFail(e));
  }
}