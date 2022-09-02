import React, { useEffect, useState } from 'react'
import { useContext } from 'react'

import { CartContext } from '../pages/CartContext';
const Cart = () => {

  const { cart } = useContext(CartContext);
  const [products, setProducts] = useState();
  console.log(products);
  
  useEffect(()=>{
    if(!cart.items){
      return;
    }
    // console.log('cart', Object.keys(cart.items));
    


  },[]);

  return (
    <div className='container mx-auto lg:w-1/2 w-full pb-24'>
      <h1 className='my-12 font-bold'>cart items</h1>
      <ul>
        <li className='mb-12' >
          <div className='flex items-center justify-between '>
            <div className=' flex items-center '>
              <img className='h-16' src='./images/peproni.png' />
              <span className='font-bold ml-4 w-48'>Double peproni</span>
            </div>
            <div>
              <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'> - </button>
              <b className='px-4'>2</b>
              <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'> + </button>
            </div>
            <span> 500 </span>
            <button className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>
          </div>
        </li>

        <li className='mb-12' >
          <div className='flex items-center justify-between '>
            <div className=' flex items-center '>
              <img className='h-16' src='./images/peproni.png' />
              <span className='font-bold ml-4 w-48'>Double peproni</span>
            </div>
            <div>
              <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'> - </button>
              <b className='px-4'>2</b>
              <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'> + </button>
            </div>
            <span> 500 </span>
            <button className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>
          </div>
        </li>
      </ul>
        <hr className='my-6'/>
        <div className='text-right'>
        <b>Grand Total: 2000</b>
        </div>
      <div className='text-right mt-6'>
          <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>order now</button>
        </div>
    </div>
  )
}

export default Cart