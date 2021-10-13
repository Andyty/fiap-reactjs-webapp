/**
 * Objeto que reúne as sagas deste módulo
 */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import AlgaworksAPI from '../../../Services/AlgaworksAPI';

import {
    searchCoursesStart,
    searchCoursesFinishSuccess,
    searchCoursesFinishError, searchCourseByNameFinishSuccess
} from './actions';


function* getCourses() {
    try {
        console.log("Start Connection");
        yield put(searchCoursesStart());

        console.log("Before Call");
        const courses = yield call(AlgaworksAPI.get, "/courses");

        console.log("After Call");
        console.log(courses);

        if (courses instanceof Array){
            console.log("Success Call");
            yield put(searchCoursesFinishSuccess(courses));
        } else {
            console.log("NOT SUCCESS");
            yield put(searchCoursesFinishError());
        }
    } catch (err) {
        console.log(err);
        console.log("Error Call");
        yield put(searchCoursesFinishError());
    }
}

function* getCourseByName({ payload }) {
    try {
        console.log("Start Connection");
        yield put(searchCoursesStart());

        console.log("Before Call BY NAME");
        const { courseName } = payload
        const coursesByName = yield call(AlgaworksAPI.getByName, "/courses", courseName);

        console.log("After Call BY NAME");
        console.log(coursesByName);

        if (coursesByName instanceof Array){
            console.log("Success Call");
            yield put(searchCourseByNameFinishSuccess(coursesByName));
        } else {
            console.log("NOT SUCCESS");
            yield put(searchCoursesFinishError());
        }
    } catch (err) {
        console.log(err);
        console.log("Error Call");
        yield put(searchCoursesFinishError());
    }
}

export default all([
    takeLatest('courseInfo/SEARCH_COURSES', getCourses),
    takeLatest('courseInfo/SEARCH_COURSE_BY_NAME', getCourseByName),
]);