import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Records from '../db/Product.json';
import Products from '../Components/Products.js'

import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../pages/CartContext';


// import useHistory

const SingleProduct = () => {
    const [product, setProducts] = useState({});
    const params = useParams();

    const [isAdding, setIsAdding] = useState(false)
    const { cart, setCart } = useContext(CartContext);
    // console.log(params);
    // const history = useHistory();

    const navigate = useNavigate();
    // console.log(navigate);

    const handleClick = () =>{
        navigate('/');
    }

    // const temp = '608c280ce165f6137f02b54a'
    useEffect(() => {
       const store =  Records.find((item)=>{
            return item.id === params._id
        })
        // console.log(store);
        setProducts(store);
    }, [params._id])


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
    // console.log(params._id);

    const handleOrderNow = () => {
        window.alert('Order placed succusfully !');
        setProducts([]);
        setCart({});
    }

    return (
        <>
        {
                (product.length == 0 ? <img className='mx-auto w-1/2 mt-18' src='/images/empty-cart.png'></img> :
        
            <div className='container mx-auto mt-12'>
                        <button className='mb-12 font-bold  hover:-translate-y-1 hover:scale-110 duration-300 transform transition-all hover:scale-105 hover:' onClick={handleClick}>Back</button>
                <div className='flex'>
                    <img className='w-1/3' src={product.image} alt='pizza' />
                    <div className='ml-16 '>
                        <h1 className='text-4xl font-bold'>{product.name} </h1>
                                <div className='font-bold mt-2 mb-5'>₹ {product.price}</div>
                                <button disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500'} 'bg-yellow-500 py-1 px-4 rounded-full font-bold  hover:-translate-y-1 hover:scale-110 duration-300 text-white transform transition-all hover:scale-105  `}>Add{isAdding ? 'ed' : ""}</button>
                                <button onClick={() => { handleOrderNow() }} className='bg-yellow-500 px-4 py-2 rounded-full leading-none text-white hover:bg-green-500 ml-4  hover:-translate-y-1 hover:scale-110 duration-300 text-white transform transition-all hover:scale-105 hover:bg-red-700'>shop now</button>
                        <b className='flex mt-4'>About</b>
                        <div className='mt-4'>{product.about}</div> 
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default SingleProduct