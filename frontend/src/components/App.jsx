import React from "react";
import Navigation from "./Navbar";
import Home from "./Home";
import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import ProductDetails from "./Product/ProductDetails.js";
import Products from "./Product/Products.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignUp from "./User/LoginSignUp";
import store from "../store";
import { loadUser } from "../actions/userAction";

function App(params) {

  React.useEffect(()=>{
    store.dispatch(loadUser)
  }, []);
  
  return (
    <div className="app">
      <Router>
        <Header />
        {/* <Header2 /> */}
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/login" element={<LoginSignUp />} />
         
          

          <Route path="/" element={<Home />} />
        </Routes>

         <Footer /> 
      </Router>
    </div>
  );
}

export default App;
