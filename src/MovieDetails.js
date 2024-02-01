import React from 'react';
import { useNavigate , useParams } from 'react-router-dom';


const MovieDetails = ({ movies }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedMovie = movies.find((movie) => movie.title.toLowerCase() === id.toLowerCase());
  const { title, description, trailerLink , rating } = selectedMovie;

  return (
    <div>
      <h2>Trailer Of The Movie: {title}</h2>
      <video
        title={title}
        width="560"
        height="315"
        controls>
        <source src={trailerLink} type="video/mp4" />
      </video>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <button onClick={() => navigate("/")}>Go Back Home</button>
    </div>
  );
};

export default MovieDetails;