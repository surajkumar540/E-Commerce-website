import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../pages/CartContext';


const Product = (props) => {

    const [isAdding, setIsAdding] = useState(false)
    const { cart, setCart } = useContext(CartContext);
    const { product } = props;
    //   console.log(product);


    const addToCart = (event, product) => {
        // console.log(product.id);
        event.preventDefault();

        let _cart = { ...cart }; //{items:{}}
        // console.log(_cart);//empty object

        if (!_cart.items) {
            _cart.items = {}
        }
        if (_cart.items[product.id]) {
            _cart.items[product.id] += 1;
        }
        else {
            _cart.items[product.id] = 1; //set item if new one
        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0;
        }

        _cart.totalItems += 1;
        setCart(_cart);

        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000)
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
            <div className='rounded-xl bg-gray-300  hover:shadow-2xl transform transition-all translate-x-4  '>
                <img className=' p-1 rounded-t-2xl' src={product.image} alt='logo' />
                <div className='text-center bg-yellow-600'>
                    <h2 className='text-lg font-bold text-white'>{product.name}</h2>

                </div>
                <div className=' h-20 text-center flex flex-col items-center'>
                    <span className='text-black pt-1 w-full '><b>Price ₹{product.price}</b></span>
                    <button disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${isAdding ? 'bg-green-600' : 'hover: bg-red-700'} '   py-1  flex justify-center m-2  rounded-xl w-3/5 font-bold   hover:-translate-y-1 hover:scale-110 duration-300 text-white transform transition-all hover:scale-105 `}>Add{isAdding ? 'ed' : ""}</button>
                </div>
            </div>
        </Link>
    )
}

export default Product;