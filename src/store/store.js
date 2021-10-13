 /**
 * Realiza a configuração o React Redux e Redux-Saga
 */
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './modules/allReducers';
import allSagas from './modules/allSagas';
import { loadState, saveState } from './loadState';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const persistedState = loadState();

const store = createStore(allReducers, persistedState, applyMiddleware(...middlewares));
store.subscribe(() => saveState(store.getState()))

sagaMiddleware.run(allSagas);


export default store