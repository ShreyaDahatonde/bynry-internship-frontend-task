import { useState } from "react";

export default function ProfilesTable({ users, handleProfileView, setUsers }) {
    let url = "https://avatar.iran.liara.run/public/boy?username=";
    const [showForm, setShowForm] = useState(false);

    //   {
    //     name: "Rahul Choudhary",
    //     email: "rahul@bynry.com",
    //     role: "DevOps Engineer",
    //     address: {
    //         city: "Bangalore",
    //         country: "India",
    //         geo: { lat: 12.9716, lng: 77.5946 },
    //     },
    // }
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");

    const handleAddUser = (e) => {
        console.log("Adding User");
        e.preventDefault();
        console.log(name, email, role, city, country, lat, lng);
        let newUser = {
            name: name,
            email: email,
            role: role,
            address: {
                city: city,
                country: country,
                geo: {
                    lat: lat,
                    lng: lng,
                },
            },
        };
        setUsers([...users, newUser]);
        setName("");
        setEmail("");
        setRole("");
        setCity("");
        setCountry("");
        setLat("");
        setLng("");
        setShowForm(false);
    };
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Profiles
                </h1>
                <div>
                    {!showForm && (
                        <button
                            className="bg-blue-500 text-white p-2 rounded mt-4"
                            onClick={() => setShowForm(true)}
                        >
                            Add User
                        </button>
                    )}
                </div>
            </div>
            {showForm && (
                <form
                    action="#"
                    onSubmit={handleAddUser}
                    className="border-2 p-4"
                >
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                        Add User
                    </h1>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 w-full mt-4 border-2 border-gray-200 rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 w-full mt-4 border-2 border-gray-200 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="p-2 w-full mt-4 border-2 border-gray-200 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="p-2 w-full mt-4 border-2 border-gray-200 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="p-2 w-full mt-4 border-2 border-gray-200 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Latitude"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                        className="p-2 w-full mt-4 border-2 border-gray-200 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Longitude"
                        value={lng}
                        onChange={(e) => setLng(e.target.value)}
                        className="p-2 w-full mt-4 border-2 border-gray-200 rounded-md"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded mt-4"
                    >
                        Add User
                    </button>
                </form>
            )}
            <table className="w-full mt-4 border-2">
                <thead>
                    <tr className="text-left border-b-4">
                        <th className="p-2 font-bold text-gray-600 dark:text-gray-400">
                            Profile Picture
                        </th>
                        <th className="p-2 font-bold text-gray-600 dark:text-gray-400">
                            Name
                        </th>
                        <th className="p-2 font-bold text-gray-600 dark:text-gray-400">
                            Email
                        </th>
                        <th className="p-2 font-bold text-gray-600 dark:text-gray-400">
                            Role
                        </th>
                        <th className="p-2 font-bold text-gray-600 dark:text-gray-400">
                            City
                        </th>
                        <th className="p-2 font-bold text-gray-600 dark:text-gray-400">
                            Country
                        </th>
                        <th className="p-2 font-bold text-gray-600 dark:text-gray-400">
                            Action Button
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, idx) => (
                        <tr key={idx} className="border-b-2">
                            <td className="p-4 text-left text-gray-800 dark:text-white">
                                <img
                                    src={
                                        url +
                                        String(user.name).replace(" ", "+")
                                    }
                                    alt="Profile Picture"
                                    className="w-10 h-10 rounded-full"
                                />
                            </td>
                            <td className="p-4 text-left text-gray-800 dark:text-white">
                                {user.name}
                            </td>
                            <td className="p-4 text-left text-gray-800 dark:text-white">
                                {user.email}
                            </td>
                            <td className="p-4 text-left text-gray-800 dark:text-white">
                                {user.role}
                            </td>
                            <td className="p-4 text-left text-gray-800 dark:text-white">
                                {user.address.city}
                            </td>
                            <td className="p-4 text-left text-gray-800 dark:text-white">
                                {user.address.country}
                            </td>
                            <td className="p-4 text-left text-gray-800 dark:text-white">
                                <button
                                    className="bg-blue-500 text-white p-2 rounded"
                                    onClick={() => handleProfileView(user)}
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
