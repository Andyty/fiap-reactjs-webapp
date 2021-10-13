/**
 * Objeto que junta todas as Sagas que usaremos no aplicativo
 */
import { all } from 'redux-saga/effects';
import userInfo from './userInfo/sagas.js';
import courseInfo from './courseInfo/sagas.js';

export default function* rootSaga() {
    return yield all([userInfo, courseInfo]);
}