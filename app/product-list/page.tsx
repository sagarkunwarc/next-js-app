import React from "react";

const ProductList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <>Product List Page</>;
};

export default ProductList;
