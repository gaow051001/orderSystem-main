import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Card, CardContent, Grid, TextField, Button, Avatar } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import './main.css';
import OrderTicket from "./components/OrderTicket.js";
import MenuItems from "./components/MenuItems.js";


const App = () => {
  return(
      <BrowserRouter>
        <div>
            <div className="nav">
            <Link to='/'>
            <button className="btn btn-light">Home</button>
            </Link>
            <Link to='/menu'>
            <button className="btn btn-light">View Menu</button>
            </Link>
            </div>

            <div className="logo">
                Logo
                {/* <img src={logo}/> */}
            </div>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<OrderTicket />} />
            <Route path="/menu" element={<MenuItems />} />
          </Routes>
        </div>
      
        <div className="footer"></div>
      </BrowserRouter>
  )
}

export default App;
// class App extends Component {
//   <orderPage/>
// }



// function App() {
//   return (
//     <div ClassName="App">
//       <PersonList/>
//     </div>
//   )
// }
