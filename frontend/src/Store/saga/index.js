import { all } from "redux-saga/effects";



import * as authHandler from "./auth";
import * as mainHandler from "./main";
import * as chatHandler from './chat';


export default function* root() {
    yield all([
        authHandler.userRegisterWatcher(),
        authHandler.userLoginWatcher(),
        mainHandler.initWatcher(),
        chatHandler.sendMessageWatcher(),
        chatHandler.saveMessageWatcher(),
        chatHandler.newChatWatcher(),
        chatHandler.finishChatWatcher(),
        mainHandler.updateOnlineUsersWatcher(),
        mainHandler.logoutWatcher(),
        chatHandler.activateRecentChatWatcher()
    ]);
}