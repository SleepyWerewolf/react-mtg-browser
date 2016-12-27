export const ACKNOWLEDGE_ERROR = 'ACKNOWLEDGE_ERROR';
export const FETCH_CARD_BY_ID_REQUEST = 'FETCH_CARD_BY_ID';
export const FETCH_CARD_BY_ID_SUCCESS = 'FETCH_CARD_BY_ID_SUCCESS';
export const FETCH_CARD_BY_ID_FAIL = 'FETCH_CARD_BY_ID_FAIL';
export const FETCH_SET_BY_NAME_REQUEST = 'FETCH_SET_BY_NAME_REQUEST';
export const FETCH_SET_BY_NAME_REQUEST_SUCCESS = 'FETCH_SET_BY_NAME_REQUEST_SUCCESS';
export const FETCH_SET_BY_NAME_REQUEST_FAIL = 'FETCH_SET_BY_NAME_REQUEST_FAIL';
export const FETCH_CARD_SET_TYPES_REQUEST = 'FETCH_CARD_SET_TYPES_REQUEST';
export const FETCH_CARD_SET_TYPES_SUCCESS = 'FETCH_CARD_SET_TYPES_SUCCESS';
export const FETCH_CARD_SET_TYPES_FAIL = 'FETCH_CARD_SET_TYPES_FAIL';
export const FETCH_MORE_CATALOG_SETS = 'FETCH_MORE_CATALOG_SETS';
export const FETCH_CATALOG_SET_SUCCESS = 'FETCH_CATALOG_SET_SUCCESS';
export const FETCH_CATALOG_SET_FAIL = 'FETCH_CATALOG_SET_FAIL';


export const fetchCatalogSetSuccess = data => {
  return {
    type: FETCH_CATALOG_SET_SUCCESS,
    data
  };
};

export const fetchCatalogSetFail = error => {
  return {
    type: FETCH_CATALOG_SET_FAIL,
    error
  };
};

export const fetchMoreCatalogSets = (cardSetTypes, currentNumSets, numSetsToFetch = 3) => {
  return {
    type: FETCH_MORE_CATALOG_SETS,
    cardSetTypes,
    currentNumSets,
    numSetsToFetch
  };
};

export const acknowledgeError = errorId => {
  return {
    type: ACKNOWLEDGE_ERROR,
    errorId
  };
};

export const fetchCardSetTypes = () => {
  return {
    type: FETCH_CARD_SET_TYPES_REQUEST
  };
};

export const fetchCardSetTypesSuccess = data => {
  return {
    type: FETCH_CARD_SET_TYPES_SUCCESS,
    data
  };
};

export const fetchCardSetTypesFail = error => {
  return {
    type: FETCH_CARD_SET_TYPES_FAIL,
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
