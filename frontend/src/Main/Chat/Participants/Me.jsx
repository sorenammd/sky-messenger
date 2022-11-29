import React from 'react'

export default function Me({ body, created_at }) {
    return (
        <li className="me">
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
