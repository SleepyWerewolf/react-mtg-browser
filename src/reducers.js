import { combineReducers } from 'redux';
import {
  ACKNOWLEDGE_ERROR,
  FETCH_CARD_BY_ID_REQUEST,
  FETCH_CARD_BY_ID_SUCCESS,
  FETCH_CARD_BY_ID_FAIL,
  ADD_CATALOG_ROW,
  FETCH_CARD_SET_TITLES_SUCCESS
} from './actions';

let currentErrorId = 0;

const error = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CARD_BY_ID_FAIL:
      const { error } = action;
      return {
        ...state,
        ...error,
        isAcknowledged: false,
        id: currentErrorId++
      };
    case ACKNOWLEDGE_ERROR:
      const { errorId } = action;

      if (state.id === errorId) {
        return {
          ...state,
          isAcknowledged: true
        };
      }

      return state;
    default:
      return state;
  }
};

const errors = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARD_BY_ID_FAIL:
      return [...state, error({}, action)];
    case ACKNOWLEDGE_ERROR:
      return state.map(item => error(item, action));
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

const cardSetTitles = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARD_SET_TITLES_SUCCESS:
      return [
        ...state,
        ...action.data.sets
      ];
    default:
      return state;
  }
};
//
// const cardSets = (state = [], action) => {
//   switch (action.type)
// };
//
// const catalogRow = (state = (), action) => {
//   switch (action.type) {
//     case ADD_CATALOG_ROW:
//       return {
//
//       }
//   }
// };

// const catalog = (state = {}, action) => {
//   switch (action.type) {
//     case ADD_CATALOG_ROW:
//       return {
//         ...state,
//         catalogRow(state = {}, action)
//       };
//     default:
//       return state;
//   }
// };

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
  errors,
  cardSetTitles
});

export default rootReducer;
