import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {

   const users =useLoaderData();

   console.log(users)
  return (
    <div>
      <h1>This  is user page</h1>
    </div>
  );
};

export default User;