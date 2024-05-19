import React, { useState } from 'react';
import "./Query.css"

const QueryCard = ({ initialData, onClose }) => {
  const [data, setData] = useState(initialData);
  const [isActive, setIsActive] = useState(true);

  const handleClose = () => {
    setIsActive(false);
    onClose();  // Callback to notify parent component (if needed)
  };

  if (!isActive) {
    return null;
  }

  return (
    <>
    
        <div className='queryCard'>
          
          <div><strong>Name:</strong> {data.name}</div>
          <div><strong>Email:</strong> {data.email}</div>
          <div><strong>Phone:</strong> {data.phone}</div>
          <div><strong>Subject:</strong> {data.subject}</div>
          <div><strong>Message:</strong> {data.message}</div>
          {/* <div><strong>Active:</strong> {data.active}</div> */}
          <button className='cardClose' onClick={handleClose}>
            X
          </button>
        </div>
    </>
  );
}

export default QueryCard;

