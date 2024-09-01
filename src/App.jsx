import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import MovieList from "./components/movielist/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MovieList type={"popular"} title={"Popular"} emoji={Fire} />} />
          <Route path="/top_rated" element={<MovieList type={"top_rated"} title={"Top Rated"} emoji={Star} />} />
          <Route path="/upcoming" element={<MovieList type={"upcoming"} title={"Upcoming"} emoji={Party} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
