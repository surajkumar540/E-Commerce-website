import React, { useEffect, useState } from 'react'
import Product from './Product'
import Records from '../db/Product.json';
const Products = () => {

  

  return (
    <>
      <div className='container mx-auto pb-24'>
        <h1 className='text-lg font-bold my-8'>Products</h1>
        <div className='grid grid-cols-5 my-8 gap-24'>
          {
            Records.map(product => <Product key={product._id} product ={product} />)
          }
        </div>
      </div>
    </>
  )
}

export default Products