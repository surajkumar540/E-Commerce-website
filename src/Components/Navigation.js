import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../pages/CartContext'

const Navigation = () => {
  
  // CSS object
  const cartStyle = {
    background:"#F59E0D",
    display:'flex',
    padding:'6px 12px',
    borderRadius:"50px"
  }
  const { cart } = useContext(CartContext);
  return (
    <>
      <nav className='container mx-auto flex items-center justify-between py-4'>
        <Link to='/'>
          <img style={{ height: 55}} src='/images/logo.png' alt='logo'></img>
        </Link>
        <ul className='flex items-center '>
          <li ><Link to='/'> <b>Home</b> </Link></li>
          <li className='ml-6'><Link to='/products'> <b>Product</b> </Link></li>
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
    </>
  )
}

export default Navigation