import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/details.css";
import { isVisible } from "@testing-library/user-event/dist/utils";

const AnimeDetails = ({ anime, onClose }) => {
  const [isVissible, setIsVissible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVissible(true);
    }, 500);
  }, []);

  return (
    <div
      className={`details ${isVissible ? "is-visible" : ""} `}
      id="card-wrapper"
    >
      <div className="card">
        <FontAwesomeIcon onClick={onClose} icon={faTimes} className="close" />
        <div className="card2 text-center">
          <h1>{anime.title_japanese}</h1>
          <div className="d-flex justify-content-around align-items-center">
            <img src={anime.images.jpg.image_url} alt="anime" />
            <div className="d-flex flex-column align-items-start card_para">
            <p>Episodes: {anime.episodes}</p>
            <p>Type: {anime.type}</p>
            <p>Genre: {anime.genres[0].type}</p>
            </div>
            <iframe
              width="300"
              height="250"
              src={anime.trailer.embed_url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
          <p className="details-text">{anime.synopsis}</p>

        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
