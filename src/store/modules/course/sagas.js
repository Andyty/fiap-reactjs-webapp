/**
 * Objeto que reúne as sagas deste módulo
 */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import AlgaworksAPI from '../../../Services/AlgaworksAPI';

import {
    searchCoursesStart,
    searchCoursesFinishSuccess,
    searchCoursesFinishError, searchCourseByNameFinishSuccess, searchCourseByIdFinishSuccess
} from './actions';

function* getCourses() {
    try {
        console.log("Start Connection");
        yield put(searchCoursesStart());

        console.log("Before Call");
        const courses = yield call(AlgaworksAPI.get, "/cursos");

        console.log("After Call");
        console.log(courses.cursos);

        if (courses.cursos instanceof Array) {
            console.log("Success Call");
            yield put(searchCoursesFinishSuccess(courses.cursos));
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
        const coursesByName = yield call(AlgaworksAPI.getCourseByName, courseName);

        console.log("After Call BY NAME");
        console.log(coursesByName.cursos);

        if (coursesByName.cursos instanceof Array) {
            console.log("Success Call");
            yield put(searchCourseByNameFinishSuccess(coursesByName.cursos));
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

function* getCourseById({ payload }) {
    try {
        console.log("Start Connection");
        yield put(searchCoursesStart());

        console.log("Before Call BY ID");
        const { courseId } = payload
        const course = yield call(AlgaworksAPI.getCourseById, courseId);

        console.log("After Call BY Id");
        console.log(course);

        if (course) {
            console.log("Success Call");
            yield put(searchCourseByIdFinishSuccess(course));
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
    takeLatest('course/SEARCH_COURSES', getCourses),
    takeLatest('course/SEARCH_COURSE_BY_NAME', getCourseByName),
    takeLatest('course/SEARCH_COURSE_BY_ID', getCourseById),
]);