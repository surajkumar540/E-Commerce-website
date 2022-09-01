import React from 'react'
import Products from '../Components/Products'

const Home = () => {
  return (
    <>
      <div className='hero py-16'> {/* div start */} 
        <div className='container mx-auto  flex justify-between items-center'>
          <div className='w-1/2'>
            <h6 className='text-lg'><em>Are you Hungry?</em></h6>
            <h1 className='text-3xl md:text-6xl font-bold'>Don't Wait !</h1>
            <button className='px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600'>Order now</button>  
          </div> {/* first div*/}

          <div className='w-1/2'>
            <img className='w-3/5' src='/images/pizza.png' alt='pizz'></img>  
          </div> {/* pizza div */}
        </div>
      </div>{/* div end */}

      <div className='pb-24'>
        <Products/>
      </div>
    </>
  )
}

export default Home