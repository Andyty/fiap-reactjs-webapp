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