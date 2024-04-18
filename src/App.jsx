import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProfilesTable from "./components/ProfilesTable";
import Map from "./components/Map";
function App() {
    const [center, setCenter] = useState({
        lat: 21.1610659,
        lng: 78.9901083,
    });
    const [users, setUsers] = useState([
        {
            name: "Aditya Kumar",
            email: "aditya@bynry.com",
            role: "Frontend Developer",
            address: {
                city: "Pune",
                country: "India",
                geo: { lat: 18.5204, lng: 73.8567 },
            },
        },
        {
            name: "Arnav Sharma",
            email: "arnav@bynry.com",
            role: "Backend Developer",
            address: {
                city: "New Delhi",
                country: "India",
                geo: { lat: 28.6139, lng: 77.209 },
            },
        },
        {
            name: "Rahul Choudhary",
            email: "rahul@bynry.com",
            role: "DevOps Engineer",
            address: {
                city: "Bangalore",
                country: "India",
                geo: { lat: 12.9716, lng: 77.5946 },
            },
        },
    ]);

    const handleProfileView = (user) => {
        setCenter(user.address.geo);
        console.log(center);
        console.log(center);
        console.log(center);
    };

    return (
        <>
            <Navbar />
            <ProfilesTable
                users={users}
                handleProfileView={handleProfileView}
                setCenter={setCenter}
                setUsers={setUsers}
            />
            <Map users={users} center={center} setCenter={setCenter} />
        </>
    );
}

export default App;

