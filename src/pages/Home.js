import React from 'react'
import Products from '../Components/Products'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='bg-red-300'>
      <div className='hero py-16 bg-red-600 rounded' > {/* div start */} 
        <div className='container mx-auto  flex justify-between items-center'>
          <div className='w-1/2'>
            <h6 className='text-lg m-2 text-white'><em><b>Keep your music close </b></em></h6>
            <h1 className='text-4xl md:text-8xl font-bold mb-2 text-white'>Don't Wait !</h1>
            <Link to='/products'>
            <button className='px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600'>Shop now</button>  
            </Link>
          </div> {/* first div*/}

          <div className=' w-1/2 flex items-center animate-bounce h-12 '>
            <img className='h-80 ' src='/images/headphones.png' alt='headphone img'></img>  
          </div> {/* headphone div */}
        </div>
      </div>{/* div end */}

      <div>
        <Products/>
      </div>
    </div>
  )
}

export default Home