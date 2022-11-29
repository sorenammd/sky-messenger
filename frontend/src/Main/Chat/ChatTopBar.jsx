import React, { useContext } from 'react'
import ChatContext from '../../Contexts/ChatContext';
import chatActions from '../../Store/Actions/chatActions';
import { connect } from 'react-redux';
function ChatTopBar({ currentChat, me }) {
    const { eventManager } = useContext(ChatContext);
    const { participants } = currentChat;
    const otherParticipantHash = Object.keys(participants).filter(item => item !== me.hash).pop();
    const { name, avatar } = participants[otherParticipantHash];
    const finishCurrentChat = (e) => {
        e.preventDefault();
        eventManager.fire('finishChat', { chatID: currentChat.id, to: otherParticipantHash });
    };
    const startVideoCall = (e, data) => {
        eventManager.fire('startVideoCall', data);
    };
    const renderAvailableButtons = () => {
        return <>
            <li>
                <button onClick={e => { startVideoCall(e, { to: otherParticipantHash }) }} type="button" className="btn">
                    <i className="material-icons">
                        videocam
                        </i>
                </button>
            </li>
            <li>
                {/* <button  type="button" className="btn" >
                    <i className="material-icons">
                        local_phone
                    </i>
                </button> */}
            </li>
            <li>
                <button onClick={e => { finishCurrentChat(e) }} type="button" className="btn">
                    <i className="material-icons">exit_to_app</i>
                </button>
            </li></>;
    };
    return (
        <div className="container">
            <div className="top">
                <div className="headline">
                    <img src={avatar} alt="avatar" />
                    <div className="content">
                        <h5>{name}</h5>
                        <span>{'خوشحال'}</span>
                    </div>
                </div>
                <ul>
                    {renderAvailableButtons()}
                </ul>
            </div>
        </div>
    )
}
export default connect(state => ({
    currentChat: state.chat.currentChat,
    me: state.main.me
}), dispatch => ({
}))(ChatTopBar);