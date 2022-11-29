import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import userActions from '../Store/Actions/authActions';
import { Link, Redirect } from 'react-router-dom';
function Register({ registerUser, authStatus, authMessage }) {
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    useEffect(() => {
        if (authStatus) {
            setTimeout(() => {
                setRedirectToLogin(true);
            }, 30000);
        }
    }, [authStatus]);

    const renderAuthMessage = (authStatus, authMessage) => {
        if (authStatus === null || authMessage === null) {
            return '';
        }
        return <div className="row">
            <div className="col">
                <div className={`alert alert-${authStatus ? 'success' : 'danger'}`}>
                    {authMessage}
                </div>
            </div>
        </div>
    };
    return (

        <>
            {redirectToLogin && <Redirect to="/auth/login" />}
            <div className="sign">
                <div className="container">
                    {renderAuthMessage(authStatus, authMessage)}
                    <div className="item">
                        <form onSubmit={e => {
                            e.preventDefault();
                            registerUser({
                                full_name: document.querySelector('#userName').value,
                                email: document.querySelector('#userEmail').value,
                                password: document.querySelector('#userPassword').value,
                            });
                        }}>
                            <h2>ثبت نام</h2>
                            <div className="form-group">
                                <input type="text" id="userName" className="form-control" placeholder="مانند محمد بهرامی اصل" required autoFocus />
                                <button className="btn prepend"><i data-eva="person"></i></button>
                            </div>
                            <div className="form-group">
                                <input type="email" id="userEmail" className="form-control" placeholder="مانند mohammad.ba@gmail.com" required />
                                <button className="btn prepend"><i data-eva="email"></i></button>
                            </div>
                            <div className="form-group">
                                <input type="password" id="userPassword" className="form-control" placeholder="********" required />
                                <button className="btn prepend"><i data-eva="lock"></i></button>
                            </div>
                            <button type="submit" className="btn primary">ثبت نام</button>
                            <span>اکانت دارید؟
                            <Link to="/auth/login">ورود</Link>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default connect(state => {
    return {
        authStatus: state.main.authStatus,
        authMessage: state.main.authMessage
    };
}, dispatch => {
    return {
        registerUser: (payload) => {
            dispatch({
                type: userActions.USER_REGISTER,
                payload
            });
        }
    };
})(Register);