import { FETCH_CATALOG_SET_SUCCESS } from '../actions';

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

export { catalog };