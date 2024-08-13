import React from "react";

const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className="align_center movie_filter">
      {ratings && ratings.map(rate => (
        <li
          className={
            minRating === rate ? "movie_filter_item active" : "movie_filter_item"
          }
          onClick={() => onRatingClick(rate)}
          key={rate}
        >
          {rate}+ star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
