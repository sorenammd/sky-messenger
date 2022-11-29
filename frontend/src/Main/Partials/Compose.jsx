import React, { Component } from 'react'

export default class Compose extends Component {
    render() {
        return (
            <div className="modal fade" id="compose" tabIndex="-1" role="dialog" aria-labelledby="compose" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>ایجاد گروه جدید</h5>
                            <button type="button" className="btn round" data-dismiss="modal" aria-label="Close">
                                <i data-eva="close"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul className="nav" role="tablist">
                                <li><a href="#details" className="active" data-toggle="tab" role="tab" aria-controls="details"
                                    aria-selected="true">مشخصات</a></li>
                                <li><a href="#participants" data-toggle="tab" role="tab" aria-controls="participants"
                                    aria-selected="false">اعضاء</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="details tab-pane fade show active" id="details" role="tabpanel">
                                    <form>
                                        <div className="form-group">
                                            <label>عنوان</label>
                                            <input type="text" className="form-control" placeholder="عنوان گروه را وارد کنید" />
                                        </div>
                                        <div className="form-group">
                                            <label>پیام</label>
                                            <textarea className="form-control" placeholder="پیام اولیه گروه"></textarea>
                                        </div>
                                    </form>
                                </div>

                                <div className="participants tab-pane fade" id="participants" role="tabpanel">
                                    <div className="search">
                                        <form>
                                            <input type="search" className="form-control" placeholder="جستجو" />
                                            <button type="submit" className="btn prepend"><i data-eva="search"></i></button>
                                        </form>
                                    </div>
                                    <h4>کابران</h4>
                                    <hr />
                                    <ul className="users">
                                        <li>
                                            <div className="status online"><img src="/assets/img/avatars/avatar-male-1.jpg"
                                                alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                            <div className="content">
                                                <h5>پوریا رضایی</h5>
                                                <span>ایران، تهران</span>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="user1" />
                                                <label className="custom-control-label" htmlFor="user1"></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="status offline"><img src="/assets/img/avatars/avatar-male-2.jpg"
                                                alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                            <div className="content">
                                                <h5>مصطفی قدیمی</h5>
                                                <span>ایران، البرز</span>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="user2" />
                                                <label className="custom-control-label" htmlFor="user2"></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="status online"><img src="/assets/img/avatars/avatar-male-3.jpg"
                                                alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                            <div className="content">
                                                <h5>حامد سبزیان</h5>
                                                <span>ایران، البرز</span>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="user3" />
                                                <label className="custom-control-label" htmlFor="user3"></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="status offline"><img src="/assets/img/avatars/avatar-male-4.jpg"
                                                alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                            <div className="content">
                                                <h5>پوریا عرب</h5>
                                                <span>ایران، تهران</span>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="user4" />
                                                <label className="custom-control-label" htmlFor="user4"></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="status offline"><img src="/assets/img/avatars/avatar-male-5.jpg"
                                                alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                            <div className="content">
                                                <h5>کمیل فیاض بخش</h5>
                                                <span>ایران، تهران</span>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="user5" />
                                                <label className="custom-control-label" htmlFor="user5"></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="status online"><img src="/assets/img/avatars/avatar-male-6.jpg"
                                                alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                            <div className="content">
                                                <h5>لقمان آوند</h5>
                                                <span>ایران، تهران</span>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="user6" />
                                                <label className="custom-control-label" htmlFor="user6"></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="status offline"><img src="/assets/img/avatars/avatar-female-1.jpg"
                                                alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                            <div className="content">
                                                <h5>کیوان علی محمدی</h5>
                                                <span>ایران، البرز</span>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="user7" />
                                                <label className="custom-control-label" htmlFor="user7"></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="status offline"><img src="/assets/img/avatars/avatar-female-2.jpg"
                                                alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                            <div className="content">
                                                <h5>مهدی علامه</h5>
                                                <span>ایران،تهران</span>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="user8" />
                                                <label className="custom-control-label" htmlFor="user8"></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="status online"><img src="/assets/img/avatars/avatar-female-3.jpg"
                                                alt="avatar" /><i data-eva="radio-button-on"></i></div>
                                            <div className="content">
                                                <h5>امیر حسین حسینی</h5>
                                                <span>ایران، تهران</span>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="user9" />
                                                <label className="custom-control-label" htmlFor="user9"></label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn primary">ایجاد گروه</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
