import React from 'react';
import Video from './Video';
import Audio from './Audio';

function MediaContent({ mediaStream }) {
    console.log(mediaStream);
    if (mediaStream.type==='full'||mediaStream.type==='video') {
        return <Video stream={mediaStream.stream} />;
    }
    return <Audio stream={mediaStream.stream} />;
}

export default MediaContent;