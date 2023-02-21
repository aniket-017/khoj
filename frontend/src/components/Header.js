import React,{useState, Fragment} from "react";
import "./Header.css";
import pic from "./Image/home_logo2.ico";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const[keyword, setkeyword] = useState("");

  const searchSubmitHandler = (e) =>{
    e.preventDefault();
    navigate(keyword.trim() ? `/products/${keyword}` : "/products");
  };

  return (
    <div className="header">
      <img className="header_icon" src={pic} onClick={() => navigate("/")} />

      
        <form className="header_center" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Search the accomodation"
            onChange={(e) => setkeyword(e.target.value)}
          />
          {/* <input type="submit" value="Click Me"></input> */}
          <SearchIcon></SearchIcon>
         
          
        </form>
   

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar onClick={() => navigate("/login")}/>
      </div>
    </div>
  );
}

export default Header;
