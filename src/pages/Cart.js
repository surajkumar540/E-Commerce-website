import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import Records from '../db/Product.json';
import { CartContext } from '../pages/CartContext';
import { Link } from 'react-router-dom';
const Cart = () => {

  const { cart, setCart } = useContext(CartContext);
  // console.log(cart);
  let total =  0;
 
  // const []
  const [products, setProducts] = useState([]);

  

  useEffect(()=>{
    // console.log('cart', Object.keys(cart.items));
    
    let obj = cart.items;
    // let arr = [2, 1, 5]
    let keys = [];
    let quantity = [];

    for(let key in obj){
      keys.push(key);
      quantity.push(obj[key]);
    }

    let mainArr = [];

    for(let i=0; i<keys.length; i++){
        
        let object = Records.find((item)=>{
        return item.id === keys[i]
    
      })
    
      object.qty = quantity[i];
      mainArr.push(object)
  }
  
    // console.log(mainArr);
    

    setProducts(mainArr);

  },[cart]);

  // console.log(products);
 
  // else{

   const getQty = (productPrice, productQty) =>{
    let store1 = productPrice;
    let store2 = productQty;
    // console.log(store1, store2);
    const sum = store1 * store2;
    total += sum;
    return sum;
  }


  const handleDelete =(productId) =>{
    
    const carts = {...cart};
    const qty = carts.items[productId];
    delete carts.items[productId]
    carts.totalItems -= qty;
    setCart(carts)
  }

 const handleOrderNow = () =>{
    window.alert('Order placed succusfully !');
    setProducts([]);
    setCart({});
 }

  return (
  <>
      {
        (products.length == 0 ? <img className='mx-auto w-1/2 mt-18' src='/images/empty-cart.png'></img> : 
      
    <div className='container mx-auto lg:w-1/2 w-full pb-24'>
      <h1 className='my-12 font-bold'>cart items</h1>
      <ul>

        {
          products.map((item) =>{
            return (
            
        <li className='mb-12' key={item.id}>
          <div className='flex items-center justify-between '>
            <div className=' flex items-center '>
              <img className='h-16' src={item.image} />
              <span className='font-bold ml-4 w-48'>{item.name}</span>
            </div>
            <div>
                <b className='px-4'>Qty : {item.qty}</b>
            </div>
                  <span><b> ₹ {getQty(item.price, item.qty)} </b></span>
                  <button onClick={() => { handleDelete(item.id) }} className='bg-blue-500 px-4 py-2 rounded-full leading-none text-white hover:bg-red-500'>Delete</button>
          </div>
        </li>
            )
          })
          }
      </ul>
        <hr className='my-6'/>
        <div className='text-right'>
              <b>Grand Total:  ₹ {total}</b>
        </div>
      <div className='text-right mt-6'>
              <button onClick={() => { handleOrderNow() }} className='bg-yellow-500 px-4 py-2 rounded-full leading-none text-white hover:bg-green-500'>shop now</button>
        </div>
    </div>
        )} 
    </>
  )
}
// }

export default Cart