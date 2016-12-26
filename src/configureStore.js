import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import { watchFetchCardById, watchFetchCardSetTitles } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(
    sagaMiddleware,
    loggerMiddleware
  ));

  //sagaMiddleware.run(watchFetchCardById);
  sagaMiddleware.run(watchFetchCardSetTitles);
  return store;
}

export default configureStore;
