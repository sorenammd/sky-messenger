import { takeLatest, put, call } from "redux-saga/effects";
import authActions from "../Actions/authActions";
import HttpService from "../../Services/HttpService";
const httpService = new HttpService();
const userRegisterWorker = function* (action) {
    try {
        const result = yield call(() => {
            return httpService.post('auth/register', action.payload)
        });
        yield put({ type: authActions.USER_REGISTER_SUCCESS, payload: { authStatus: true, authMessage: result.data.message } });
    } catch (error) {
        yield put({ type: authActions.USER_REGISTER_FAILED, payload: { authStatus: true, authMessage: error.message } });
    }
};
export const userRegisterWatcher = function* () {
    yield takeLatest(authActions.USER_REGISTER, userRegisterWorker);
};

const userLoginWorker = function* (action) {

    try {
        const result = yield call(() => {
            return httpService.post('auth/login', action.payload)
        });
        yield call(() => {
            localStorage.setItem('token', result.data.token);
        });
        yield put({ type: authActions.USER_LOGIN_SUCCESS, payload: { isUserLoggedIn: true, authStatus: true } });

    } catch (error) {
        yield put({ type: authActions.USER_LOGIN_FAILED, payload: error.response.data });
    }

};

export const userLoginWatcher = function* () {
    yield takeLatest(authActions.USER_LOGIN, userLoginWorker);
};