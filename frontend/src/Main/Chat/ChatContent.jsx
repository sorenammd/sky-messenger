import React from 'react';
import { connect } from 'react-redux';
import Me from './Participants/Me';
import Other from './Participants/Other';

function ChatContent({ messages, me }) {
    const renderMessages = messages.map((message, index) => {
        return message.sender === me.hash ? <Me key={index} {...message} /> : <Other key={index} {...message} />;
    });
    return (
        <div className="middle" id="scroll">
            <div className="container">
                <ul>
                    {renderMessages}
                </ul>
            </div>
        </div>
    )
}

export default connect(state => ({ me: state.main.me, messages: state.chat.currentChatMessages }), dispatch => ({}))(ChatContent);
