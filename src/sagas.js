import { FETCH_CARD_BY_ID, FETCH_CARD_BY_ID_SUCCESS, FETCH_CARD_BY_ID_FAILED } from './actions';
import { take, fork, call, put } from 'redux-saga/effects';
import mtg from 'mtgsdk';

// function* fetchCardById(action) {
//   try {
//     const card = yield call(mtg.card.find(action.cardId));
//     yield put({
//       type: FETCH_CARD_BY_ID_SUCCESS,
//       card: card
//     });
//   } catch (e) {
//     yield put({
//       type: FETCH_CARD_BY_ID_FAILED,
//       message: e.message
//     });
//   }
// }
//
// function* watchForFetchCardById() {
//   yield takeLatest(FETCH_CARD_BY_ID, fetchCardById);
// }

export function* watchFetchCardById() {
  while (true) {
    const action = yield take(FETCH_CARD_BY_ID);
    yield fork(fetchCardById, action.cardId);
  }
}

function* fetchCardById(cardId) {
  const data = yield call(mtg.card.find, cardId);
  yield put({
    type: FETCH_CARD_BY_ID_SUCCESS,
    data
  });
}

export function penis() {
  return false;
}
