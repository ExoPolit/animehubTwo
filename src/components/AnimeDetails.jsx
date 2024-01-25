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
      <div className={`selected ${isVisible ? "slide-in" : ""}`}>
        <div className="open">
              <FontAwesomeIcon icon={faTimes} className="close" onClick={onClose} />
        <div className="row  mb-2">
          <div className="d-flex align-items-center">
        <img className="col-2 m-4" src={anime.images.jpg.image_url} alt="" width={200}/>
        <h2 className="col-md">{anime.title}</h2>
        <iframe
          src={anime.trailer.embed_url}
          frameBorder="0"
          className="col-lg-4 m-5"
          width={250}
          height={250}
        ></iframe>
          </div>
         
        <p className="col-2"> Type: {anime.type}</p>
        <p className="col-2"> Episodes: {anime.episodes}</p>
        <p className="col-2"> Genre:<span style={{textTransform:"capitalize"}}> {anime.genres[0].type} </span></p>
        </div>
        <div className="row mb-2">
        <p className="selected-text col-lg-12">{anime.synopsis}</p>
        </div>
        <div className="row">
            <div className="col-lg-12">
        

    </div>
    </div>
    </div>
    </div>
  );
};

export default AnimeDetails;
