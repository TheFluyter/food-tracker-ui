import React, { useState } from 'react';
import axios from 'axios';
import './UserConsumption.css';

const UserConsumption = () => {
    const [consumptions, setConsumptions] = useState([]);
    const [error, setError] = useState('');

    const fetchUserConsumptions = async () => {
        try {
            const baseUrl = process.env.REACT_APP_FOOD_TRACKER_API_BASE_URL;
            const response = await axios.get(`${baseUrl}/api/consumption?date=2024-10-20`);
            setConsumptions(response.data);
        } catch (err) {
            setError('Error fetching data');
        }
    };

    return (
        <div>
            <button onClick={fetchUserConsumptions}>Show User Consumptions</button>
            {error && <p>{error}</p>}
            <ul>
                {consumptions.map((consumption, index) => (
                    <li key={index}>
                        {consumption.foodItem.name}, {consumption.weightInGrams} grams: {consumption.foodItem.protein} gram protein
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserConsumption;
