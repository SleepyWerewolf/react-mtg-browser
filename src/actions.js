export const FETCH_CARD_BY_ID_REQUEST = 'FETCH_CARD_BY_ID';
export const FETCH_CARD_BY_ID_SUCCESS = 'FETCH_CARD_BY_ID_SUCCESS';
export const FETCH_CARD_BY_ID_FAIL = 'FETCH_CARD_BY_ID_FAIL';
export const ACKNOWLEDGE_ERROR = 'ACKNOWLEDGE_ERROR';

export const acknowledgeError = id => {
  return {
    type: ACKNOWLEDGE_ERROR,
    id
  };
};

export const fetchCardById = cardId => {
  return {
    type: FETCH_CARD_BY_ID_REQUEST,
    cardId
  };
};

export const fetchCardByIdSuccess = data => {
  return {
    type: FETCH_CARD_BY_ID_SUCCESS,
    data
  };
};

export const fetchCardbyIdFail = error => {
  return {
    type: FETCH_CARD_BY_ID_FAIL,
    error
  };
};
