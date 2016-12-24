import { combineReducers } from 'redux';
import {
  FETCH_CARD_BY_ID_REQUEST,
  FETCH_CARD_BY_ID_SUCCESS,
  FETCH_CARD_BY_ID_FAIL
} from './actions';

let errorId = 0;

const error = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CARD_BY_ID_FAIL:
      const { error } = action;
      return {
        ...state,
        ...error,
        isAcknowledged: false,
        id: errorId++
      };
    default:
      return state;
  }
};

const errors = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARD_BY_ID_FAIL:
      return [...state, error({}, action)];
    default:
      return state;
  }
};

const selectedCard = (state = {}, action) => {
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
  selectedCard,
  isFetchingData,
  errors
});

export default rootReducer;
