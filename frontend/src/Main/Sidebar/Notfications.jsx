import React, { Component } from 'react'

export default class Notfications extends Component {
    render() {
        return (
            <div className="tab-pane fade" id="notifications" role="tabpanel">
                <div className="top">
                    <form>
                        <input type="search" className="form-control" placeholder="جستجو" />
                        <button type="submit" className="btn prepend"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-search"><g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"></rect><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path></g></g></svg></button>
                    </form>
                </div>
                <div className="middle">
                    <h4>اعلانات</h4>
                    <hr />
                    <ul className="notifications">
                        <li>
                            <div className="round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-person-done"><g data-name="Layer 2"><g data-name="person-done"><rect width="24" height="24" opacity="0"></rect><path d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33 1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41z"></path><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"></path><path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"></path></g></g></svg></div>
                            <p>Quincy has joined to <strong>Squad Ghouls</strong> group.</p>
                        </li>
                        <li>
                            <div className="round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-lock"><g data-name="Layer 2"><g data-name="lock"><rect width="24" height="24" opacity="0"></rect><circle cx="12" cy="15" r="1"></circle><path d="M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM12 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"></path></g></g></svg></div>
                            <p>You need change your password for security reasons.</p>
                        </li>
                        <li>
                            <div className="round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-attach"><g data-name="Layer 2"><g data-name="attach"><rect width="24" height="24" opacity="0"></rect><path d="M9.29 21a6.23 6.23 0 0 1-4.43-1.88 6 6 0 0 1-.22-8.49L12 3.2A4.11 4.11 0 0 1 15 2a4.48 4.48 0 0 1 3.19 1.35 4.36 4.36 0 0 1 .15 6.13l-7.4 7.43a2.54 2.54 0 0 1-1.81.75 2.72 2.72 0 0 1-1.95-.82 2.68 2.68 0 0 1-.08-3.77l6.83-6.86a1 1 0 0 1 1.37 1.41l-6.83 6.86a.68.68 0 0 0 .08.95.78.78 0 0 0 .53.23.56.56 0 0 0 .4-.16l7.39-7.43a2.36 2.36 0 0 0-.15-3.31 2.38 2.38 0 0 0-3.27-.15L6.06 12a4 4 0 0 0 .22 5.67 4.22 4.22 0 0 0 3 1.29 3.67 3.67 0 0 0 2.61-1.06l7.39-7.43a1 1 0 1 1 1.42 1.41l-7.39 7.43A5.65 5.65 0 0 1 9.29 21z"></path></g></g></svg></div>
                            <p>Mark attached the file <strong>workbox.js</strong>.</p>
                        </li>
                        <li>
                            <div className="icon round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-gift"><g data-name="Layer 2"><g data-name="gift"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M4.64 15.27v4.82a.92.92 0 0 0 .92.91h5.62v-5.73z"></path><path d="M12.82 21h5.62a.92.92 0 0 0 .92-.91v-4.82h-6.54z"></path><path d="M20.1 7.09h-1.84a2.82 2.82 0 0 0 .29-1.23A2.87 2.87 0 0 0 15.68 3 4.21 4.21 0 0 0 12 5.57 4.21 4.21 0 0 0 8.32 3a2.87 2.87 0 0 0-2.87 2.86 2.82 2.82 0 0 0 .29 1.23H3.9c-.5 0-.9.59-.9 1.31v3.93c0 .72.4 1.31.9 1.31h7.28V7.09h1.64v6.55h7.28c.5 0 .9-.59.9-1.31V8.4c0-.72-.4-1.31-.9-1.31zm-11.78 0a1.23 1.23 0 1 1 0-2.45c1.4 0 2.19 1.44 2.58 2.45zm7.36 0H13.1c.39-1 1.18-2.45 2.58-2.45a1.23 1.23 0 1 1 0 2.45z"></path></g></g></svg></div>
                            <p>Sara has a birthday today. Wish her all the best.</p>
                        </li>
                        <li>
                            <div className="round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-person"><g data-name="Layer 2"><g data-name="person"><rect width="24" height="24" opacity="0"></rect><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"></path><path d="M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"></path></g></g></svg></div>
                            <p>Sanne has accepted your friend request.</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
