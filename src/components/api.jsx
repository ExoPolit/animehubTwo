import React, { useEffect, useState } from "react";
import "../styles/cards.css";


const ApiComponent = ({data, loading}) => {


  const styling = {
    display: "flex",
    marginTop: "2rem",
    
  };
const synopsisStyle = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitLineClamp: "1",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
  WebkitBoxOrient: "vertical",
  color: "white",
}
const titleStyle = {
  color: "white",
whiteSpace: "nowrap",
overflow: "hidden",
textOverflow: "ellipsis",
}
const cardStyling = {
  display: "flex",
  flexDirection: "column",
  justifyContent:"space-between",
  alignItems:"center",
}
const cardContentStyling = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "var(--color-bg-dark)",
  
}

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
                  >
                  <div className="cards" style={cardStyling}>
                    <div className="col-9" style={{ width:"400px"}}>
                      <div className="card card-wrapper">
                        <div className="card-content" style={cardContentStyling}>
                        <p className="card-title" style={titleStyle}>
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
                          <p className="card-text" style={synopsisStyle}>
                            {anime.synopsis}
                          </p>
                          <button className="btn btn-primary">Read More</button>
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
