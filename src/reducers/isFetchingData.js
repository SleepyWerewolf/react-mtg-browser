import {
  FETCH_CARD_BY_ID_REQUEST,
  FETCH_CARD_BY_ID_SUCCESS,
  FETCH_CARD_BY_ID_FAIL,
  FETCH_CARD_SET_TITLES_REQUEST,
  FETCH_CARD_SET_TITLES_SUCCESS,
  FETCH_CARD_SET_TITLES_FAIL
} from '../actions';

const isFetchingData = (state = false, action) => {
  switch (action.type) {
    case FETCH_CARD_BY_ID_REQUEST:
    case FETCH_CARD_SET_TITLES_REQUEST:
      return true;
    case FETCH_CARD_BY_ID_SUCCESS:
    case FETCH_CARD_BY_ID_FAIL:
    case FETCH_CARD_SET_TITLES_SUCCESS:
    case FETCH_CARD_SET_TITLES_FAIL:
      return false;
    default:
      return state;
  }
};

export default isFetchingData;