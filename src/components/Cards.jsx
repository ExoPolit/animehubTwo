import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiComponent from "./DisplayAnime";
import Search from "./Search";

const MainCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [filterType, setFilterType] = useState("all"); // Default value for the filter

  const handleDataFetched = (data) => {
    setData(data);
    setLoading(false);
    setShowLoading(false);
  }

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
      const result = response.data;

      result.data.sort((a, b) => b.favorites - a.favorites);

      setSearchResults(result.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.jikan.moe/v4/anime");
        const result = response.data;
console.log(result.data);	
        result.data.sort((a, b) => b.favorites - a.favorites);

        setData(result.data);
        handleDataFetched(result.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {showLoading && <div>Loading...</div>}
      {!showLoading && (
        <>
        <div className="d-flex align-items-center justify-content-center">
          <Search onSearch={handleSearch} />
          <label htmlFor="filterType">Filter by Type:</label>
          <select id="filterType" value={filterType} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="Movie">Movie</option>
            <option value="TV">TV</option>
          </select>
          </div>
          <ApiComponent data={searchResults.length > 0 ? searchResults : data} loading={loading} filterType={filterType} />
        </>
      )}
    </div>
  );
};

export default MainCard;
