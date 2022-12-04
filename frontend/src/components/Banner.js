import React, { useState } from 'react'

import './Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search'
import { useNavigate } from "react-router-dom";

function Banner() {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
    <div className='banner_search'>
    {showSearch && <Search />} 

        <Button onClick={()=>setShowSearch(!showSearch)} 
        className="banner_searchButton" variant='outlined'>{showSearch ? "Hide" : "Search Dates"}</Button>
        
    </div>
    <div className='banner_info'>
    <h2>Get out and strech your imagination</h2>
    <p>Plan a different kind of gateway to uncover the hidden gems near you.</p>
    <Button onClick={()=> navigate('/search')} varient='outlined'>Explore Nearby</Button>
    </div>
    </div>
  )
}

export default Banner