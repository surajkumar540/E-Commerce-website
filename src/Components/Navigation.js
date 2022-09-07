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
    background:"#F59E0D",
    display:'flex',
    padding:'6px 12px',
    borderRadius:"50px"
  }
  const { cart, searchProduct } = useContext(CartContext);

  
  const handleChange = (e) =>{
    setSearch(e.target.value);
  }

  useEffect( () => {
    searchProduct(search);
  },[search])

  return (
    <div className='bg-black'>
      <nav className='container mx-auto w-full flex items-center justify-between py-3 rounded'>

        <Link to='/'>
          <img style={{ height:55 }} src='/images/boatLogo.png' alt='logo'></img>
        </Link>
          
        <ul className='flex items-center '>
          
          <input type='search' placeholder='Search...' className='search border-2 rounded py-2 mr-6 p-2 bg-white border-blue-500 outline-none' value={search} onChange = {handleChange} />        
          
          <li><Link to='/'> <b className='btn text-primary md:border-2 rounded px-3 py-2 hover:bg-gray-200 transition ease-out duration-500 bg-white'>Home</b> </Link></li>
          <li className='ml-6'><Link to='/products'> <b className='btn text-primary md:border-2 rounded px-3 py-2 hover:bg-gray-200 bg-white transition ease-out duration-500'>Product</b> </Link></li>
          <li  className='ml-6'>
            <Link to='/cart'>
              <div style= {cartStyle}>
                <span><b>{cart.totalItems ? cart.totalItems : 0}</b></span> {/* for quantatity */}
                <img className='ml-2' src='/images/cart.png'></img>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation