import React from 'react'
import User from './User';
import NoUser from './NoUser';
import { connect } from 'react-redux';
function Users({ onlineUsers, me }) {
    const renderUsers=onlineUsers.map(user => {
        if (user.user.hash!==me.hash) {
            return <User key={user.user.hash} user={user.user} />;
        }
        return null;
    });
    const hasOnlineUser=renderUsers.length>0;
    return (
        <div className="tab-pane active fade show" id="friends" role="tabpanel">
            <div className="top">
            </div>
            <div className="middle">
                <h4>کاربران آنلاین</h4>
                <hr />
                <ul className="users">
                    {hasOnlineUser&&renderUsers}
                    {!hasOnlineUser&&<NoUser />}
                </ul>
            </div>
        </div>
    )
}
Users.defaultProps={
    onlineUsers: []
};
export default connect(state => ({
    onlineUsers: state.main.onlineUsers,
    me: state.main.me
}), dispatch => ({

}))(Users);