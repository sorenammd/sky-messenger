import { takeEvery, takeLatest, put, call } from "redux-saga/effects";
import chat from "../Actions/chatActions";
import HttpService from '../../Services/HttpService';
const httpService = new HttpService();
const saveMessageWorker = function* (action) {
    try {
        const result = yield call(() => {
            const token = localStorage.getItem('token');
            return httpService.post('chat/messages', action.payload, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        });
        yield put({ type: chat.SAVE_MESSAGE_SUCCESS, payload: action.payload });
    } catch (error) {
        yield put({ type: chat.SAVE_MESSAGE_FAILED, payload: {} });
    }

};
export const saveMessageWatcher = function* () {
    yield takeLatest(chat.SAVE_MESSAGE_INIT, saveMessageWorker);
};
const sendMessageWorker = function* (action) {
    try {
        yield put({ type: chat.SEND_MESSAGE_SUCCESS, payload: action.payload });
    } catch (error) {
        yield put({ type: chat.SEND_MESSAGE_FAILED, payload: {} });
    }

};
export const sendMessageWatcher = function* () {
    yield takeLatest(chat.SEND_MESSAGE_INIT, sendMessageWorker);
};
const newChatWorker = function* (action) {
    try {
        const result = yield call(() => {
            const token = localStorage.getItem('token');
            return httpService.post('chat', action.payload, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        });
        const { id, participants } = result.data.chat;
        yield put({ type: chat.NEW_CHAT_SUCCESS, payload: { id, participants, messages: [] } });
    } catch (error) {
        yield put({ type: chat.NEW_CHAT_FAILED, payload: {} });
    }

};
export const newChatWatcher = function* () {
    yield takeLatest(chat.NEW_CHAT_INIT, newChatWorker);
}
const finishChatWorker = function* (action) {
    try {
        const result = yield call(() => {
            const token = localStorage.getItem('token');
            return httpService.post('chat/finish', action.payload, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        });
        yield put({ type: chat.FINISH_CHAT_SUCCESS, payload: {} });
    } catch (error) {
        yield put({ type: chat.FINISH_CHAT_FAILED, payload: {} });
    }

};
export const finishChatWatcher = function* () {
    yield takeLatest(chat.FINISH_CHAT_INIT, finishChatWorker);
}
const activateRecentChatWorker = function* (action) {
    try {
        const result = yield call(() => {
            const token = localStorage.getItem('token');
            return httpService.post('chat/recent', action.payload, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        });
        if (result.data.success) {
            yield put({ type: chat.ACTIVATE_RECENT_CHAT_SUCCESS, payload: result.data });
        }
    } catch (error) {
        yield put({ type: chat.ACTIVATE_RECENT_CHAT_FAILED, payload: {} });
    }

};
export const activateRecentChatWatcher = function* () {
    yield takeLatest(chat.ACTIVATE_RECENT_CHAT_INIT, activateRecentChatWorker);
}