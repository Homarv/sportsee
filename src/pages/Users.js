import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <div className="home">
    <Navbar />
    <div className="container">
      <Sidebar />
      <div className="main-container">
        <Link to='home/12'>See User 12 profil  <br/></Link>
        <Link to='home/18'>See User 18 profil</Link>
      </div>
    </div>
  </div>
  );
};

export default Users;