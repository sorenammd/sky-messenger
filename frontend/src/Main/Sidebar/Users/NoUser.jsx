import React from 'react'
import online from './online.png';
export default function NoUser() {
    return (
        <li>
            <img src={online} alt="online" style={{ width: '100%' }} />
            <p>در حال حاضر کاربری آنلاین نیست</p>
        </li>
    )
}
