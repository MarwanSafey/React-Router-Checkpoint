import React from 'react';
import { useNavigate } from 'react-router-dom';


const MovieCard = ({id, posterURL , title , description , rating ,trailerLink}) => {

  const navigate = useNavigate();

 return (
    <div className="movie-card">
      <img className="img" src={posterURL} alt={title} />
      <h3>{title}</h3>
      <button onClick={() => navigate(`/movie/${title}`)}>Go To Trailer Link</button>
    </div>
 );
};

export default MovieCard;
