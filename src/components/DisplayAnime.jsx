import React, { useState } from "react";
import AnimeDetails from "./AnimeDetails";
import "../styles/cards.css";

const MainCard = ({ data, filterType, setFilterType }) => {
  const [hoveredAnime, setHoveredAnime] = useState(null);
  const [selectedAnime, setSelectedAnime] = useState(null);

  const handleHover = (anime) => {
    setHoveredAnime(anime);
  };

  const handleLeave = () => {
    setHoveredAnime(null);
  };

  const filterDataByType = (anime) => {
    return filterType === "all" || anime.type.toLowerCase() === filterType.toLowerCase();
  };

  const sortedData = data.filter(filterDataByType).sort((a, b) => {
    if (filterType === "all") {
      return 0;
    } else {
      return a.type.localeCompare(b.type);
    }
  });

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filterTrailer = (anime) => {
    return anime.trailer && anime.trailer.embed_url;
  };

  const cardOnClick = (anime) => {
      setSelectedAnime(anime);
  };
const closeDetails = () => {
  setSelectedAnime(null);
}
  return (
    <>
      <div className="container">
        <div style={{position: "relative"}}>
          <select value={filterType} onChange={handleFilterChange} className="select">
            <option value="all">All</option>
            <option value="movie">Movie</option>
            <option value="tv">Series</option>
          </select>
        </div>
        {sortedData && sortedData.length > 0 && (
          <div style={{ display: "flex", marginTop: "2rem" }}>
            <div className="row row-cols-1 row-cols-md-4  g-4">
              {sortedData.map((anime) => (
                <div
                  key={anime.mal_id}
                  className="col-lg-4 text-center col-md-6 col-sm-12 col-xs"
                  onMouseEnter={() => handleHover(anime)}
                  onMouseLeave={handleLeave}
                  onClick={() => cardOnClick(anime)}
                  style={{ transition: "hoveredAnime 0.5s ease-in-out" }}
                >
                  <div className="cards card-shadow">
                    <div className="col col-sm-12">
                      <div className="card-wrapper">
                        <div className="card-content">
                          <p
                            className="card-title"
                            style={{
                              color: "var(--color-ice-blue)",
                              fontSize: "var(--font-size-md)",
                              fontWeight: "600",
                              margin: "1rem",
                            }}
                          >
                            {anime.title}
                          </p>

                          <figure>
                            <img
                              height={400}
                              src={anime.images.jpg.image_url}
                              className="card-img"
                              alt="anime"
                            />
                          </figure>
                          <p
                            style={{
                              color: "white",
                              fontSize: "var(--font-size-md)",
                            }}
                          >
                            {" "}
                            Episode
                            <span
                              style={{
                                border: "1px solid white",
                                borderRadius: "4rem",
                                color: "white",
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "1rem",
                                fontSize: "var(--font-size-lg)",
                              }}
                            >
                              {" "}
                              {anime.episodes}{" "}
                            </span>
                          </p>

                          <p className="card-text">{anime.synopsis}</p>

                          {anime.trailer && anime.trailer.embed_url ? (
                            <div className="trailer-container">
                              <iframe
                                width="300"
                                height="250"
                                src={anime.trailer.embed_url}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                              ></iframe>
                            </div>
                          ) : (
                            <p style={{ color: "white" }}>
                              No Trailer Available
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {selectedAnime && (
              <AnimeDetails anime={selectedAnime} onClose={closeDetails}/>
            )
            }
          </div>
        )}
      </div>
    </>
  );
};

export default MainCard;
