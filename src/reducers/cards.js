import {
  FETCH_CARD_BY_ID_SUCCESS,
  FETCH_CARD_SET_TYPES_SUCCESS,
  FETCH_MORE_CATALOG_SETS,
  FETCH_CATALOG_SET_SUCCESS
} from '../actions';

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

export { cards };


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
// catalog.map(setName => sets[setName].map(cardId => cards[cardId]));