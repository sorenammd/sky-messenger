import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import * as eva from 'eva-icons';
import PeerService from '../Services/PeerService';
import ClientService from '../Services/ClientService';
import SockClient from '../Services/SockClient';
import ChatContext from '../Contexts/ChatContext';
import EventManager from '../EventManager';
class Container extends PureComponent {
    constructor(props) {
        super(props);
        this.clientService = new ClientService();
        this.peerService = new PeerService();
        this.socket = new SockClient();
    }
    componentDidMount() {
        eva.replace();
    }
    buildContextData = (me) => {
        if (me) {
            this.clientService.setCurrentClient(me);
            this.peerService.setClient(this.clientService);
            this.socket.setClient(this.clientService);
            this.socket.connect();
            return {
                peerService: this.peerService.init(),
                eventManager: new EventManager(),
                socketService: this.socket
            };
        }
        return {

        };
    }
    render() {
        return (
            <div className="layout">
                <ChatContext.Provider value={this.buildContextData(this.props.me)}>
                    <Dashboard />
                </ChatContext.Provider>
            </div>
        )
    }
}

export default connect(
    state => (
        {
            me: state.main.me,
        }
    ),
    dispatch => {
        return {

        };
    })(Container);