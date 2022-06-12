import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoadin, setIsload] = useState(false);
  const [error, setError] = useState();
  console.log(movies);
  const moviesHandler = useCallback(async function () {
    try {
      setIsload(true);
      setError(null);
      // const response = await fetch("https://swapi.dev/api/films/");
      const response = await fetch(
        "https://react-http-73714-default-rtdb.firebaseio.com/movie.json" // custome api
      );
      if (!response.ok) {
        throw new Error("Somthing Wrong");
      }
      const data = await response.json();

      /// post data ///
      console.log(data);
      let loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }
      console.log(loadedMovies);
      ////post data End ///
      // const transformdata = data.results.map((moviesData) => {
      //   return {
      //     id: moviesData.episode_id,
      //     title: moviesData.title,
      //     releaseDate: moviesData.release_date,
      //     openingText: moviesData.opening_crawl,
      //   };
      // });
      setMovies(loadedMovies);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    setIsload(false);
  }, []);

  useEffect(() => {
    moviesHandler();
  }, [moviesHandler]);

  const addMovieFun = async (movie) => {
    const response = await fetch(
      "https://react-http-73714-default-rtdb.firebaseio.com/movie.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        header: {
          "Content-Type": "aplication/json",
        },
      }
    );
    const data = await response.json();
    console.log("POST", data);
  };

  let content = <p>Found No Movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p> {error}</p>;
  }

  if (isLoadin) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieFun} />
      </section>
      <section>
        <button onClick={moviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
