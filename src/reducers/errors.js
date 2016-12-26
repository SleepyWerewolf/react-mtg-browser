import {
  ACKNOWLEDGE_ERROR,
  FETCH_CARD_BY_ID_FAIL,
  FETCH_CARD_SET_TITLES_FAIL
} from '../actions';

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

export default errors;
