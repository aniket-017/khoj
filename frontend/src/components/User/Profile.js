import React, { Fragment,useEffect  } from 'react';

import { useSelector } from 'react-redux';
import MetaData from '../layout/MetaData';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import "./Profile.css";
import { useDispatch } from "react-redux";
import { logout } from '../../actions/userAction';

const Profile = ({ history }) => {

    const {user, loading, isAuthenticated} = useSelector((state) =>state.user);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     if (isAuthenticated === false) {
    //       history.push("/login");
    //     }
    //   }, [history, isAuthenticated]);
     function logoutUser() {
   dispatch(logout());
    alert.success("Logout Successfully");
  }
      
  return (
   <Fragment>
    {loading ? (<Loader />) : (
        <Fragment>
    <MetaData title={`${user.name}'s Profile`} />

    <div className='profileContainer'>
        <div>
            <h1>My Profile</h1>
            <img src={user.avatar?.url} alt="avatar" />
            {/* <Link to="me/update">Edit Profile</Link> */}
        </div>

        <div>

            <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
            </div>

            <div>
                <h4>Email</h4>
                <p>{user.email}</p>
            </div>
            
            <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0,10)}</p>
            </div>

            <div className='changePassword'>
                {/* <Link to="/orders">My Orders</Link> */}
                <Link  to="/password/update">Change Password</Link>
            </div>

            <div className='changePassword'>
            <Link to="me/update">Edit Profile</Link>
            </div>
            <button className='Logout' onClick={logoutUser}>
                Logout
            </button>
            <div className='mobile'>

            </div>
        </div>
    </div>
    </Fragment>
    )}
   </Fragment>
  );
};

export default Profile;
