import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import mtg from 'mtgsdk';
import {
    FETCH_MORE_CATALOG_SETS,
    fetchCatalogSetSuccess,
    fetchCatalogSetFail
} from '../actions';

function* watchFetchMoreCatalogSets() {
    yield takeLatest(FETCH_MORE_CATALOG_SETS, fetchMoreCatalogSets);
}

// @TODO: Refactor this to utilize ./fetchCardsBySet.js
function* fetchMoreCatalogSets(action) {
    const { cardSetTypes, currentNumSets, numSetsToFetch } = action;
    const originalNumSets = currentNumSets;
    let numSetsFetched = 0;

    // try {
    //     const data = yield call(mtg.card.where, { set: cardSetTypes[0].code });
    //     yield put(fetchCatalogSetSuccess({ cards: [ ...data ], setName: cardSetTypes[0].name }));
    // } catch (e) {
    //     yield put(fetchCatalogSetFail(e));
    // }


    try {
        while (numSetsFetched < numSetsToFetch) {
            const { code } = cardSetTypes[originalNumSets + numSetsFetched++];
            console.log(`FETCHING ${code}`);
            const data = yield call(mtg.card.where, { set: code });
            yield put(fetchCatalogSetSuccess({ cards: [ ...data ], setCode: code }));
        }
    } catch (e) {
        yield put(fetchCatalogSetFail(e));
    }
}

export default watchFetchMoreCatalogSets;