import { combineReducers } from 'redux';
import errors from './errors';
import isFetchingData from './isFetchingData';
import { cards } from './cards';
import { catalog } from './catalog';
import { setTypes, sets } from './sets';

const rootReducer = combineReducers({
  isFetchingData,
  errors,
  cards,
  setTypes,
  sets,
  catalog
});

export default rootReducer;
