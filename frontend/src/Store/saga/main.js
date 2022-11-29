import { takeLatest, put, call } from "redux-saga/effects";
import mainActions from "../Actions/mainActions";
import HttpService from "../../Services/HttpService";
const httpService = new HttpService();

const initWorker = function* (action) {

    try {
        const result = yield call(() => {
            const token = localStorage.getItem('token');
            return httpService.post('init', action.payload, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        });
        yield put({ type: mainActions.INIT_SUCCESS, payload: result.data });
    } catch (error) {
        yield put({ type: mainActions.INIT_FAILED, payload: { isInit: true } });
    }

};
export const initWatcher = function* () {
    yield takeLatest(mainActions.INIT_REQUESTED, initWorker);
};
const updateOnlineUsersWorker = function* (action) {
    try {
        yield put({ type: mainActions.UPDATE_ONLINE_USER_SUCCESS, payload: action.payload });
    } catch (error) {
        yield put({ type: mainActions.UPDATE_ONLINE_USER_FAILED, payload: null });
    }

};
export const updateOnlineUsersWatcher = function* () {
    yield takeLatest(mainActions.UPDATE_ONLINE_USER_INIT, updateOnlineUsersWorker);
};
const logOutWorker = function* (action){
    try{
        yield call(()=>{
            localStorage.removeItem('token');
        })
        yield put({type:mainActions.LOGOUT_SUCCESS,payload:{isUserLoggedIn:false}})
    } catch(error){
        yield put({type:mainActions.LOGOUT_FAILED,payload:null})
    }
}
export const logoutWatcher = function* (){
    yield takeLatest(mainActions.LOGOUT_REQUESTED,logOutWorker)
}