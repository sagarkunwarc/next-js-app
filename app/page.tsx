import React, { Suspense } from "react";
import ProductDetail from "./product-details/page";
import ProductList from "./product-list/page";

const MyComponent = () => {
  return (
    <div>
      <h1>Hello from Main Page </h1>
      <Suspense fallback={<div> Product Detail Loading...</div>}>
        <ProductDetail />
      </Suspense>
      <div> </div>
      <Suspense fallback={<div> Product List Loading...</div>}>
      <ProductList />
      </Suspense>
    </div>
  );
};

export default MyComponent;
