/**
 * Objeto que junta todas as Sagas que usaremos no aplicativo
 */
import { all } from 'redux-saga/effects';
import user from './user/sagas.js';
import course from './course/sagas.js';

export default function* rootSaga() {
    return yield all([user, course]);
}