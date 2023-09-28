import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Error = () => {
  return (
    <div className='error_page'>
      <Navbar/>
      <div className='container'>
        <Sidebar/>
        <div className='main-container'>
          <h1> Erreur 404</h1>
          <p>Page not Found !</p>
        </div>
      </div>
    </div>
  );
};

export default Error;