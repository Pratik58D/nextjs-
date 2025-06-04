import Link from 'next/link'
import React from 'react'

const Product = () => {
  const productId = 23;
  return (
    <div>
      <h1><Link href="/" className='text-blue-400'>Home</Link></h1>
        <h1> ALL PRODUCTS</h1>
        <h2><Link href="/product/1">Product 1</Link> </h2>        
        <h2 ><Link href="/product/2">Product 2</Link></h2>        
        <h2><Link href="/product/3">Product 3</Link></h2>        
        <h2><Link href="/product/4" replace>Product 4</Link></h2>     
        <h2><Link href={`/product/${productId}`}>product {productId}</Link></h2>   
        
        
        </div>
  )
}

export default Product