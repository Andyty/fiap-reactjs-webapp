/**
 * Objeto que junta todos os Reducers que usaremos no aplicativo
 */
import { combineReducers } from 'redux';
import userInfox from './user/reducer';
import courseInfo from './course/reducer';

export default combineReducers({ userInfox, courseInfo });