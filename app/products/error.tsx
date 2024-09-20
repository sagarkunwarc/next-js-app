"use client";

import React from 'react';

const ProductError = ({
    error,
    reset,
}:{
    error: Error;
    reset: () => void;
}) => {
  return (
    <div>
      <h1>Oh No !! {error.message}</h1>
      <button onClick={()=> reset()}>Reset </button>
    </div>
  );
};

export default ProductError;