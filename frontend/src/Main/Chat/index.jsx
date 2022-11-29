import React from 'react';
import ChatUtilities from './ChatUtility';
import ActiveChat from './ActiveChat';
export default function Chat() {

    return (
        <div className="chat">
            <div className="tab-content">
                <div className="tab-pane fade show active" id="chat1" role="tabpanel">
                    <div className="item">
                        <ActiveChat />
                        <ChatUtilities />
                    </div>
                </div>
            </div>
        </div>
    )
}
