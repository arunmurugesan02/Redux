import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import {persistStore} from 'redux-persist';
import {reactotron} from '../config/ReactotronConfig';

const sagaMonitor = reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(
  rootReducer,
  compose(middleware, reactotron.createEnhancer()),
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
