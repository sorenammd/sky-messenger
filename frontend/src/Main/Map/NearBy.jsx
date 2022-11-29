import React from 'react';
import Map from './Map';
import { connect } from 'react-redux';
function NearBy({ onlineUsers }) {
    return (
        <Map current={{ lat: 35.722235, lng: 51.331974 }} zoom={15} onlineUsers={onlineUsers} />
    )
}
export default connect(
    state => ({
        onlineUsers: state.main.onlineUsers
    }),
    dispatch => ({})
)(NearBy);
