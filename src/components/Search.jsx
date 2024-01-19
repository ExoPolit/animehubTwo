import React, { useState } from "react";
import {  library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../styles/buttons.css';
import '../styles/search.css';


const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  library.add(faSearch);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch(query); // Führen Sie die Suchfunktion aus, wenn Enter gedrückt wird
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Verhindern Sie das Standardformularverhalten
    onSearch(query); // Führen Sie die Suchfunktion aus
  }

  return (
    <div className="container mt-2">
      <form className="d-flex justify-content-center" role="search" onSubmit={handleSubmit}>
        <input
        id="search-bar"
          className="form-control "
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search_btn btn-primary d-flex align-items-center" type="submit">
          <FontAwesomeIcon icon={faSearch} style={{fontSize:'var(--font-size-lg)'}}  />
          </button>
      </form>
    </div>
  );
};

export default Search;
