/**
 * Objeto que reúne os Actions que alteram as informações no CourseInfo
 */

export function searchCoursesStart() {
    return {
        type: 'courseInfo/SEARCH_COURSES_START',
    };
}

export function searchCourses() {
    return {
        type: 'courseInfo/SEARCH_COURSES'
    };
}

export function searchCourseByName(courseName) {
    return {
        type: 'courseInfo/SEARCH_COURSE_BY_NAME',
        payload: { courseName }
    };
}

export function searchCoursesFinishSuccess(courses) {
    return {
        type: 'courseInfo/SEARCH_COURSES_FINISH_SUCCESS',
        payload: { courses },
    };
}

export function searchCourseByNameFinishSuccess(courses) {
    return {
        type: 'courseInfo/SEARCH_COURSE_BY_NAME_FINISH_SUCCESS',
        payload: { courses },
    };
}

export function searchCoursesFinishError() {
    return {
        type: 'courseInfo/SEARCH_COURSES_FINISH_ERROR',
        payload: {  },
    };
}