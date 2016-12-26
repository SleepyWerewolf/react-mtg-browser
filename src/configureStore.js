import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from './reducers/';
import rootSaga from './sagas/';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(
    sagaMiddleware,
    loggerMiddleware
  ));
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
