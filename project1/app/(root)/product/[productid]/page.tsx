
import React from "react";

const ProductDetails = async({
  params,
}: {
  params: Promise<{ productid: string }>;
}) => {

  const productId = (await params).productid;
  
  return <div>ProductDetails of {productId}</div>;
};

export default ProductDetails;
