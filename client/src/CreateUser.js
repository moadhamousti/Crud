import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import photo from './images/photo.png';



export default function CreateUser() {
    const[firstname, setFirstname] =useState()
    const[lastname, setLastname] =useState()
    const[email, setEmail] =useState()
    const[phone, setPhone] =useState()
    const[enrollnumber, setEnrollnumber] =useState()
    const[dateofadmission, setDateofadmission] =useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/createUser", {firstname, lastname, email, phone, enrollnumber, dateofadmission})
          .then(result => {
            console.log(result)
            navigate('/')
          })
          .catch(err => console.log(err))
          
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
            <form onSubmit={Submit}>
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
                <button type='submit' className='button btn-submit'>Create</button>
            </form>
        </div>
    </div>
    </div>
  );
}