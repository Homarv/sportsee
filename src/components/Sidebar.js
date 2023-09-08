import React from 'react';
import Sidebarbtn from './Sidebarbtn';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar_container_btn'>
        <Sidebarbtn imageUrl="yoga.svg" description="yogiste"/>
        <Sidebarbtn imageUrl="swimming.svg" description="naggeur"/>
        <Sidebarbtn imageUrl="cycling.svg" description="cycliste"/>
        <Sidebarbtn imageUrl="dumbbell.svg" description="haltère"/>
      </div>
      <div className='copiryght'>Copiryght, SportSee 2020</div>
    </div>
  );
};

export default Sidebar;