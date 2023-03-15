import React,{useState, Fragment} from 'react'
import 'boxicons'
import pic from "./Image/KhojoLogoWithHome2.png";
import "./Header2.css";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from '@mui/icons-material/Tune';
import { useNavigate } from "react-router-dom";
import FilterPage from "./FilterPage.js"
import Search from './Search'
import { Button } from '@material-ui/core'
import { useSelector } from "react-redux";
import UserOptions from "../components/UserOptions";

const Header2 = () => {
    
    const { isAuthenticated, user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);
  const[keyword, setkeyword] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  

  const searchSubmitHandler = (e) =>{
    e.preventDefault();
    navigate(keyword.trim() ? `/products/${keyword}` : "/products");
  };

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  
  

  return (
    <header class="header" id="header">
        <nav class="nav container">
            <img className="header_icon" src={pic} onClick={() => navigate("/")} />


            <div className="header_center">
            <form  onSubmit={searchSubmitHandler}>
          <input
          
            type="text"
            placeholder="Search the accomodation"
            onChange={(e) => setkeyword(e.target.value)}
          />
           {/* <input type="submit" value="Click Me"></input>
          <SearchIcon></SearchIcon> */}
          
          <button type="submit" class="btn btnmodify">
          <SearchIcon  className="banner_searchButton" ></SearchIcon>
        </button>
        
        </form>

       {/* <div style={{paddingTop:6}} onClick={()=>setShowSearch(!showSearch)} 
        className="banner_searchButton" >{showSearch ? "X" : <TuneIcon/>}
        </div> */}
         
       
          
        {/* <button onClick={handleClick}><TuneIcon/></button>
        {isShown ? <FilterPage /> : null} */}

        {/* <a onClick={() => navigate("/FilterPage")} class="nav_link ">
                        <TuneIcon name='message-square-dots'></TuneIcon>
                        </a> */}
        </div>

        {showSearch && <FilterPage />}



            <div class="nav_menu" id="nav_menu">
                <ul class="nav_list">
                    <li class="nav_item">
                        <a onClick={() => navigate("/")} class="nav_link active_link">
                        <box-icon name='home'></box-icon>
                            <span class="nav_name">Home</span>
                        </a>
                    </li>
                    
                    <li class="nav_item">
                        <a onClick={() => navigate("/about")} href="#about" class="nav_link ">
                        {/* <box-icon name='book-content' type='solid' ></box-icon> */}
                        <box-icon name='map'></box-icon>
                            <span class="nav_name">Map</span>
                        </a>
                    </li>

                    {/* {isAuthenticated && <UserOptions user={user} />}  */}
                    {/* <li class="nav_item">
                        <a onClick={()=>setShowSearch(!showSearch)}  className="nav_link new">
                        <box-icon name='filter-alt'></box-icon>
                            <span class="nav_name">Filter</span>
                        </a>
                    </li> */}


                    <li class="nav_item">
                        <a onClick={()=>setShowSearch(!showSearch)} class="nav_link filter">
                        <box-icon name='filter-alt'></box-icon>
                            <span class="nav_name">Filter</span>
                        </a>
                    </li>

                    <li class="nav_item">
                        <a onClick={() => navigate("/admin/product")} href="#profilo" class="nav_link ">
                            <box-icon name='user'></box-icon>
                            <span class="nav_name">Host</span>
                        </a>
                    </li>

                    <li class="nav_item">
                        <a onClick={() => navigate("/login")} class="nav_link ">
                        <box-icon name='message-square-dots'></box-icon>
                            <span class="nav_name">Login</span>
                        </a>
                    </li>

                   
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header2

//lust,anger and greed are the three doors to hell.