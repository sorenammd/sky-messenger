import React, { useContext, useState } from 'react';
import ChatTopBar from './ChatTopBar';
import ChatContent from './ChatContent';
import ChatForm from './ChatForm';
import { connect } from 'react-redux';
import ChatContext from '../../Contexts/ChatContext';
import ConversationContext from '../../Contexts/ConversationContext';
import { getSupportedMedia } from '../../Services/MediaService';
import MediaContent from './MediaContent';
import chatActions from '../../Store/Actions/chatActions';
function ActiveChat({ sendMessage, me, saveMessage }) {
    const chat=useContext(ChatContext);
    const { sender, receiver }=useContext(ConversationContext);
    const { peerService, eventManager }=chat;
    const [mediaStream, setMediaStream]=useState(null);
    if (sender) {
        sender.on('data', data => {
            sendMessage(data);
        });
    }
    if (receiver) {
        receiver.on('data', data => {
            sendMessage(data);
        });
    }
    peerService.on('call', call => {
        navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then(stream => {
            call.answer(stream);
            call.on(stream, remoteStream => {
                const mediaType=getSupportedMedia(remoteStream);
                setMediaStream({ type: mediaType, stream: remoteStream });
            });
        }).catch(err => console.log(err));
    });
    eventManager.on('message', (data) => {
        if (sender) {
            sender.send({ ...data, sender: me.hash, created_at: new Date() });
        }
        if (receiver) {
            receiver.send({ ...data, sender: me.hash, created_at: new Date() });
        }
        saveMessage({ ...data, sender: me.hash, created_at: new Date() });
    });
    eventManager.on('startVideoCall', data => {
        navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then(stream => {
            const mediaConnection=peerService.call(data.to, stream);
            mediaConnection.on('stream', remoteStream => {
                const mediaType=getSupportedMedia(remoteStream);
                setMediaStream({ type: mediaType, stream: remoteStream });
            });
        }).catch(err => console.log(err));
    });
    return (
        <div className="content">
            <ChatTopBar />
            {mediaStream!==null? <MediaContent mediaStream={mediaStream} />:<ChatContent />}
            <ChatForm />
        </div>
    )
}
export default connect(
    state => ({
        me: state.main.me,
    }),
    dispatch => ({
        sendMessage: payload => dispatch({ type: chatActions.SEND_MESSAGE_INIT, payload }),
        saveMessage: payload => dispatch({ type: chatActions.SAVE_MESSAGE_INIT, payload })
    })
)(ActiveChat); 
