"use client";

import React from 'react';


const ProductError = ( {error}: {error: Error}) => {
  return (
    <div>
      <h1>Oh no ! {error.message} </h1>
    
    </div>
  );
};

export default ProductError;