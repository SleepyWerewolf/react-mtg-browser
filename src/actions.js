export const ACKNOWLEDGE_ERROR = 'ACKNOWLEDGE_ERROR';
export const ADD_CATALOG_ROW = 'ADD_CATALOG_ROW';
export const FETCH_CARD_BY_ID_REQUEST = 'FETCH_CARD_BY_ID';
export const FETCH_CARD_BY_ID_SUCCESS = 'FETCH_CARD_BY_ID_SUCCESS';
export const FETCH_CARD_BY_ID_FAIL = 'FETCH_CARD_BY_ID_FAIL';
export const FETCH_SET_BY_NAME_REQUEST = 'FETCH_SET_BY_NAME_REQUEST';
export const FETCH_SET_BY_NAME_REQUEST_SUCCESS = 'FETCH_SET_BY_NAME_REQUEST_SUCCESS';
export const FETCH_SET_BY_NAME_REQUEST_FAIL = 'FETCH_SET_BY_NAME_REQUEST_FAIL';
export const FETCH_CARD_SET_TITLES_REQUEST = 'FETCH_CARD_SET_TITLES_REQUEST';
export const FETCH_CARD_SET_TITLES_SUCCESS = 'FETCH_CARD_SET_TITLES_SUCCESS';
export const FETCH_CARD_SET_TITLES_FAIL = 'FETCH_CARD_SET_TITLES_FAIL';
export const REMOVE_CATALOG_ROW = 'REMOVE_CATALOG_ROW';

export const acknowledgeError = errorId => {
  return {
    type: ACKNOWLEDGE_ERROR,
    errorId
  };
};

export const fetchCardSetTitles = () => {
  return {
    type: FETCH_CARD_SET_TITLES_REQUEST
  };
};

export const fetchCardSetTitlesSuccess = data => {
  return {
    type: FETCH_CARD_SET_TITLES_SUCCESS,
    data
  };
};

export const fetchCardSetTitlesFail = error => {
  return {
    type: FETCH_CARD_SET_TITLES_FAIL,
    error
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

export const fetchSetByName = setName => {
  return {
    type: FETCH_SET_BY_NAME_REQUEST,
    setName
  };
};

export const fetchSetByNameSuccess = data => {
  return {
    type: FETCH_SET_BY_NAME_REQUEST_SUCCESS,
    data
  };
};

export const fetchSetByNameFail = error => {
  return {
    type: FETCH_SET_BY_NAME_REQUEST_FAIL,
    error
  };
}
