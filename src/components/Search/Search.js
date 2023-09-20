import React, { useEffect, useState } from "react";
import GetSearchParam from "./GetSearchParam";

import SearchIcon from './search-icon.png'

import './searchStyle.css'

function Search() {

    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const query = GetSearchParam()

    useEffect(() => {
        if (query) {
            setSearchQuery(query)
        }

    }, [query])

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery) {
          event.target.submit()
        }
      };


    return (
        <form method="get"
            onSubmit={handleSearchSubmit}
            action="/search"
            className="nav-custom-item"
        >
            <div className="search-section">

                <input type='search' className='search-bar' placeholder='Search mobile skins' value={searchQuery} onChange={handleSearchChange} name="query" />
                <button type="submit" className="search-button"
                ><img src={SearchIcon} style={{'height':'20px','color':'white'}} alt=""/><i className="fas fa-search"></i></button>

            </div>
        </form>
    )
}



export default Search;