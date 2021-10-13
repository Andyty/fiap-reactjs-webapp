/**
 * Objeto que reúne os Actions que alteram as informações no CourseInfo
 */

export function searchCoursesStart() {
    return {
        type: 'course/SEARCH_COURSES_START',
    };
}

export function searchCourses() {
    return {
        type: 'course/SEARCH_COURSES'
    };
}

export function searchCourseByName(courseName) {
    return {
        type: 'course/SEARCH_COURSE_BY_NAME',
        payload: { courseName }
    };
}

export function searchCourseById(courseId) {
    return {
        type: 'course/SEARCH_COURSE_BY_ID',
        payload: { courseId }
    };
}

export function searchCourseByIdFinishSuccess(course) {
    return {
        type: 'course/SEARCH_COURSE_BY_ID_FINISH_SUCCESS',
        payload: { course },
    };
}

export function searchCoursesFinishSuccess(courses) {
    return {
        type: 'course/SEARCH_COURSES_FINISH_SUCCESS',
        payload: { courses },
    };
}

export function searchCourseByNameFinishSuccess(courses) {
    return {
        type: 'course/SEARCH_COURSE_BY_NAME_FINISH_SUCCESS',
        payload: { courses },
    };
}

export function searchCoursesFinishError() {
    return {
        type: 'course/SEARCH_COURSES_FINISH_ERROR',
        payload: {  },
    };
}