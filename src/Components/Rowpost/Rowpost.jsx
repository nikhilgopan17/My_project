import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../Constants/Constants";
import YouTube from "react-youtube";
import "./Rowpost.css";

function Rowpost(props) {
  const [urlId, setUrlId] = useState([]);
  const [movies, setMovies] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const API_KEY = "661e5f02e770e2a401a93894b00402b7";
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network error");
      });
  }, [props.url]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [currentId, setCurrentId] = useState("");
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
          setCurrentId(id);
          setShowTrailer(true);
        } else {
          alert("Trailer not available");
        }
      });
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
    setCurrentId("");
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <div className="poster-container" key={obj.id}>
            <img
              onClick={() => {
                if (currentId === obj.id) {
                  handleCloseTrailer();
                } else {
                  handleMovie(obj.id);
                  setShowTrailer(true);
                }
              }}
              className={props.isSmall ? "smallPoster" : "poster"}
              alt="poster"
              src={`${imageUrl + obj.backdrop_path}`}
            />
          </div>
        ))}
      </div>
      {showTrailer && urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default Rowpost;
