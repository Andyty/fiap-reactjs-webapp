/**
 * Objeto que reúne as sagas deste módulo
 */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { makeLoginFinishSuccess, makeUpdateFinishSuccess } from "./actions";
import AlgaworksAPI from "../../../Services/AlgaworksAPI";

function* makeLogin({ payload }) {
    try {
        const { email, password } = payload
        const userByEmail = yield call(AlgaworksAPI.getUserByEmail, email);

        console.log(userByEmail);

        if (userByEmail?.password === password) {
            console.log("Success Call");
            yield put(makeLoginFinishSuccess(userByEmail));
        } else {
            console.log("NOT SUCCESS");
        }
    } catch (err) {
        console.log(err);
        console.log("Error Call");
    }
}

function* update({ payload }) {
    try {
        const updateUser = yield call(AlgaworksAPI.updateUser, payload);

        console.log(updateUser);

        if (updateUser) {
            yield put(makeUpdateFinishSuccess(payload))
        } else {
            console.log("NOT SUCCESS");
        }
    } catch (err) {
        console.log(err);
        console.log("Error Call");
    }
}


export default all([
    takeLatest('user/MAKE_LOGIN', makeLogin),
    takeLatest('user/UPDATE', update),
]);