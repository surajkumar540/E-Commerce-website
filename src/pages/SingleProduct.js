import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Records from '../db/Product.json';
// import Products from '../Components/Products.js'
    const SingleProduct = ( ) => {

        // console.log(props);
        // console.log(params);
        
        
        const [product, setProducts] = useState({Records});
        const params = useParams();
        // console.log(params);

        useEffect( () =>{
        setProducts(product.id);
            console.log(product.Records.name);
    },[])

        // console.log(params._id);
  return (
    <> 
          <div className='container mx-auto mt-12'>
              <button className='mb-12 font-bold'>Back</button>
              <div className='flex'>
                  <img src='/images/peproni.png' alt='pizza' />
                  <div className='ml-16'>
                      <h1 className='text-xl font-bold'>havana </h1>
                      <div className='text-md'>small</div>
                      <div className='font-bold mt-2'>686</div>
                      <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>Add to cart</button>
                  </div>
              </div>
          </div>
    </>
  )
}

export default SingleProduct