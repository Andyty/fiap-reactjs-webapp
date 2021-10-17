/**
 * Objeto que reúne os Actions que alteram as informações no BusInfo
 */

export function makeLogin(payload) {
    console.log("Action makeLogin");
    return {
        type: 'user/MAKE_LOGIN',
        payload: payload,
    };
}

export function makeLoginFinishSuccess(user) {
    return {
        type: 'user/MAKE_LOGIN_FINISH_SUCCESS',
        payload: user,
    };
}

export function update(payload) {
    console.log("Action update");
    return {
        type: 'user/UPDATE',
        payload: payload,
    };
}

export function makeUpdateFinishSuccess(user) {
    return {
        type: 'user/MAKE_UPDATE_FINISH_SUCCESS',
        payload: user,
    };
}

export function logout() {
    console.log("Action logout");
    return {
        type: 'user/MAKE_LOGOUT',
    };
}