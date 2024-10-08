import React, { useEffect, useState } from "react";
import _ from 'lodash'

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";


const MovieList = ( {type, title, emoji} ) => {

  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState();
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, [type]);


  useEffect(() => {
    if (sort.by !== 'default') {
      const sortedArrays = _.orderBy(filterMovies, [sort.by], [sort.order])
      setFilterMovies(sortedArrays)
    }
  }, [sort])

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=4ebb8b387e16ffe5af060a0e66807281#`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };
  console.log(sort);

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);

      const filtered_array = movies.filter(
        (movie) => movie.vote_average >= rate
      );
      setFilterMovies(filtered_array);
    }
  };

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title} <img className="navbar_emoji" src={emoji} alt={`${emoji} icon`} />{" "}
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            onChange={handleSort}
            value={sort.by}
            id=""
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            onChange={handleSort}
            value={sort.order}
            id=""
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending </option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMovies &&
          filterMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </section>
  );
};

export default MovieList;
