import React from 'react'
import Logo from '../Partials/Logo';
import { connect } from 'react-redux';
import mainActions from '../../Store/Actions/mainActions'
function Navigation({ me ,logout}) {
    const userLogOut = (e)=>{
        e.preventDefault();
        logout({})
    }
    return (
        <nav className="navigation">
            <div className="container">
                <a href="" target="_blank" className="logo" rel="home noopener noreferrer">
                    <Logo />
                </a>
                <ul className="nav" role="tablist">
                    <li><a href="#friends" className="active" data-toggle="tab" role="tab" aria-controls="friends" aria-selected="false"><i
                        data-eva="people" data-eva-animation="pulse"></i></a></li>
                    <li><a href="#conversations" data-toggle="tab" role="tab"
                        aria-controls="conversations" aria-selected="true"><i data-eva="message-square"
                            data-eva-animation="pulse"></i></a></li>

                    <li><a href="#notifications" data-toggle="tab" role="tab" aria-controls="notifications"
                        aria-selected="false"><i data-eva="bell" data-eva-animation="pulse"></i></a></li>
                    <li><a href="#settings" data-toggle="tab" role="tab" aria-controls="settings"
                        aria-selected="false"><i data-eva="settings" data-eva-animation="pulse"></i></a></li>
                    {/* <li>
                        <button type="button" className="btn mode">
                            <i data-eva="bulb" data-eva-animation="pulse"></i>
                            
                        </button>
                    </li> */}
                    <li>
                    <button type='button' className='btn mode' onClick={e =>{userLogOut(e)}}>
                        <i data-eva='log-out-outline' data-eva-animation='pulse'></i>
                       
                    </button>
                    </li>
                    <li>
                        <button type="button" className="btn">
                            <img src={me.avatar} alt="avatar" />
                            <i data-eva="radio-button-on"></i>
                        </button></li>
                </ul>
            </div>
        </nav>
    )
}
export default connect(state => ({ me: state.main.me }),
                        dispatch =>({logout:payload =>dispatch({type:mainActions.LOGOUT_REQUESTED,payload})}) )(Navigation);