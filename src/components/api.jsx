import React, { useEffect, useState } from "react";
import "../styles/cards.css";


const ApiComponent = ({data, loading}) => {

const [hoveredAnime, setHoveredAnime] = useState(null);

const handleHover = (anime) => {
  setHoveredAnime(anime);
};
const handleLeave = () => {
  setHoveredAnime(null);
};


  const styling = {
    display: "flex",
    marginTop: "2rem",
  };




  return (

    <>
      <div className="container">
              {data && data.length > 0 && (
          <div style={styling}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {data.slice(1, 10).map((anime) => (
                <div
                  key={anime.mal_id}
                  className="col-lg-4 
                  text-center 
                  col-md-6 
                  col-sm-6 
                  col-xs"
                  onMouseEnter={() => handleHover(anime)}
                  onMouseLeave={handleLeave}
                  >
                  <div className="cards">
                    <div className="col-10">
                      <div className="card card-wrapper">
                        <div className="card-content" >
                        <p className="card-title" style={{color:"white"}}>
                          {anime.title}
                        </p>
                          <figure>
                            <img
                            height={300}
                              src={anime.images.jpg.image_url}
                              className="card-img-top"
                              alt="anime"
                            />
                          </figure>
                          <p className="card-text" >
                            {anime.synopsis}
                          </p>
                          <div style={{color:"white"}}> Rank: {anime.rank}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {hoveredAnime && (
              <div className="trailer-container">
                <p>Trailer for {hoveredAnime.title}</p>
                <iframe
                  width="560"
                  height="315"
                  src={hoveredAnime.trailer_url}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              )
              }
          </div>
        )}
      </div>
    </>
  );
};

export default ApiComponent;
