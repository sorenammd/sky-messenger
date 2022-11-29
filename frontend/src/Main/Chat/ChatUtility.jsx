import React, { Component } from 'react'

export default class ChatUtility extends Component {
    render() {
        return (
            <div className="utility">
                <div className="container">
                    <button type="button" className="close" data-utility="open"><i
                        data-eva="close"></i></button>
                    <button type="button" className="btn primary" data-toggle="modal"
                        data-target="#compose">اضافه کردن افراد</button>
                    <ul className="nav" role="tablist">
                        <li><a href="#users" className="active" data-toggle="tab" role="tab"
                            aria-controls="users" aria-selected="true">کاربران</a></li>
                        <li><a href="#files" data-toggle="tab" role="tab" aria-controls="files"
                            aria-selected="false">فایل ها</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade active show" id="users" role="tabpanel">
                            <h4>کاربران</h4>
                            <hr />
                            <ul className="users">
                                <li>
                                    <div className="status online"><img src="/assets/img/avatars/avatar-male-1.jpg"
                                        alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                    <div className="content">
                                        <h5>پوریا رضایی</h5>
                                        <span>ایران تهران</span>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" className="btn" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i
                                                data-eva="more-vertical"></i></button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">ویرایش</button>
                                            <button type="button" className="dropdown-item">اشتراک
                                                گذاری</button>
                                            <button type="button" className="dropdown-item">حذف</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="status offline"><img
                                        src="/assets/img/avatars/avatar-male-2.jpg" alt="avatar" /><i
                                            data-eva="radio-button-on"></i></div>
                                    <div className="content">
                                        <h5>مصطفی قدیمی</h5>
                                        <span>ایران البرز</span>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" className="btn" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i
                                                data-eva="more-vertical"></i></button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">ویرایش</button>
                                            <button type="button" className="dropdown-item">اشتراک
                                                گذاری</button>
                                            <button type="button" className="dropdown-item">حذف</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="status online"><img src="/assets/img/avatars/avatar-male-3.jpg"
                                        alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                    <div className="content">
                                        <h5>حامد سبزیان</h5>
                                        <span>ایران البرز</span>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" className="btn" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i
                                                data-eva="more-vertical"></i></button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">ویرایش</button>
                                            <button type="button" className="dropdown-item">اشتراک
                                                گذاری</button>
                                            <button type="button" className="dropdown-item">حذف</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="status offline"><img
                                        src="/assets/img/avatars/avatar-male-4.jpg" alt="avatar" /><i
                                            data-eva="radio-button-on"></i></div>
                                    <div className="content">
                                        <h5>مجید هوشیار</h5>
                                        <span>ایران البرز</span>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" className="btn" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i
                                                data-eva="more-vertical"></i></button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">ویرایش</button>
                                            <button type="button" className="dropdown-item">اشتراک
                                                گذاری</button>
                                            <button type="button" className="dropdown-item">حذف</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="status offline"><img
                                        src="/assets/img/avatars/avatar-male-5.jpg" alt="avatar" /><i
                                            data-eva="radio-button-on"></i></div>
                                    <div className="content">
                                        <h5>لقمان آوند</h5>
                                        <span>ایران تهران</span>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" className="btn" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i
                                                data-eva="more-vertical"></i></button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">ویرایش</button>
                                            <button type="button" className="dropdown-item">اشتراک
                                                گذاری</button>
                                            <button type="button" className="dropdown-item">حذف</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="status online"><img src="/assets/img/avatars/avatar-male-6.jpg"
                                        alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                    <div className="content">
                                        <h5>کیوان علی محمدی</h5>
                                        <span>ایران البرز</span>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" className="btn" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i
                                                data-eva="more-vertical"></i></button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">ویرایش</button>
                                            <button type="button" className="dropdown-item">اشتراک
                                                گذاری</button>
                                            <button type="button" className="dropdown-item">حذف</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-pane fade" id="files" role="tabpanel">
                            <h4>فایل ها</h4>
                            <div className="upload">
                                <label>
                                    <input type="file" />
                                    <span>فایل ها را اینجا بکشید و رها کنید</span>
                                </label>
                            </div>
                            <ul className="files">
                                <li>
                                    <ul className="avatars">
                                        <li><button className="btn round"><i data-eva="file-text"></i></button>
                                        </li>
                                        <li><a href="#/"><img src="/assets/img/avatars/avatar-male-1.jpg"
                                            alt="avatar" /></a></li>
                                    </ul>
                                    <div className="meta">
                                        <a href="#/">
                                            <h5>workbox.js</h5>
                                        </a>
                                        <span>2kb</span>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" className="btn" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i
                                                data-eva="more-vertical"></i></button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">Edit</button>
                                            <button type="button" className="dropdown-item">Share</button>
                                            <button type="button" className="dropdown-item">Delete</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <ul className="avatars">
                                        <li><button className="btn round"><i data-eva="folder"></i></button>
                                        </li>
                                        <li><a href="#/"><img src="/assets/img/avatars/avatar-male-2.jpg"
                                            alt="avatar" /></a></li>
                                    </ul>
                                    <div className="meta">
                                        <a href="#/">
                                            <h5>bug_report</h5>
                                        </a>
                                        <span>1kb</span>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" className="btn" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i
                                                data-eva="more-vertical"></i></button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">Edit</button>
                                            <button type="button" className="dropdown-item">Share</button>
                                            <button type="button" className="dropdown-item">Delete</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <ul className="avatars">
                                        <li><button className="btn round"><i data-eva="briefcase"></i></button>
                                        </li>
                                        <li><a href="#/"><img src="/assets/img/avatars/avatar-male-3.jpg"
                                            alt="avatar" /></a></li>
                                    </ul>
                                    <div className="meta">
                                        <a href="#/">
                                            <h5>nuget.zip</h5>
                                        </a>
                                        <span>7mb</span>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" className="btn" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i
                                                data-eva="more-vertical"></i></button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">Edit</button>
                                            <button type="button" className="dropdown-item">Share</button>
                                            <button type="button" className="dropdown-item">Delete</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <ul className="avatars">
                                        <li><button className="btn round"><i data-eva="image-2"></i></button>
                                        </li>
                                        <li><a href="#/"><img src="/assets/img/avatars/avatar-male-4.jpg"
                                            alt="avatar" /></a></li>
                                    </ul>
                                    <div className="meta">
                                        <a href="#/">
                                            <h5>clearfix.jpg</h5>
                                        </a>
                                        <span>1kb</span>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" className="btn" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i
                                                data-eva="more-vertical"></i></button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">Edit</button>
                                            <button type="button" className="dropdown-item">Share</button>
                                            <button type="button" className="dropdown-item">Delete</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <ul className="avatars">
                                        <li><button className="btn round"><i data-eva="folder"></i></button>
                                        </li>
                                        <li><a href="#/"><img src="/assets/img/avatars/avatar-male-5.jpg"
                                            alt="avatar" /></a></li>
                                    </ul>
                                    <div className="meta">
                                        <a href="#/">
                                            <h5>package</h5>
                                        </a>
                                        <span>4mb</span>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" className="btn" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i
                                                data-eva="more-vertical"></i></button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">Edit</button>
                                            <button type="button" className="dropdown-item">Share</button>
                                            <button type="button" className="dropdown-item">Delete</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <ul className="avatars">
                                        <li><button className="btn round"><i data-eva="file-text"></i></button>
                                        </li>
                                        <li><a href="#/"><img src="/assets/img/avatars/avatar-male-6.jpg"
                                            alt="avatar" /></a></li>
                                    </ul>
                                    <div className="meta">
                                        <a href="#/">
                                            <h5>plugins.js</h5>
                                        </a>
                                        <span>3kb</span>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" className="btn" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><i
                                                data-eva="more-vertical"></i></button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button type="button" className="dropdown-item">Edit</button>
                                            <button type="button" className="dropdown-item">Share</button>
                                            <button type="button" className="dropdown-item">Delete</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
