import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Records from '../db/Product.json';
import Products from '../Components/Products.js'
import { useNavigate } from 'react-router-dom';

// import useHistory

const SingleProduct = () => {
    const [product, setProducts] = useState({});
    const params = useParams();
    // console.log(params);
    // const history = useHistory();

    const navigate = useNavigate();
    // console.log(navigate);

    const handleClick = () =>{
        navigate('/');
    }

    const temp = '608c280ce165f6137f02b54a'
    useEffect(() => {
       const store =  Records.find((item)=>{
            return item.id === params._id
        })
        // console.log(store);
        setProducts(store);
    }, [params._id])

    // console.log(params._id);
    return (
        <>
            <div className='container mx-auto mt-12'>
                <button className='mb-12 font-bold' onClick={handleClick}>Back</button>
                <div className='flex'>
                    <img src={product.image} alt='pizza' />
                    <div className='ml-16'>
                        <h1 className='text-xl font-bold'>{product.name} </h1>
                        <div className='text-md'>{product.size}</div>
                        <div className='font-bold mt-2'>{product.price}</div>
                        <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct