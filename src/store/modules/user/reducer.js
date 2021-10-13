import produce from 'immer';

const INITIAL_STATE = {
    user: {},
    isLogged: false,
    searchCoursesWithSuccess: 0,
    searchCourseByNameWithSuccess: false
};

export default function userInfox(state = INITIAL_STATE, { type, payload }) {
    return produce(state, (draft) => {
        switch (type) {
            case 'user/MAKE_LOGIN_FINISH_SUCCESS': {
                draft.info = payload.user;
                draft.isLogged = true;
                break;
            }
            default:
        }
    });
}