import React from "react";

const ProductDetail = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <> Product Detail Page</>;
};

export default ProductDetail;
