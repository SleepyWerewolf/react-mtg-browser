export const FETCH_CARD_BY_ID_REQUEST = 'FETCH_CARD_BY_ID';
export const FETCH_CARD_BY_ID_SUCCESS = 'FETCH_CARD_BY_ID_SUCCESS';
export const FETCH_CARD_BY_ID_FAIL = 'FETCH_CARD_BY_ID_FAIL';

export const fetchCardById = cardId => {
  return {
    type: FETCH_CARD_BY_ID_REQUEST,
    cardId
  }
};
