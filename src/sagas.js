import { FETCH_CARD_BY_ID_REQUEST, FETCH_CARD_BY_ID_SUCCESS, FETCH_CARD_BY_ID_FAIL } from './actions';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import mtg from 'mtgsdk';

export function* watchFetchCardById() {
  yield takeLatest(FETCH_CARD_BY_ID_REQUEST, fetchCardById);
}

function* fetchCardById(action) {
  try {
    const data = yield call(mtg.card.find, action.cardId);
    yield put({
      type: FETCH_CARD_BY_ID_SUCCESS,
      data
    });
  } catch (e) {
    yield put({
      type: FETCH_CARD_BY_ID_FAIL,
      error: e
    });
  }
}
