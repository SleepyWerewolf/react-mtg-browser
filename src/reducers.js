import { combineReducers } from 'redux';
import {
  FETCH_CARD_BY_ID_REQUEST,
  FETCH_CARD_BY_ID_SUCCESS,
  FETCH_CARD_BY_ID_FAIL
} from './actions';

const card = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CARD_BY_ID_SUCCESS:
      return action.data.card;
    default:
      return state;
  }
};

const isFetchingData = (state = false, action) => {
  switch (action.type) {
    case FETCH_CARD_BY_ID_REQUEST:
      return true;
    case FETCH_CARD_BY_ID_SUCCESS:
    case FETCH_CARD_BY_ID_FAIL:
      return false;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  card,
  isFetchingData,
});

export default rootReducer;
