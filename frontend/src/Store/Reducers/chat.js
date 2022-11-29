import actions from "../Actions/chatActions";

const chatState = {
    currentChat: null,
    currentChatMessages: []
};
const chat = (state = chatState, action) => {
    let newState = state;
    switch (action.type) {
        case actions.NEW_CHAT_SUCCESS:
            newState = { ...state, currentChat: action.payload };
            break;
        case actions.NEW_CHAT_FAILED:
            newState = { ...state, currentChat: null };
            break;
        case actions.SEND_MESSAGE_SUCCESS:
            newState = {
                ...state,
                currentChatMessages: [...state.currentChatMessages,
                { ...action.payload }]
            };
            break;
        case actions.SEND_MESSAGE_FAILED:
            newState = { ...state, };
            break;
        case actions.SAVE_MESSAGE_SUCCESS:
            newState = {
                ...state,
                currentChatMessages: [...state.currentChatMessages,
                { ...action.payload }]
            };
            break;
        case actions.SAVE_MESSAGE_FAILED:
            newState = { ...state, };
            break;
        case actions.FINISH_CHAT_SUCCESS:
            newState = { ...state, currentChat: null, currentChatMessages: [] };
            break;
        case actions.FINISH_CHAT_FAILED:
            newState = { ...state, };
            break;
        case actions.ACTIVATE_RECENT_CHAT_SUCCESS:
            newState = {
                ...state,
                currentChat: action.payload.chat.currentChat,
                currentChatMessages: action.payload.chat.currentChatMessages
            };
            break;
        case actions.ACTIVATE_RECENT_CHAT_FAILED:
            newState = { ...state, };
            break;
        default:
            newState = state;
            break;
    }
    return newState;
};
export default chat;