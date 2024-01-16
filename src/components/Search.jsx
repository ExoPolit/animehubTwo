import React from "react";

const Search = () => {

    const handleKeyPress =(e) =>{
        if(e.key === 'Enter'){
            e.preventDefault();
            console.log('Enter key pressed')
        }else{
            console.log('Enter key not pressed')
        }
    }

    return (
        <div className="text-center">
            <h1>Search</h1>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                onKeyPress={handleKeyPress} />
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
    )
};

export default Search;