import mainActions from "../Actions/mainActions";
import authActions from '../Actions/authActions';

const mainState = {
    authStatus: null,
    authMessage: null,
    isUserLoggedIn: false,
    isInit: true,
    me: null,
    onlineUsers: [],
    recentChats: [],
};
const main = (state = mainState, action) => {
    let newState = state;
    switch (action.type) {
        case authActions.USER_LOGIN_SUCCESS:
            newState = { ...state, ...action.payload };
            break;
        case authActions.USER_LOGIN_FAILED:
            newState = { ...state, authStatus: action.payload.status, authMessage: action.payload.message };
            break;
        case authActions.USER_REGISTER_SUCCESS:
            newState = { ...state, ...action.payload };
            break;
        case authActions.USER_REGISTER_FAILED:
            newState = { ...state, ...action.payload };
            break;
        case mainActions.INIT_SUCCESS:
            newState = {
                ...state,
                isInit: false,
                me: action.payload.me,
                isUserLoggedIn: true,
                recentChats: action.payload.userRecentChats,

            };
            break;
        case mainActions.INIT_FAILED:
            newState = { ...state, ...action.payload, isInit: false, isUserLoggedIn: false };
            break;
        case mainActions.UPDATE_ONLINE_USER_SUCCESS:
            newState = { ...state, onlineUsers: action.payload.onlineUsers };
            break;
        case mainActions.UPDATE_ONLINE_USER_FAILED:
            newState = { ...state };
            break;
        case mainActions.LOGOUT_SUCCESS:
            newState ={...state ,...action.payload};
            break;
        case mainActions.LOGOUT_FAILED:
            newState ={...state};
            break;
        default:
            newState = state;
            break;

    }
    return newState;
};
export default main;