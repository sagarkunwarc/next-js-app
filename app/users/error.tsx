"use client"

import React from 'react';


const UserError = ({error}: {error: Error}) => {
  return (
    <div>
      <h1>Error goes here.. {error.message} </h1>
    </div>
  );
};

export default UserError;