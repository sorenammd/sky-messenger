import React, { useRef, useEffect } from 'react'

export default function Audio({ stream }) {
    const audio=useRef(null);
    useEffect(() => {
        if (stream) {
            audio.current.srcObject=stream;
        }
    });
    return (
        <div className="middle" id="scroll">
            <div className="container">
                <audio ref={audio} style={{ width: '100%', height: '100%' }} id="audioPlayer" controls autoPlay playsInline></audio>
            </div>
        </div>
    )
}
