import React from 'react';

const UserData = ({user}) => {
  const {name,phone,email} =user;

  const userStyle ={
    border:'2px solid yellow',
    borderRadius: "10px",
    margin:"10px",
    padding:'10px'
  }
  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <h2>Phone:{phone}</h2>
      <p><small>{email}</small></p>
    </div>
  );
};

export default UserData;