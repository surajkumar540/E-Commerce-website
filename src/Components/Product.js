import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../pages/CartContext';


const Product = (props) => {

    const [isAdding, setIsAdding] = useState(false)
    const { cart, setCart } = useContext(CartContext);    
    const {product} = props;
    //   console.log(product);


    const addToCart = (event, product) =>{
        // console.log(product.id);
        event.preventDefault();

        let _cart = {...cart}; //{items:{}}
        // console.log(_cart);//empty object

        if(!_cart.items){
            _cart.items = {}
        }
        if( _cart.items[product.id]){
            _cart.items[product.id] += 1;
        }
        else
        {
            _cart.items[product.id] = 1; //set item if new one
        }

        if(!_cart.totalItems){
            _cart.totalItems = 0;
        }

        _cart.totalItems += 1;
        setCart(_cart);
        
        setIsAdding(true);
        setTimeout(()=>{
            setIsAdding(false);
        },1000)
    }
    // we want to store data in localStorage in this form
    //     const cart = {
    //         items:{
    //              "asd":2,
    //             'das':3
    //         },
    //         totalItems:5
    //     }
    // }
    
    return (
        <Link to={`/products/${product.id}`}>
            <div>
                <img src='./images/peproni.png' alt='pizza' />
                <div className='text-center'>
                    <h2 className='text-lg font-bold py-2'>{product.name}</h2> 
                    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>{product.size}</span> 
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <span>₹{product.price}</span> 
                    <button disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${ isAdding ? 'bg-green-500' : 'bg-yellow-500'} 'bg-yellow-500 py-1 px-4 rounded-full font-bold `}>Add{isAdding ? 'ed' : ""}</button>
                </div>
            </div>
        </Link>
    )
}

export default Product