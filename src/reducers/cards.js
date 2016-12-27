import {
  FETCH_CARD_BY_ID_SUCCESS,
  FETCH_CARD_SET_TYPES_SUCCESS,
} from '../actions';

const selectedCard = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CARD_BY_ID_SUCCESS:
      return action.data.card;
    default:
      return state;
  }
};

const cardSetTypes = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARD_SET_TYPES_SUCCESS:
      return [
        ...state,
        ...action.data.sets
      ];
    default:
      return state;
  }
};

export { selectedCard, cardSetTypes };
