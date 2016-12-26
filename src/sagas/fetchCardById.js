import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import mtg from 'mtgsdk';
import { FETCH_CARD_BY_ID_REQUEST, fetchCardByIdSuccess, fetchCardbyIdFail } from '../actions';

export default function* watchFetchCardById() {
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

