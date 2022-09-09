import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../pages/CartContext'
import Products from '../db/Product.json'

const Navigation = () => {
  
const [search, setSearch] = useState("");
// console.log(search);

// CSS object
  const cartStyle = {
    background:"red",
    display:'flex',
    padding:'6px 12px',
    borderRadius:"30px",
  }
  const { cart, searchProduct } = useContext(CartContext);

  
  const handleChange = (e) =>{
    setSearch(e.target.value);
  }

  useEffect( () => {
    searchProduct(search);
  },[search])

  return (
    <div className='bg-black h-20 flex bg-opacity-90 sticky top-0 z-40'>
      <nav className='container mx-auto w-full flex items-center justify-between py-3 rounded'>

        <Link to='/'>
          <div className='flex'>
          <img style={{ height:44 }} src='/images/boatLogo.png' alt='logo'></img>
            <b className='text-white items-end flex mx-4 text-5xl'>Bo<span className='text-red-500'>A</span>t</b>
          </div>
        </Link>
          
        <ul className='flex items-center '>
          <input type='search' placeholder='Search...' className='search border-2 rounded py-1 mr-6 p-2 bg-white border-blue-700 outline-none ' value={search} onChange = {handleChange} />         
          <li><Link to='/'> <b className='btn text-primary md:border-2 rounded px-3 py-1 hover:bg-red-500 hover:text-white transition ease-out duration-500 bg-white'>Home</b></Link></li>
          <li className='ml-6'><Link to='/products'> <b className='btn text-primary md:border-2 rounded px-3 py-1 hover:bg-red-500 hover:text-white bg-white transition ease-out duration-500'>Product</b> </Link></li>
          <li  className='ml-6'>
            <Link to='/cart'>
              <div style= {cartStyle}>
                <span><b className=' text-white '>{cart.totalItems ? cart.totalItems : 0}</b></span> {/* for quantatity */}
                <img className='ml-2 ' src='/images/cart.png'></img>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation