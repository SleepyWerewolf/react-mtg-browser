import { FETCH_CARD_BY_ID_REQUEST, FETCH_CARD_BY_ID_SUCCESS, FETCH_CARD_BY_ID_FAIL } from './actions';
import { take, fork, call, put } from 'redux-saga/effects';
import mtg from 'mtgsdk';

export function* watchFetchCardById() {
  while (true) {
    const action = yield take(FETCH_CARD_BY_ID_REQUEST);
    yield fork(fetchCardById, action.cardId);
  }
}

function* fetchCardById(cardId) {
  try {
    const data = yield call(mtg.card.find, cardId);
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
