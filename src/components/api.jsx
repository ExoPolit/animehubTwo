import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get("https://api.jikan.moe/v4/top/anime");

        // Konsolenausgabe der gesamten API-Antwort
        console.log("API Response:", response);

        if (response.data) {
          setData(response.data?.data);
        } else {
          console.error("Invalid response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sysnopsisStyle = {
    whtieSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
  };

  return (
    <div>
      <h1>Top 4 Animes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          {(Array.isArray(data) ? data : []).slice(0,10).map((anime) => (
            <div
              key={anime.mal_id}
              style={{ marginBottom: "20px", borderBottom: "1px solid #ddd" }}
            >
              <div className="container text-center">
                <div className="cards " style={{width:'50%'}}>
                  <div className="row">
                    <div className="col">
                      <div className="card">
                        <div className="card-content">
                          <h1 className="card-title">{anime.title}</h1>
                          <img
                            src={anime.images.jpg.image_url}
                            style={{ width: "15rem" }}
                            alt="anime"
                          />
                          <p className="card-text" style={sysnopsisStyle}>
                            {anime.synopsis}
                          </p>
                          <button className="btn btn-primary">Read More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiComponent;
