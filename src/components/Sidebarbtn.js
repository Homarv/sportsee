import React from 'react';

const Sidebarbtn = ({imageUrl, description}) => {
  return (
    <div className='sidebarbtn'>
      <img src={imageUrl} alt={description} className="centered-image" />
    </div>
  );
};

export default Sidebarbtn;