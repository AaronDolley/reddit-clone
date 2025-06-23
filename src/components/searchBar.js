import React, { useState } from "react";
import './searchBar.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.value;
        if (query.trim()) {
            onSearch(query);
            setQuery("")
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <FaSearch className="search-icon"/>
            <input 
            type="text"
            name="search"
            placeholder="Search Redlit"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    )
}

export default SearchBar;