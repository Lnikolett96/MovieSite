import React from "react";
import "./MovieCard.css";
import star from '../../assets/glowing-star.png'

const MovieCard = ({movie}) => {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" className="movie_card">
      <img
        className="movie_poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.original_title}</h3>
        <div className="align_center movie_data_rate">
            <p>{movie.release_date}</p>
            <p>{movie.vote_average.toPrecision(2)}<img className="card_emoji" src={star} alt="rating icon" /> </p>
        </div>
        <p className="movie_description">{movie.overview.slice(0,100) + "..."}</p>
      </div>
    </a>
  );
};

export default MovieCard;
