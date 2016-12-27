import { combineReducers } from 'redux';
import errors from './errors';
import isFetchingData from './isFetchingData';
import { selectedCard, cardSetTypes, cards, sets, catalog } from './cards';

const rootReducer = combineReducers({
  selectedCard,
  isFetchingData,
  errors,
  cardSetTypes,
  cards,
  sets,
  catalog
});

export default rootReducer;
