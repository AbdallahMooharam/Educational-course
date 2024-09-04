import React, { useRef, useEffect } from 'react';

function JitsiMeet() {
    const jitsiContainerRef = useRef(null);

    useEffect(() => {
        // Ensure the Jitsi Meet API script is loaded
        if (!window.JitsiMeetExternalAPI) {
            const script = document.createElement('script');
            script.src = 'https://meet.jit.si/external_api.js';
            script.onload = () => {
                const api = new window.JitsiMeetExternalAPI('meet.jit.si', {
                    roomName: 'YourMeetingRoomName',
                    width: '100%',
                    height: '100%',
                    parentNode: jitsiContainerRef.current,
                });

                // Cleanup on component unmount
                return () => api.dispose();
            };
            document.body.appendChild(script);
        } else {
            // API script is already loaded
            const api = new window.JitsiMeetExternalAPI('meet.jit.si', {
                roomName: 'YourMeetingRoomName',
                width: '100%',
                height: '100%',
                parentNode: jitsiContainerRef.current,
            });

            // Cleanup on component unmount
            return () => api.dispose();
        }
    }, []);

    return <div ref={jitsiContainerRef} style={{ height: '600px', width: '100%' }} />;
}

export default JitsiMeet;
