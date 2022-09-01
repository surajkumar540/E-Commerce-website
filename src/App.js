import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './Components/Navigation'
import Product from './pages/Product'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
const App = () => {
    return (

        <>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>} exact/>
                    {/* <Route path="/about" element={<About/>}/> */}
                    <Route path="/products" exact element={<Product />} />
                    <Route path="/products/:_id" element={<SingleProduct />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </>
    )
}

export default App