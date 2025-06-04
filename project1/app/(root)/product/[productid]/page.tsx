import { Metadata } from "next";

type Props ={
  params : Promise<{productid : string}>
}

export const generateMetadata = async ({
  params,
} : Props) : Promise<Metadata> =>{

const id = (await params).productid;

const title = await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(`Iphone ${id}`)
  },100);
});

  return {
    title : `Product ${title}`
  }

}




const ProductDetails = async({
  params,
}: Props) => {

  const productId = (await params).productid;
  
  return <div>Product Details of {productId}</div>;
};

export default ProductDetails;
