import "./App.css";
import Home from './components/Pages/HomePage/Home';
import Category from './components/Pages/Category';
import Header from './components/Pages/Header';
import Footer from './components/Pages/Footer';

function App() {
  return(
    <>
    <Header/>
    <Home/> 
    {/* <Category category="women's%20clothing"/>  */}
    {/* jewelery electronics men's%20clothing women's%20clothing*/}
    <Footer/>
    </>
  );
}

export default App;
