import { combineReducers } from 'redux';
import errors from './errors';
import isFetchingData from './isFetchingData';
import { selectedCard, cardSetTitles } from './cards';

const rootReducer = combineReducers({
  selectedCard,
  isFetchingData,
  errors,
  cardSetTitles
});

export default rootReducer;
