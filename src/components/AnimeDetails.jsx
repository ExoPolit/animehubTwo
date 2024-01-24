import React from "react";
import "../styles/details.css";

const AnimeDetails = ({ anime }) => {
  return (
    <div className="selected-wrapper text-center">
      <div className="selected ">
        <div className="grid text-center mb-2">
        <h2 className="g-col-6">{anime.title}</h2>
        <p className="g-col-6"> Type: {anime.type}</p>
        </div>
        <div className="row mb-2">
        <p className="selected-text col-lg-12">{anime.synopsis}</p>
        </div>
        <div className="row">
            <div className="col">
        <img src={anime.images.jpg.image_url} alt="" width={200}/>
            </div>
<div className="col"> 
        <iframe
          src={anime.trailer.embed_url}
          frameBorder="0"
          width={250}
          height={250}
        ></iframe>
      </div>
      </div>
    </div>
    </div>
  );
};

export default AnimeDetails;
