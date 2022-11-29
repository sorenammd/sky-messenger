export const requestMediaPermission = async (constraints) => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        return stream;
    } catch (error) {
        return error;
    }
};
export const getSupportedMedia = (stream) => {
    if (stream.getVideoTracks().length > 0 && stream.getAudioTracks().length > 0) {
        return 'full';
    }
    if (stream.getVideoTracks().length <= 0 && stream.getAudioTracks().length > 0) {
        return 'audio';
    }
    if (stream.getVideoTracks().length > 0 && stream.getAudioTracks().length <= 0) {
        return 'video';
    }
    return null;
};