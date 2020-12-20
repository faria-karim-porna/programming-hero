import React, { useState } from 'react';
import './SeatList.css';
const SeatList = (props) => {
    const handleClick = (e) => {
        console.log(e.target.innerHTML);
    }
    console.log(props.seat)
    return (
        <div className = "col-md-2 mr-4 mb-1 ml-1 mt-1 seat-column">
                <div className = "seatBg seatDesign" onClick = {handleClick}>{props.seat.sid}<br/>{props.seat.status}</div>
        </div>
    );
};

export default SeatList;