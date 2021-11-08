import "./App.css";
import Home from './components/Pages/HomePage/Home';
import Category from './components/Pages/Category';
import Header from './components/Pages/General/Header';
import Tabs from './components/Pages/General/Tab';
import Footer from './components/Pages/General/Footer';

function App() {
  return(
    <>
    <Header/>
    <Tabs/>
    <Home/> 
    {/* <Category category="women's%20clothing"/>  */}
    {/* jewelery electronics men's%20clothing women's%20clothing*/}
    <Footer/>
    </>
  );
}

export default App;
