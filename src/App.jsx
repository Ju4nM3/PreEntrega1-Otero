import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/App.css';
import Navbar from './components/content/Navbar'
import Home from './components/content/Home'
import Product from './components/content/Product'
import Cart from './components/content/Cart'
import About from './components/content/About'
import Contact from './components/content/Contact'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>    
      </BrowserRouter>
    </>
  );
}

export default App;
