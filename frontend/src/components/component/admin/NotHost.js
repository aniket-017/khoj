import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./NotHost.css";
import { createHost } from '../../../actions/hostAction';
import BadgeIcon from '@mui/icons-material/Badge';
import CallIcon from '@mui/icons-material/Call';

import Phone from "../../User/Phone"

const NotHost = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [ContactNo, setContactNo] = useState('');


  const handleNameChange = (e) => {
    setName(e.target.value);
  };



  const handlePhoneChange = (e) => {
    setContactNo(e.target.value);
  };


  const handleSubmit =  async (e) => {
    e.preventDefault();
    await dispatch(createHost({ name, ContactNo}));
    // Clear form fields
    setShowSuccessMessage(true);
    setName('');
  
    setContactNo('');

    // Call function to create Host object and send to backend
  };
  return (
    <div className='NotHost'>
     {/* <div> */}
   
    {/* <h3>1) To access Page You have to Register </h3>
    <button>Login Page</button>
    <h3>2) If you have login then for becoming host click here </h3> */}

    {showSuccessMessage ? (
      <div className="form">
        <p>Successfully submitted the form!</p>
        <hr></hr>
        <h2 className="Name">Our Team will Contact you very soon</h2>
        <h3 >Thanks !</h3>
      </div>
      ) : (
    <form className="form" onSubmit={handleSubmit}>
    <p className='Heading'>Get in touch with us to list your Room/hostel here!</p>
    <hr></hr>
      <label className="Name">Full Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />

      <div></div>

      <label htmlFor="phone" className="Name">Phone No:</label>
      <input type="tel" id="ContactNo" value={ContactNo} onChange={handlePhoneChange} />
      <div></div>
 

      <button  className="submit" type="submit">Submit</button>
    </form> 
    )}
  
    {/* <phone/> */}
    </div>
  )
}

export default NotHost