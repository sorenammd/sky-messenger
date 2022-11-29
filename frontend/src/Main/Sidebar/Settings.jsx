import React, { Component } from 'react'

export default class Settings extends Component {
    render() {
        return (
            <div className="settings tab-pane fade" id="settings" role="tabpanel">
                <div className="user">
                    <label>
                        <input type="file" />
                        <img src="/assets/img/avatars/avatar-male-1.jpg" alt="avatar" />
                    </label>
                    <div className="content">
                        <h5>محمد محمدی</h5>
                        <span>ایران، نیشابور</span>
                    </div>
                </div>
                <h4>تنظیمات</h4>
                <ul id="preferences">
                    <li>
                        <a href="#/" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#account" aria-controls="account">
                            <div className="title">
                                <h5>حساب کاربری</h5>
                                <p>به روز رسانی پروفایل</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-forward"><g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path></g></g></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-downward"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"></rect><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"></path></g></g></svg>
                        </a>
                        <div className="content collapse" id="account" data-parent="#preferences">
                            <div className="inside">
                                <form className="account">
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>نام </label>
                                                <input type="text" name="firstName" id="firstName" className="form-control" placeholder="نام" defaultValue="name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>نام خانوادگی</label>
                                                <input type="text" className="form-control" placeholder="نام خانوادگی" defaultValue="lastname " name="lastName" id="lastName" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>ایمیل</label>
                                        <input type="email" className="form-control" placeholder="آدرس ایمیل خود را وارد کنید" name="email" id="email" defaultValue="mohamadi@gmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <label>کلمه عبور</label>
                                        <input type="password" className="form-control" name="password" id="password" placeholder="کلمه عبور را وارد کنید" defaultValue="*******" />
                                    </div>
                                    <div className="form-group">
                                        <label>بیو</label>
                                        <textarea className="form-control" name="bio" id="bio" placeholder="درباره خودتان بنویسید"></textarea>
                                    </div>
                                    <button type="submit" name="saveSettings" id="saveSettings" className="btn primary">ذخیره تنظیمات</button>
                                </form>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="#/" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#privacy" aria-controls="privacy">
                            <div className="title">
                                <h5>امنیت و حریم خصوصی</h5>
                                <p>مدیریت حریم خصوصی</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-forward"><g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path></g></g></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-downward"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"></rect><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"></path></g></g></svg>
                        </a>
                        <div className="content collapse" id="privacy" data-parent="#preferences">
                            <div className="inside">
                                <ul className="options">
                                    <li>
                                        <div className="headline">
                                            <h5>حالت امن</h5>
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked={false} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <p>می توانید تنظیم کنید کسی آنلاین بودن شما را ببیند یا خیر</p>
                                    </li>
                                    <li>
                                        <div className="headline">
                                            <h5>تاریخچه گپ ها</h5>
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked="" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <p>می توانید تنظیم کنید تاریخچه ها تا چه زمانی در دسترس باشند.</p>
                                    </li>
                                    <li>
                                        <div className="headline">
                                            <h5>دسترسی به دوربین</h5>
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <p></p>
                                    </li>
                                    <li>
                                        <div className="headline">
                                            <h5>دسترسی به میکرفون</h5>
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <p></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="#/" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#alerts" aria-controls="alerts">
                            <div className="title">
                                <h5>اعلانات</h5>
                                <p>روش یا خاموش کردن اعلانات</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-forward"><g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path></g></g></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-downward"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"></rect><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"></path></g></g></svg>
                        </a>
                        <div className="content collapse" id="alerts" data-parent="#preferences">
                            <div className="inside">
                                <ul className="options">
                                    <li>
                                        <div className="headline">
                                            <h5>پیام های روی صفحه</h5>
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked="" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <p>می توانید تنظیم کنید پیام ها روی صفحه ظاهر شوند یا خیر/</p>
                                    </li>
                                    <li>
                                        <div className="headline">
                                            <h5>لرزش صفحه</h5>
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <p>می توانید تعیین کنید در هنگام پیام صفحه لرزش داشته باشد یا خیر</p>
                                    </li>
                                    <li>
                                        <div className="headline">
                                            <h5>صدا</h5>
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked="" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <p>در هنگام پیام جدید،صدا پخش شود یا خیر</p>
                                    </li>
                                    <li>
                                        <div className="headline">
                                            <h5>نور</h5>
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <p>نور صفحه در هنگام پیام جدید به چه صورت باشد</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#/" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#integrations" aria-controls="integrations">
                            <div className="title">
                                <h5>ادغام سازی</h5>
                                <p>استفاده از شبکه های اجتماعی</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-forward"><g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path></g></g></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-downward"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"></rect><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"></path></g></g></svg>
                        </a>
                        <div className="content collapse" id="integrations" data-parent="#preferences">
                            <div className="inside">
                                <ul className="integrations">
                                    <li>
                                        <button className="btn round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-google"><g data-name="Layer 2"><g data-name="google"><polyline points="0 0 24 0 24 24 0 24" opacity="0"></polyline><path d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93 6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29 10.12 10.12 0 0 0 11.57 22 10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"></path></g></g></svg></button>
                                        <div className="content">
                                            <div className="headline">
                                                <h5>گوگل</h5>
                                                <label className="switch">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <span>خواندن، نوشتن،ویرایش</span>
                                        </div>
                                    </li>
                                    <li>
                                        <button className="btn round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-facebook"><g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"></path></g></g></svg></button>
                                        <div className="content">
                                            <div className="headline">
                                                <h5>فیس بوک</h5>
                                                <label className="switch">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <span>خواندن،نوشتن،ویرایش</span>
                                        </div>
                                    </li>
                                    <li>
                                        <button className="btn round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-twitter"><g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"></polyline><path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"></path></g></g></svg></button>
                                        <div className="content">
                                            <div className="headline">
                                                <h5>توئیتر</h5>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <span>بدون دسترسی</span>
                                        </div>
                                    </li>
                                    <li>
                                        <button className="btn round"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-linkedin"><g data-name="Layer 2"><g data-name="linkedin"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z"></path><rect x="3" y="9.3" width="4.5" height="11.7" rx=".9" ry=".9"></rect><circle cx="5.25" cy="5.25" r="2.25"></circle></g></g></svg></button>
                                        <div className="content">
                                            <div className="headline">
                                                <h5>لینکد این</h5>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <span>بدون دسترسی</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="#/" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#appearance" aria-controls="appearance">
                            <div className="title">
                                <h5>ظاهر برنامه</h5>
                                <p>سفارشی سازی ظاهر برنامه</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-forward"><g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path></g></g></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-arrow-ios-downward"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"></rect><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"></path></g></g></svg>
                        </a>
                        <div className="content collapse" id="appearance" data-parent="#preferences">
                            <div className="inside">
                                <ul className="options">
                                    <li>
                                        <div className="headline">
                                            <h5>حالت شب</h5>
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round mode"></span>
                                            </label>
                                        </div>
                                        <p>با استفاده از این مورد می توانید حالت شب را فعال یا غیر فعال کنید</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
