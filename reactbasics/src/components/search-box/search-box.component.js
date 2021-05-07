import React from 'react';
import './search-box.styles.css'

const SearchBox = ({placeholder, changeSearch}) => {
    return(
    <input className='search' type='search' placeholder={placeholder} onChange={changeSearch}/>
    )
}

export default SearchBox