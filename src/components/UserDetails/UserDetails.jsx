import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
   const user =useLoaderData();
  //  console.log(user)
  const {name,website} = user;

  const params = useParams();
  console.log(params)

  return (
    <div>
      <h1>this is user Details</h1>
      <p>Name:{name}</p>
      <p>Website:{website}</p>
    </div>
  );
};

export default UserDetails;