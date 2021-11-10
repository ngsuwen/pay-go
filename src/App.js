import "./App.css";
import Home from './components/Pages/HomePage/Home';
import Category from './components/Pages/CategoryPage/Category';
import Product from './components/Pages/ProductPage/Product'
import Header from './components/Pages/General/Header';
import Tabs from './components/Pages/General/Tab';
import Footer from './components/Pages/General/Footer';
import { Route, Routes, Navigate } from "react-router-dom"

function App() {
  return (
    <>
    <nav>
      <Header />
      <Tabs />
      {/* <Category category="women's%20clothing"/>  */}
      {/* jewelery electronics men's%20clothing women's%20clothing*/}
    </nav>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/category/:category/:id' element={<Product />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
