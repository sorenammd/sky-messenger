import React, { useContext } from 'react';
import ChatContext from '../../../Contexts/ChatContext';
export default function RecentChatItem({ recentChat }) {
    const { eventManager } = useContext(ChatContext);
    return (
        <li>
            <a onClick={e => {
                eventManager.fire('activateRecentChat', { chatID: recentChat._id });
            }} href="#chat1" className="filter direct active" data-chat="open" data-toggle="tab" role="tab" aria-controls="chat1" aria-selected="true" >
                <div className="status"><img src={recentChat.user.details.avatar} alt="avatar" />
                </div>
                <div className="content">
                    <div className="headline">
                        <h5>{recentChat.user.details.name}</h5>
                        <span>{new Date(recentChat.created_at).toLocaleDateString('fa-IR')}</span>
                    </div>
                    <p>{recentChat.lastMessage ? recentChat.lastMessage.content : ''}</p>
                </div>
            </a>
        </li>
    )
}
