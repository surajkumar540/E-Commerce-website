import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './Components/Navigation'
import ProductPages from './pages/ProductPages'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
import { CartContext } from './pages/CartContext'

const App = () => {

    const [ cart, setCart ] = useState({});
    //fetch data from localstorage

    useEffect(() => {
       
        const cart = window.localStorage.getItem('cart');
         setCart(JSON.parse(cart))
        // console.log(JSON.parse(cart));
    },[])

    useEffect(() =>{
       window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} exact />
                        {/* <Route path="/about" element={<About/>}/> */}
                        <Route path="/products" exact element={<ProductPages />} />
                        <Route path="/products/:_id" element={<SingleProduct />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </CartContext.Provider>
            </Router>
        </>
    )
}

export default App