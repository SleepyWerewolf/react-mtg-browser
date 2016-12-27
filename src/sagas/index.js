import { fork } from 'redux-saga/effects';
import watchFetchCardById from './fetchCardById';
import watchFetchCardSetTypes from './fetchCardSetTypes';
import watchFetchMoreCatalogSets from './fetchMoreCatalogSets';

function* rootSaga() {
    yield [
        fork(watchFetchCardById),
        fork(watchFetchCardSetTypes),
        fork(watchFetchMoreCatalogSets)
    ];
}

export default rootSaga;