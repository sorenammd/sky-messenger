import React from 'react'
import empty from './empty.png';
export default function NoRecentChat() {
    return (
        <li>
            <img src={empty} alt="empty" style={{ width: '100%' }} />
            <p>تا کنون هیچ گفتگوی تازه ای نداشته اید</p>
        </li>
    )
}
