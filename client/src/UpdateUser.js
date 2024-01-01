import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import photo from './images/photo.png';  // Add the correct path to your photo

export default function UpdateUser() {
  const { id } = useParams();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [enrollnumber, setEnrollnumber] = useState();
  const [dateofadmission, setDateofadmission] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/getUser/${id}`)
      .then(result => {
        console.log(result);
        setFirstname(result.data.firstname);
        setLastname(result.data.lastname);
        setEmail(result.data.email);
        setPhone(result.data.phone);
        setEnrollnumber(result.data.enrollnumber);
        setDateofadmission(result.data.dateofadmission);
      })
      .catch(err => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/updateUser/${id}`, { firstname, lastname, email, phone, enrollnumber, dateofadmission })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h1> <span>|</span> CRUD OPERATIONS</h1>
        <div className="image-container">
          <img src={photo} alt="Admin Image" />
        </div>
        <p>Karthi Madesh</p>
        <div to="/" className="icon-container">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </div>
        <div to="/login" className="icon-container-1">
          <span>Logout </span>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
      <div className='create-user'>
        <div className='add-user-form'>
            <form onSubmit={Update}>
            <div className='form-group'>
                    <label>First Name</label>
                    <input type='text' className='form-control' placeholder='Enter Name'
                    value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Last Name</label>
                    <input type='text' className='form-control' placeholder='Enter Name'
                    value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' className='form-control' placeholder='Enter Email' 
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label>Phone</label>
                    <input type='text' className='form-control' placeholder='Enter Phone Number'
                    value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label>Enroll Number</label>
                    <input type='text' pattern=".{10,}" className='form-control' placeholder='Enter Enroll Number'
                    value={enrollnumber} onChange={(e) => setEnrollnumber(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label>Date of Admission</label>
                    <input type='date' className='form-control' placeholder='Enter Date Of Admission'
                    value={dateofadmission} onChange={(e) => setDateofadmission(e.target.value)}/>
                </div>
                <button type='submit' className='button btn-submit'>Update</button>
            </form>
        </div>
    </div>
    </div>
  );
}
