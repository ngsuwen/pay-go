import "./App.css";
import Home from './components/Pages/HomePage/Home';
import Category from './components/Pages/CategoryPage/Category';
import Product from './components/Pages/ProductPage/Product'
import Cart from "./components/Pages/CartPage/Cart";
import Login from "./components/Pages/LoginPage/Login";
import LoginError from "./components/Pages/LoginPage/LoginError"
import Search from "./components/Pages/SearchResult/SearchResult";
import UserDetails from "./components/Pages/UserPage/UserDetails";
import Info from "./components/Pages/MiscPage/Info";
import Header from './components/Pages/General/Header';
import Tabs from './components/Pages/General/Tab';
import Footer from './components/Pages/General/Footer';
import { Route, Routes, Navigate } from "react-router-dom";
import { createContext, useState } from 'react';

export const DataContext = createContext();
export const CurrencyContext = createContext();
export const RateContext = createContext();
export const UserContext = createContext();
export const SortContext = createContext();

function App() {
  const [currency, setCurrency] = useState('');
  const [sort, setSort] = useState('');
  const [rate, setRate] = useState('');
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null);

  return (
    <>
      <UserContext.Provider value={[userId, setUserId]}>
      <nav>
        <Header />
        <Tabs cart={cart} />
        {/* <Category category="women's%20clothing"/>  */}
        {/* jewelery electronics men's%20clothing women's%20clothing*/}
      </nav>
      <main>
        <DataContext.Provider value={[cart, setCart]}>
          <CurrencyContext.Provider value={[currency, setCurrency]}>
          <SortContext.Provider value={[sort, setSort]}>
            <RateContext.Provider value={[rate, setRate]}>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/category/:category' element={<Category />} />
                  <Route path='/category/:category/:id' element={<Product />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/login-invalid' element={<LoginError />} />
                  <Route path='/user' element={userId ? <UserDetails /> : <Navigate to='/login' />} />
                  <Route path='/info' element={<Info />} />
                  <Route path='/search/:term' element={<Search />} />
                  <Route path='/*' element={<Navigate to='/' />} />
                </Routes>
            </RateContext.Provider>
            </SortContext.Provider>
          </CurrencyContext.Provider>
        </DataContext.Provider>
      </main>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
