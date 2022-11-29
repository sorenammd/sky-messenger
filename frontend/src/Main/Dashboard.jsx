import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Compose from './Partials/Compose';
import NearBy from './Map/NearBy';
import chatContext from '../Contexts/ChatContext';
import Notification from '../Services/Notification';
import chatActions from '../Store/Actions/chatActions';
import ConversationContext from '../Contexts/ConversationContext';
import mainActions from '../Store/Actions/mainActions';
function Dashboard({
    initNewChat,
    finishChat,
    currentChat,
    me,
    updateOnlineUsers,
    activateRecentChat
}) {
    const chat = useContext(chatContext);
    const { peerService, eventManager, socketService } = chat;
    const [requestSender, setRequestSender] = useState(null);
    const [requestReceiver, setRequestReceiver] = useState(null);
    socketService.$on('newChatRequest', data => {
        Notification.fire({
            title: 'درخواست گفتگو',
            text: "یک درخواست گفتگو برای شما ارسال شده  است.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'قبول',
            cancelButtonText: 'رد',
        }).then(result => {
            if (result.value) {
                socketService.$emit('newChatResponse', {
                    to: data.requestor,
                    sender: me.hash,
                    answer: true
                });

            } else {
                socketService.$emit('newChatResponse', {
                    to: data.requestor,
                    sender: me.hash,
                    answer: false
                });
            }
        });
    });
    socketService.$on('newChatResponse', data => {
        if (data.answer) {
            const connection = peerService.connect(data.sender);
            setRequestSender(connection);
            initNewChat({
                participant: data.sender
            });
        } else {
            Notification.fire({
                title: 'نتیجه درخواست گفتگو',
                icon: 'error',
                text: 'درخواست شما پذیرفته نشد ',
                confirmButtonText: 'باشه'
            });
        }
    });
    socketService.$on('onlineUsers', data => {
        updateOnlineUsers({ onlineUsers: data.onlineUsers });
    });
    socketService.$on('finishChat', data => {
        finishChat(data);
    });
    peerService.on('connection', connection => {
        initNewChat({
            participant: connection.peer
        });
        setRequestReceiver(connection);
    });

    if (eventManager) {
        eventManager.on('chatRequest', user => {
            Notification.fire({
                title: 'ارسال درخواست',
                icon: 'success',
                text: 'در صورت تایید به صفحه گفتگو هدایت خواهید شد',
                confirmButtonText: 'باشه'
            });
            socketService.$emit('newChatRequest', {
                to: user.hash,
                requestor: me.hash
            });
        });
        eventManager.on('finishChat', data => {
            finishChat(data);
            socketService.$emit('finishChat', data);
        });
        eventManager.on('activateRecentChat', data => {
            activateRecentChat(data);
        });
    }
    const currentScene = currentChat ? <Chat /> : <NearBy />;

    return (
        <>
            <ConversationContext.Provider value={{ sender: requestSender, receiver: requestReceiver }}>
                <Navigation />
                <Sidebar />
                {currentScene}
                <Compose />
            </ConversationContext.Provider>
        </>
    )
}


export default connect(state => ({
    me: state.main.me,
    currentChat: state.chat.currentChat
}), dispatch => ({
    initNewChat: (payload) => dispatch({ type: chatActions.NEW_CHAT_INIT, payload }),
    finishChat: payload => dispatch({ type: chatActions.FINISH_CHAT_INIT, payload }),
    updateOnlineUsers: payload => dispatch({ type: mainActions.UPDATE_ONLINE_USER_INIT, payload }),
    activateRecentChat: payload => dispatch({ type: chatActions.ACTIVATE_RECENT_CHAT_INIT, payload })
}))(Dashboard);