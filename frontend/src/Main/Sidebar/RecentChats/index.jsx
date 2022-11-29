import React from 'react'
import { connect } from 'react-redux';
import RecentChatItem from './RecentChatItem';
import NoRecentChat from './NoRecentChat';
function index({ recentChats, me }) {
    const hasRecentChat = recentChats.length > 0;
    const renderRecentChats = recentChats.map(recentChat => <RecentChatItem key={recentChat._id} recentChat={recentChat} />);
    return (
        <div className="tab-pane fade show" id="conversations" role="tabpanel">
            <div className="middle">
                <h4>گفتگوهای اخیر </h4>
                <hr />
                <ul className="nav discussions" role="tablist">
                    {hasRecentChat && renderRecentChats}
                    {!hasRecentChat && <NoRecentChat />}
                </ul>
            </div >
        </div>
    )
}
index.defaultProps = {
    recentChats: []
};
export default connect(
    state => ({
        recentChats: state.main.recentChats,
        me: state.main.me
    }),
    dispatch => ({})
)(index);