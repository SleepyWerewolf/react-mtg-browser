import {
  FETCH_CARD_BY_ID_SUCCESS,
  FETCH_CARD_SET_TYPES_SUCCESS,
  FETCH_MORE_CATALOG_SETS,
  FETCH_CATALOG_SET_SUCCESS
} from '../actions';

const NUM_SETS_TO_FETCH = 3;

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

const numSetsFetched = (state = 0, action) => {
  switch (action.type) {
    case FETCH_CATALOG_SET_SUCCESS:
      return state + 1;
    default:
      return state;
  }
};
const catalogSetIndicesFetched = (state = NUM_SETS_TO_FETCH, action) => {
  switch (action.type) {
    case FETCH_MORE_CATALOG_SETS:
      return state + NUM_SETS_TO_FETCH;
    default:
      return state;
  }
};

const cards = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATALOG_SET_SUCCESS:
      const cards = {};
      action.data.cards.map(card => cards[card.id] = card);
      return {
        ...state,
        ...cards
      };
    case FETCH_CARD_BY_ID_SUCCESS:
      const { card } = action.data;
      return {
        ...state,
        [card.id]: card
      };
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

const catalog = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATALOG_SET_SUCCESS:
      return [
        ...state,
        action.data.setCode
      ];
    default:
      return state;
  }
};

export { selectedCard, cardSetTypes,  cards, sets, catalog };


// cards: {
//   cardId: {data}
// }

// sets: {
//   setName: [cardIds]
// }

// catalog: [setNames]

// Sample:

// catalog: ['SET1']

// sets: {
//   SET1: [4, 6, 192, 508];
// }

// cards: {
//   4: {...},
//   6: {...},
//   192: {...},
//   508: {...}
// }

// Returns array of cards:
// catalog.map(set => set.map(cardId => cards[cardId]));