import React, { Component } from 'react'
import Notifications from './Notfications';
import Settings from './Settings';
import RecentChats from './RecentChats';
import Users from './Users/Users';
export default class index extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="container">
                    <div className="tab-content">
                        <Users />
                        <RecentChats />
                        <Notifications />
                        <Settings />
                    </div>
                </div>
            </div>
        )
    }
}
