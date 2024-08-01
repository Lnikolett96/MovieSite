import React from "react";
import "./MovieCard.css";
import star from '../../assets/glowing-star.png'

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img
        className="movie_poster"
        src="https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_240x360_crop_center.progressive.jpg?v=1573587596"
        alt="poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="align_center movie_data_rate">
            <p>02-10-2020</p>
            <p>8.0 <img className="card_emoji" src={star} alt="rating icon" /> </p>
        </div>
        <p className="movie_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex consectetur praesentium dolores impedit ut!</p>
      </div>
    </a>
  );
};

export default MovieCard;
