import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, map } from "leaflet";
import { useState } from "react";

function LocationMarker({ user, setZoom, setCenter }) {
    const [position, setPosition] = useState(user.address.geo);
    const map = useMap();

    return position === null ? null : (
        <Marker
            position={position}
            eventHandlers={{
                click: (e) => {
                    map.flyTo(e.latlng, 5);
                    console.log(e.latlng);
                    setCenter(e.latlng);
                    // console.log(e);
                },
            }}
        >
            <Popup>
                <div>
                    <img
                        src={
                            "https://avatar.iran.liara.run/public/boy?username=" +
                            String(user.name).replace(" ", "+")
                        }
                        alt="Profile Picture"
                        className="w-10 h-10 rounded-full"
                    />
                    <br />
                    <h1 className="text-xl font-bold">{user.name}</h1>
                    <p className="!m-0 text-sm">{user.role}</p>
                    <p className="!m-0 text-sm">{user.address.city}</p>
                    <p className="!m-0 text-sm">{user.email}</p>
                </div>
            </Popup>
        </Marker>
    );
}

export default function Map({ users, center, setCenter }) {
    // console.log(users);
    const [zoom, setZoom] = useState(5);
    return (
        <div className="w-full h-screen mt-4 border-2 border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {users.map((user, index) => (
                    <LocationMarker
                        key={index}
                        user={user}
                        setZoom={setZoom}
                        setCenter={setCenter}
                    />
                ))}
            </MapContainer>
        </div>
    );
}
