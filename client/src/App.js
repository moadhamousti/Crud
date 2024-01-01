// import React, { useState } from 'react';
import './App.css';
// import Post from './post';
// import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import Users from './Users';




function App(){
  // const [count, setCount] = useState(0);

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          {/* <Route path="/" element={<Users />}></Route> */}
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;