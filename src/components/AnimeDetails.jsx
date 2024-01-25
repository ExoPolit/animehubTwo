import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/details.css";

const AnimeDetails = ({ anime, onClose }) => {
 
 

  return (
    <>
    <div className="selected-wrapper">
      <div className="container selected ">
        <div className="row  mb-2">
        <h2 className="col-sm-4">{anime.title}</h2>
        <p className="col-2"> Type: {anime.type}</p>
        <p className="col-2"> Episodes: {anime.episodes}</p>
        <p className="col-2"> Genre:<span style={{textTransform:"capitalize"}}> {anime.genres[0].type} </span></p>
        </div>
        <div className="row mb-2">
        <p className="selected-text col-lg-10">{anime.synopsis}</p>
        </div>
        <div className="grid">
            <div className="g-col">
        <img src={anime.images.jpg.image_url} alt="" width={200}/>
            </div>
<div className="col-sm-4 col-md-6 g-col-lg-4" > 
        <iframe
          src={anime.trailer.embed_url}
          frameBorder="0"
          width={250}
          height={250}
        ></iframe>
      </div>
      <FontAwesomeIcon icon={faTimes} className="close" onClick={onClose} />

      </div>
    </div>
    </div>
    </>
  );
};

export default AnimeDetails;
