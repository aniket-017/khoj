import React from "react";
import Navigation from "./Navbar";
import { useSelector } from "react-redux";
import Home from "./Home";
import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import ProductDetails from "./Product/ProductDetails.js";
import Products from "./Product/Products.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginSignUp from "./User/LoginSignUp";
import store from "../store";
import { loadUser } from "../actions/userAction";
import UserOptions from "../components/UserOptions.js";
import Profile from "../components/User/Profile.js";
// import ProtectedRoute from "./Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Dashboard from "./component/admin/Dashboard.js"
import NewProduct from "./component/admin/NewProduct";
import NotHost from "./component/admin/NotHost.js";
import NewProperty from "./component/admin/NewProperty";
import FilterPage from "./FilterPage";
import About from "./About.js"
import Mymap from "../components/Product/Mymap";

function App(params) {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  



  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="app">
      <Router>
        {/* <Navigation /> */}
        {/* <Header /> */}
        {/* {isAuthenticated && <UserOptions user={user} />} */}
        <Header2 />
       {/* <FilterPage /> */}
        <Routes>
     
          {/* <Route path="/search" element={isAuthenticated && <UserOptions user={user} />} /> */}
          {/* <Route path="/order/:id" element={isAuthenticated ? <OrderDetails /> : <Login />} /> */}


          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
         
          <Route path="/account" element={isAuthenticated?<Profile/>:<LoginSignUp />} />

          <Route path="/account/me/update" element={isAuthenticated?<UpdateProfile />:<LoginSignUp />} />

          <Route path="/password/update" element={isAuthenticated?<UpdatePassword />:<Profile />} />

          <Route path="/password/forgot" element={<ForgotPassword />} />

          <Route path="/password/reset/:token" element={<ResetPassword />} />
          
          <Route path="/login" element={<LoginSignUp />} />
          
          <Route path="/admin/dashboard" element={isAuthenticated?<Dashboard />:<Profile />} />

          <Route path="/admin/product" element={isAuthenticated?<NewProduct/>:<NotHost />} />
          
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" element={<Mymap />} />
          {/* <Route path="/account" element={<SearchPage />} /> */}

          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Products />} />
  
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
