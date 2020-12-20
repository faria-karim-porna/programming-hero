import React, { useState } from 'react';
import fakeData from '../../fakeData';
import MovieCards from '../MovieCards/MovieCards';
import './Movies.css';
const Movies = () => {
    const [movieInfo, setMovieInfo] = useState(fakeData);
    return (
        <div>
            <div className = "container">
                <div className = "row">
                    {
                        movieInfo.map(movie =><MovieCards movie = {movie}></MovieCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Movies;