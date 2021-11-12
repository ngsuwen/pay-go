import "./App.css";
import Home from './components/Pages/HomePage/Home';
import Category from './components/Pages/CategoryPage/Category';
import Product from './components/Pages/ProductPage/Product'
import Cart from "./components/Pages/CartPage/Cart";
import Header from './components/Pages/General/Header';
import Tabs from './components/Pages/General/Tab';
import Footer from './components/Pages/General/Footer';
import { Route, Routes, Navigate } from "react-router-dom";
import { createContext, useState } from 'react';

const DataContext = createContext();

function App() {
  const [cart, setCart]=useState([])
  return (
    <>
    <nav>
      <Header />
      <Tabs cart={cart.length}/>
      {/* <Category category="women's%20clothing"/>  */}
      {/* jewelery electronics men's%20clothing women's%20clothing*/}
    </nav>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/category/:category/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
