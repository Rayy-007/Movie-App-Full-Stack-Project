import { React, useState, useEffect } from "react";
import api from "./api/axiosConfig";

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("api/v1/movies");
      console.log(response);

      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>App</div>;
}

export default App;
