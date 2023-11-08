import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import api from "./api/axiosConfig";
import Layout from "./layout/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

function App() {
  const [movies, setMovies] = useState();
  const [singleMovie, setSingleMovie] = useState();
  const [reviews, setReviews] = useState();

  // Getting All Movies Data
  const getMovies = async () => {
    try {
      const response = await api.get("api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Getting Signle Movies Data && This Function Will be Called in Review Component
  const getMovieData = async (imdbId) => {
    try {
      const response = await api.get(`/api/v1/movies/imdb/${imdbId}`);
      const singleMovie = response.data;
      setSingleMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route
            path="/Reviews/:imdbId"
            element={
              <Reviews
                singleMovie={singleMovie}
                getMovieData={getMovieData}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
