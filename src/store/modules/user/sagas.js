/**
 * Objeto que reúne as sagas deste módulo
 */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { makeLoginFinishSuccess } from "./actions";
import AlgaworksAPI from "../../../Services/AlgaworksAPI";

function* makeLogin({payload}) {
    try {
        // yield put(searchCoursesStart());
        const { email, password } = payload
        const userByEmail = yield call(AlgaworksAPI.getUserByEmail, email);

        console.log(userByEmail[0]);

        if (userByEmail && userByEmail[0].password == password) {
            console.log("Success Call");
            yield put(makeLoginFinishSuccess({user: userByEmail[0]} ));
        } else {
            console.log("NOT SUCCESS");
            // yield put(searchCoursesFinishError());
        }
    } catch (err) {
        console.log(err);
        console.log("Error Call");
        // yield put(searchCoursesFinishError());
    }
}

export default all([
    takeLatest('user/MAKE_LOGIN', makeLogin),
]);