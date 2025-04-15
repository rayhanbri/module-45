import React from 'react';
import { useLoaderData } from 'react-router';
import UserData from './UserData';
const UserNew = () => {

   const users = useLoaderData();

    
  return (
    
      <div>
      <h1>This  is user page</h1>
      {
        users.map (user => <UserData key={user.id} user={user}></UserData>)
      }
    </div>
   
  );
};

export default UserNew;