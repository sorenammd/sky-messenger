import React, { useLayoutEffect } from 'react';
import L from 'leaflet';
export default function Map({ current, zoom, onlineUsers }) {

    useLayoutEffect(() => {
        const { lat, lng } = current;
        const map = L.map('map').setView([lat, lng], zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
        onlineUsers.forEach(onlineUser => {
            const [lat, lng] = onlineUser.location.coordinates;
            L.marker([lat, lng]).addTo(map).bindPopup(`<p>${onlineUser.user.name}</p>`);

        });
        return () => {
            map.remove();
        };
    });
    return (
        <div className="chat">
            <div id="map" >

            </div>
        </div>
    )
}
Map.defaultProps = {
    onlineUsers: []
};
