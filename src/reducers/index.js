import { combineReducers } from 'redux';
import errors from './errors';
import isFetchingData from './isFetchingData';
import { selectedCard, cardSetTypes } from './cards';

const rootReducer = combineReducers({
  selectedCard,
  isFetchingData,
  errors,
  cardSetTypes
});

export default rootReducer;
