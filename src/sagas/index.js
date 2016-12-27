import { fork } from 'redux-saga/effects';
import watchFetchCardById from './fetchCardById';
import watchFetchCardSetTypes from './fetchCardSetTypes';
import watchFetchMoreCatalogSets from './fetchMoreCatalogSets';

// export function* watchFetchSetByName() {
//   yield takeLatest(FETCH_SET_BY_NAME_REQUEST, fetchSetByName);
// }

// function* fetchSetByName(action) {
//   try {
//     const data = yield call(mtg.card.where, { set: action.setName });
//     yield put(fetchSetByTypesuccess(data));
//   } catch (e) {
//     yield put(fetchSetByNameFail(e));
//   }
// }

function* rootSaga() {
    yield [
        fork(watchFetchCardById),
        fork(watchFetchCardSetTypes),
        fork(watchFetchMoreCatalogSets)
    ];
}

export default rootSaga;