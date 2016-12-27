import { FETCH_CARD_SET_TYPES_SUCCESS, FETCH_CATALOG_SET_SUCCESS } from '../actions';

const setTypes = (state = [], action) => {
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

const sets = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATALOG_SET_SUCCESS:
      const cardIds = action.data.cards.map(card => card.id);
      return {
        ...state,
        [action.data.setCode]: cardIds
      };
    default:
      return state;
  }
};

export { sets, setTypes };