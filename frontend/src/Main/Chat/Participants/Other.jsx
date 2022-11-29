import React from 'react'

export default function Other({ body, created_at }) {
    return (
        <li className="other">
            <div className="content">
                <div className="message">
                    <div className="bubble">
                        <p>{body}</p>
                    </div>
                </div>
                <span>{`${(new Date(created_at)).toLocaleDateString('fa-IR')} ${(new Date(created_at)).toLocaleTimeString('fa-IR')}`}</span>
            </div>
        </li>
    )
}
