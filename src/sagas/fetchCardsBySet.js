import { fork } from 'redux-saga/effects';
import watchFetchCardById from './fetchCardById';
import watchFetchCardSetTypes from './fetchCardSetTypes';

function* watchFetchSetByName() {
  yield takeLatest(FETCH_SET_BY_NAME_REQUEST, fetchSetByName);
}

function* fetchSetByName(action) {
  try {
    const data = yield call(mtg.card.where, { set: action.setName });
    yield put(fetchSetByTypesuccess(data));
  } catch (e) {
    yield put(fetchSetByNameFail(e));
  }
}

export default watchFetchSetByName;