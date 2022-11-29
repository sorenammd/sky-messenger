import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Container from './Container';
import Loader from './Partials/Loader';
import { Redirect } from 'react-router-dom';
function Main({ isUserLoggedIn, init, isInit }) {
    useEffect(() => {
        init();
    }, []);
    if (isInit) {
        return <Loader />
    }
    if (!isUserLoggedIn) {
        return <Redirect to="/auth/login" />
    }
    return <Container />
}
export default connect(
    state => ({
        isUserLoggedIn: state.main.isUserLoggedIn,
        isInit: state.main.isInit,
    }),
    dispatch => ({
        init: () => { dispatch({ type: "INIT_REQUESTED", payload: {} }); }
    })
)(Main);
