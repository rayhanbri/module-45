import React from 'react';
import { useRouteLoaderData } from 'react-router';

const UserDetails = () => {
  const user = useRouteLoaderData();
  console.log(user)
  return (
    <div>
      <h1>this is user Details</h1>
    </div>
  );
};

export default UserDetails;