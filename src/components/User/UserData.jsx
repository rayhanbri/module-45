import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const UserData = ({user}) => {
  const [showinfo,setShowInfo] = useState(false);
  const [visitHome,setVisitHome]=useState(false);
  const {id,name,phone,email} =user;

  const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

  const userStyle ={
    border:'2px solid yellow',
    borderRadius: "10px",
    margin:"10px",
    padding:'10px'
  }
  if(visitHome){
    return <Navigate to="/"></Navigate>
  }
  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <h2>Phone:{phone}</h2>
      <p><small>{email}</small></p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={()=>setShowInfo(!showinfo)}>{showinfo ? 'Hide' : 'Show'} info</button>
      {
        showinfo && <Suspense fallback={<span>loading...</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      }
      <button onClick={()=>setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default UserData;