import "./App.css";
import Home from './components/Pages/HomePage/Home';
import Category from './components/Pages/Category';
import Header from './components/Pages/General/Header';
import Tabs from './components/Pages/General/Tab';
import Footer from './components/Pages/General/Footer';
import { Route, Link, Routes, Navigate } from "react-router-dom"

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
        <Route path="/:category" element={<Category />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
