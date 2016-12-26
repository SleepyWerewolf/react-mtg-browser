import {
  FETCH_CARD_BY_ID_SUCCESS,
  FETCH_CARD_SET_TITLES_SUCCESS,
} from '../actions';

export const selectedCard = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CARD_BY_ID_SUCCESS:
      return action.data.card;
    default:
      return state;
  }
};

export const cardSetTitles = (state = [], action) => {
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