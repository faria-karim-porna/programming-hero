import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div>
            <h1 className = "webName">ShowTime</h1>
            <Link to = "/movies" className = "homelink">Login</Link>
        </div>
    );
};

export default Home;