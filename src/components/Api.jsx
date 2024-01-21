import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import MainCard from "./DisplayAnime"; 

const ApiComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [filterType, setFilterType] = useState("all"); 

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

      result.data.sort((a, b) => b.type - a.type);

      setSearchResults(result.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleFilterChange = (e) => {
    setFilterType(e.target.value.data);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.jikan.moe/v4/anime`);
        const result = response.data;
        console.log(result.data);

        result.data.sort((a, b) => b - a);

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
          <div>
            <Search onSearch={handleSearch} />
            <MainCard data={searchResults.length > 0 ? searchResults : data} loading={loading} filterType={filterType} setFilterType={setFilterType} />

          </div>
        </>
      )}
    </div>
  );
};

export default ApiComponent;
