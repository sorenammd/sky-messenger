import React, { useRef, useEffect } from 'react'

export default function Video({ stream }) {
    const video=useRef(null);
    useEffect(() => {
        if (stream) {
            video.current.srcObject=stream;
        }
    });
    return (
        <div className="middle" id="scroll">
            <div className="container">
                <video ref={video} style={{ width: '100%', height: '100%', backgroundColor: '#ddd' }} controls id="videoPlayer" autoPlay playsInline></video>
            </div>
        </div>
    )
}
