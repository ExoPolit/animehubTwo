import React, { useState, useEffect } from "react";
import '../styles/cards.css';

const MainCard = ({ data, loading,  filterType, setFilterType }) => {
  const [hoveredAnime, setHoveredAnime] = useState(null);

  const handleHover = (anime) => {
    setHoveredAnime(anime);
  };

  const handleLeave = () => {
    setHoveredAnime(null);
  };

  const filterDataByType = (anime) => {
    if (filterType === "all") {
      return true;
    } else {
      return anime.type.toLowerCase() === filterType.toLowerCase();
    }
  };

  const sortedData = data
    .filter(filterDataByType)
    .sort((a, b) => {
      if (filterType === "all") {
        return 0;
      } else {
        return a.type.localeCompare(b.type);
      }
    });

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div>
        <select value={filterType} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="tv">Series</option>
        </select>
        </div>
        {sortedData && sortedData.length > 0 && (
          <div style={{ display: "flex", marginTop: "2rem" }}>
            <div className="row row-cols-1 row-cols-md-3 g-4" >
              {sortedData.map((anime) => (
                <div
                  key={anime.mal_id}
                  className="col-lg-4 text-center col-md-6 col-sm-6 col-xs"
                  onMouseEnter={() => handleHover(anime)}
                  onMouseLeave={handleLeave}
                >
                  <div className="cards" >
                    <div className="col" >
                      <div className="card-wrapper">
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
                          <div className="" style={{ color: "white", display:"flex", flexDirection:"column"}}>
                           <h3> Episodes: {anime.episodes}</h3>
                           <h3> Rank: {anime.rank}</h3>
                          </div>
                          <p className="card-text">{anime.synopsis}</p>
                         
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
                                <p style={{ color: "white" }}>No Trailer Available</p>
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

export default MainCard;
