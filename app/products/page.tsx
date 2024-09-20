import Link from "next/link";
import React from "react";



const Products = () => {
  return (
    <div>
      <h1>Product List: </h1>
      <ul>
        <Link href="/products/1"> Product 1</Link>
        <Link href="/products/2"> Product 2</Link>
        <Link href="/products/3"> Product 3</Link>
      </ul>
    </div>
  );
};

export default Products;
