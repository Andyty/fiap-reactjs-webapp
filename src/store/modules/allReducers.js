/**
 * Objeto que junta todos os Reducers que usaremos no aplicativo
 */
import { combineReducers } from 'redux';
import userInfo from './userInfo/reducer';
import courseInfo from './courseInfo/reducer';

export default combineReducers({ userInfo, courseInfo });