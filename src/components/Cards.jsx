import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiComponent from "./api";
import Search from "./Search";

const MainCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

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

      // Sort by favorites (assuming favorites property exists in your data)
      result.data.sort((a, b) => b.favorites - a.favorites);

      setSearchResults(result.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Fetch initial data on mount
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.jikan.moe/v4/anime");
        const result = response.data;

        // Sort by favorites (assuming favorites property exists in your data)
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
  }, []); // Call just on mount

  return (
    <div>
      <Search onSearch={handleSearch} />
      {showLoading && <div>Loading...</div>}
      <ApiComponent data={searchResults.length > 0 ? searchResults : data} loading={loading} />
    </div>
  );
};

export default MainCard;
