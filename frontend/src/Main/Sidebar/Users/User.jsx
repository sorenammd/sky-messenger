import React, { useContext } from 'react'
import chatContext from '../../../Contexts/ChatContext';
export default function User({ user }) {
    const { eventManager } = useContext(chatContext);
    const sendChatRequest = (e, user) => {
        e.preventDefault();
        eventManager.fire('chatRequest', user);
    };
    return (
        <li>
            <div>
                <div className="status">
                    <img src={user.avatar} alt="avatar" className="avatar" />
                </div>
                <div className="content">
                    <h5>{user.name}</h5>
                </div>
                <div className="icon" title="درخواست گفتگو">
                    <a href="/#" onClick={e => { sendChatRequest(e, user); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-message-square"><g data-name="Layer 2"><g data-name="message-square"><rect width="24" height="24" opacity="0"></rect><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path></g></g></svg>
                    </a>
                </div>
            </div>
        </li>
    )
}
User.defaultProps = {
    name: 'کاربر آنلاین'
};
