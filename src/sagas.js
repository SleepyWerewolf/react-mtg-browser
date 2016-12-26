import {
  FETCH_CARD_BY_ID_REQUEST,
  FETCH_SET_BY_NAME_REQUEST,
  FETCH_CARD_SET_TITLES_REQUEST,
  fetchCardByIdSuccess,
  fetchCardbyIdFail,
  fetchSetByNameSuccess,
  fetchSetByNameFail,
  fetchCardSetTitlesSuccess,
  fetchCardSetTitlesFail
} from './actions';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import mtg from 'mtgsdk';

const SETS_ENDPOINTS = 'https://api.magicthegathering.io/v1/sets/';

export function* watchFetchCardById() {
  yield takeLatest(FETCH_CARD_BY_ID_REQUEST, fetchCardById);
}

function* fetchCardById(action) {
  try {
    const data = yield call(mtg.card.find, action.cardId);
    yield put(fetchCardByIdSuccess(data));
  } catch (e) {
    yield put(fetchCardbyIdFail(e));
  }
}

export function* watchFetchCardSetTitles() {
  yield takeLatest(FETCH_CARD_SET_TITLES_REQUEST, fetchCardSetTitles);
}

function* fetchCardSetTitles() {
  try {
    const responseBody = yield call(fetch, SETS_ENDPOINTS);
    const data = yield responseBody.json();
    yield put(fetchCardSetTitlesSuccess(data));
  } catch (e) {
    yield put(fetchCardSetTitlesFail(e));
  }
}

export function* watchFetchSetByName() {
  yield takeLatest(FETCH_SET_BY_NAME_REQUEST, fetchSetByName);
}

function* fetchSetByName(action) {
  try {
    const data = yield call(mtg.card.where, { set: action.setName });
    yield put(fetchSetByNameSuccess(data));
  } catch (e) {
    yield put(fetchSetByNameFail(e));
  }
}
