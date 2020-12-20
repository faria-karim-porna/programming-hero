import React from 'react';
import fakeData from '../../fakeData';
import './AddFakeData.css'
const AddFakeData = () => {
    const handleFakeData = () => {
        fetch('http://localhost:5000/addFakeData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        }) 
    }
    return (
        <div>
            <button className = "fakeData" onClick= {handleFakeData}>Add fake data</button>
        </div>
    );
};

export default AddFakeData;