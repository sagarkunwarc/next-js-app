import React from 'react';


export const generateMetadata = async () => {
  await new Promise ((resolve) => setTimeout(resolve, 500) )
  return {
    title: "Product detail page",
    description: " product description here"
  }
}

const ProductId = ({params}: {params: {productId:string }}) => {

  if (parseInt(params.productId) > 100)
  {
    throw new Error("Too High Product id");
  }
  return (
    <div>
      <h1>Hello  from Product ID page for {params.productId}</h1>
    </div>
  );
};

export default ProductId;