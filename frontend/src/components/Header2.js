import React,{useState, Fragment} from 'react'
import 'boxicons';
import pic from "./Image/home_logo2.ico";
import "./Header2.css";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";



const Header2 = () => {
    const navigate = useNavigate();

  const[keyword, setkeyword] = useState("");

  const searchSubmitHandler = (e) =>{
    e.preventDefault();
    navigate(keyword.trim() ? `/products/${keyword}` : "/products");
  };


  

  return (
    <header class="header" id="header">
        <nav class="nav container">
            <img className="header_icon" src={pic} onClick={() => navigate("/")} />

            <form className="header_center" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Search the accomodation"
            onChange={(e) => setkeyword(e.target.value)}
          />
           {/* <input type="submit" value="Click Me"></input>
          <SearchIcon></SearchIcon> */}
          <button type="submit" class="btn btnmodify">
          <SearchIcon></SearchIcon>
</button>
        </form>


            <div class="nav_menu" id="nav_menu">
                <ul class="nav_list">
                    <li class="nav_item">
                        <a href="#home" class="nav_link active_link">
                        <box-icon name='home-alt nav_icon' ></box-icon>
                            <span class="nav_name">Home</span>
                        </a>
                    </li>

                    <li class="nav_item">
                        <a href="#about" class="nav_link ">
                        <box-icon name='book-content nav_icon' type='solid' ></box-icon>
                            <span class="nav_name">About</span>
                        </a>
                    </li>

                    <li class="nav_item">
                        <a href="#profilo" class="nav_link ">
                            <box-icon name='user nac_icon'></box-icon>
                            <span class="nav_name">Profilo</span>
                        </a>
                    </li>

                    <li class="nav_item">
                        <a onClick={() => navigate("/login")} class="nav_link ">
                        <box-icon name='message-square-dots nav_icon'></box-icon>
                            <span class="nav_name">Contact</span>
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