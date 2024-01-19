import React, { useState } from "react";
import "../styles/cards.css";

const ApiComponent = ({ data, loading }) => {
  const [hoveredAnime, setHoveredAnime] = useState(null);
  const [selectedType, setSelectedType] = useState("all");

  const handleHover = (anime) => {
    setHoveredAnime(anime);
  };

  const handleLeave = () => {
    setHoveredAnime(null);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredData = data?.filter((anime) => {
    if (selectedType === "all") {
      return true; // Zeige alle Animes, wenn "all" ausgewählt ist
    } else {
      return anime.type.toLowerCase() === selectedType.toLowerCase();
    }
  });

  const sortedData = filteredData?.slice(1, 10).sort((a, b) => {
    if (a.type === "Movie" && b.type === "TV") {
      return -1;
    } else if (a.type === "TV" && b.type === "Movie") {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <>
      <div className="container">
        {sortedData && sortedData.length > 0 && (
          <div style={{ display: "flex", marginTop: "2rem" }}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {sortedData.map((anime) => (
                <div
                  key={anime.mal_id}
                  className="col-lg-4 text-center col-md-6 col-sm-6 col-xs"
                  onMouseEnter={() => handleHover(anime)}
                  onMouseLeave={handleLeave}
                >
                  <div className="cards">
                    <div className="col-10">
                      <div className="card card-wrapper">
                        <div className="card-content">
                          <p className="card-title" style={{ color: "white" }}>
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
                          <p className="card-text">{anime.synopsis}</p>
                          <div className="anime-info"style={{ color: "white" }}>
                            <p>Episodes: {anime.episodes}</p>
                          
                            <p>Aired: {anime.aired.string}</p>
                          </div>
                          {hoveredAnime && hoveredAnime === anime && (
                            <div className="trailer-container">
                              <p>Trailer for {hoveredAnime.title}</p>
                              {hoveredAnime.trailer &&
                              hoveredAnime.trailer.embed_url ? (
                                <iframe
                                  width="300"
                                  height="250"
                                  src={hoveredAnime.trailer.embed_url}
                                  title="YouTube video player"
                                  frameBorder="0"
                                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                ></iframe>
                              ) : (
                                <p style={{color:"white"}}>No Trailer Available</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ApiComponent;
