//import Products from './components/Products/Products';
//import Navbar from './components/Navbar/Navbar';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import React, { useState, useEffect } from 'react';
import {commerce } from './lib/commerce';
import {Products , Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
    //will initialize an empty array of products (flashback of POO)
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    //async = that then , that catch method 
    const fetchProducts = async() => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () =>{
        setCart(await commerce.cart.retrieve());
        
    } 

    //add stuff on the cart 
    //will pass those params to the api , setCart = update cart 
    const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, {quantity});

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async (productId) => {
        const {cart} = await commerce.cart.empty();

        setCart(cart);
    }

    //only run at the start[]
    useEffect(() =>{
        fetchProducts();
        fetchCart();
    }, []);

//    console.log(products);
    console.log(cart);
//switch changes the products to the cart and vice versa 
return(
    
        <Router>
            <div>
                 <Navbar totalItems={cart.total_items}/>
                 <Switch>
                     <Route exact path="/">
                         <Products products={products} onAddToCart={handleAddToCart}/>
                     </Route>
                     <Route exact path="/cart">
                         <Cart cart={cart}
                         handleUpdateCartQty = {handleUpdateCartQty}
                         handleRemoveFromCart = {handleRemoveFromCart}
                         handleEmptyCart = {handleEmptyCart}
                         
                         />
                     </Route>
                     <Route exact path = '/checkout'>
                         <Checkout cart={cart}></Checkout>
                     </Route>
                 </Switch>
            </div>
        </Router>
);

}
export default App

