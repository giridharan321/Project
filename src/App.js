import Navbar from './Components/Navbar'
import './App.css';
import Router from './Pages/Router';
import Cart from './Pages/Cart'
import Footer from './Pages/Footer';
import Counterslide from './Components/Counterslide';
function App() {
  return (
  <div>
    <Navbar/>
    <Router/>
    <Cart/>

    <Footer/>
    <Counterslide/> 
    </div>
  );
}

export default App;
