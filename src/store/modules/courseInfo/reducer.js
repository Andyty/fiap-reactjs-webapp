/**
 * Objeto que organiza o reducer do módulo busInfo
 */

import produce from 'immer';

const INITIAL_STATE = {
    courses: [],
    isConnectingSearchBusLines: false,
    searchCoursesWithSuccess: 0,
    searchCourseByNameWithSuccess: false
};

export default function courseInfo(state = INITIAL_STATE, { type, payload }) {
    return produce(state, (draft) => {
        switch (type) {
            case 'courseInfo/SEARCH_COURSES_START': {
                draft.courses = [];
                draft.isConnectingSearchCourses = true;
                draft.searchCoursesWithSuccess = 0;
                break;
            }
            case 'courseInfo/SEARCH_COURSES_FINISH_SUCCESS': {
                draft.courses = payload.courses;
                draft.isConnectingSearchCourses = false;
                draft.searchCoursesWithSuccess = 1;
                break;
            }
            case 'courseInfo/SEARCH_COURSE_BY_NAME_FINISH_SUCCESS': {
                draft.courses = payload.courses;
                draft.isConnectingSearchCourses = false;
                draft.searchCourseByNameWithSuccess = 1;
                break;
            }
            case 'courseInfo/SEARCH_COURSES_FINISH_ERROR': {
                draft.courses = [];
                draft.isConnectingSearchCourses = false;
                draft.searchCoursesWithSuccess = 2;
                break;
            }
            default:
        }
    });
}