import React from 'react';
import { useLoaderData } from 'react-router';
import UserData from './UserData';

// how to fetch data with useLoaderData() 

const User = () => {

   const users =useLoaderData();
   console.log(users)
  return (
    <div>
      <h1>This  is user page</h1>
      {
        users.map (user => <UserData key={user.id} user={user}></UserData>)
      }
    </div>
  );
};

export default User; 