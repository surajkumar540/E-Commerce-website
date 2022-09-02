import React, { useEffect, useState, useContext} from 'react'
import Product from './Product'
import { CartContext } from '../pages/CartContext';
import Records from '../db/Product.json';
const Products = () => {

  // const { name } = useContext(CartContext);

  return (
    <>
      <div className='container mx-auto pb-24'>
        <h1 className='text-lg font-bold my-8'>Products</h1>
        <div className='grid grid-cols-5 my-8 gap-24'>
          {
            Records.map(product => <Product key={product.id} product={product} />)  
          }
        </div>
      </div>
    </>
  )
}

export default Products