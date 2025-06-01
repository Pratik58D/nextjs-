import React from "react";
import { notFound } from "next/navigation";
const ProductReview = async ({
  params,
}: {
  params: { productid: string; reviewId: string };
}) => {

    const{productid , reviewId} = await params;
    if(parseInt(reviewId) > 1000){
      notFound();
    }


  return <div>
    <h1>
        Review of {reviewId} for product {productid}
    </h1>
  </div>;
};

export default ProductReview;
