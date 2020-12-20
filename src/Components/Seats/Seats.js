import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import SeatList from '../SeatList/SeatList';

const Seats = () => {
    const {id} = useParams();
    console.log(id)
    const [seatInfo, setSeatInfo] = useState(fakeData.find(element => element.id == id));
    const seats = seatInfo.seatsArrangement;
    // for (int i =0; i<seatInfo.length;i++)

    // const found = seatInfo.find(element => element.id == id);
    console.log(seatInfo);
    return (
        <div>
            <div className = "container">
                <div className = "row">
                    {
                        seats.map(seat =><SeatList seat = {seat}></SeatList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Seats;