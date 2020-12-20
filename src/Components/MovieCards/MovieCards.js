import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCards.css';
import image from '../../images/m1.jpg';
const MovieCards = (props) => {
    const divColor = {
        backgroundColor: "red",
        opacity: "0.5",
        marginTop: '-60px',
        height: '65px',
        color: 'white',
        textAlign: 'center',
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        position: "relative",
        width:"100%"
    };
    return (
        <div className = "col-md-3 movieCardColumn"><Link to = {`seats/${props.movie.id}`} className = "link">
            <img className = "movieCardsImages" src = {props.movie.image && require(`../../images/${props.movie.image}`)}/>
           <div style = {divColor}><div>{props.movie.movie}</div><div>{props.movie.timeAndDate}</div></div>
           </Link>
        </div>
    );
};

export default MovieCards;