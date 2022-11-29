import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import userActions from '../Store/Actions/authActions';

function Login({ doLogin, authStatus, authMessage, isUserLoggedIn }) {
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
            {isUserLoggedIn && <Redirect to="/dashboard" />}
            <div className="sign">
                <div className="container">
                    {renderAuthMessage(authStatus, authMessage)}
                    <div className="item">
                        <form onSubmit={e => {
                            e.preventDefault();
                            doLogin({
                                email: document.querySelector('#email').value,
                                password: document.querySelector('#password').value,
                            });
                        }}>
                            <h2>ورود</h2>
                            <div className="form-group">
                                <input type="text" className="form-control" id="email" placeholder="ایمیل" required autoFocus />
                                <button className="btn prepend"><i data-eva="person"></i></button>
                            </div>
                            <div className="form-group">
                                <input type="password" id="password" className="form-control" placeholder="کلمه عبور" required />
                                <button className="btn prepend"><i data-eva="lock"></i></button>
                            </div>
                            <button type="submit" className="btn primary">ورود</button>
                            <span> ثبت نام نکرده اید؟
                            <Link to="/auth/register">ثبت نام</Link>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default connect(
    state => {
        return {
            authStatus: state.main.authStatus,
            authMessage: state.main.authMessage,
            isUserLoggedIn: state.main.isUserLoggedIn
        }
    },
    dispatch => {
        return {
            doLogin: (payload) => dispatch({ type: userActions.USER_LOGIN, payload })
        };
    })(Login);