import React, { use } from 'react';

const User2 = ({userPromise}) => {

   const userData = use(userPromise)

   console.log( 'user 2', userData)
  return (
    <div>
      <h1>this is user 2</h1>
    </div>
  );
};

export default User2;