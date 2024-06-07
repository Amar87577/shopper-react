import './App.css';
import Navbar from './common/Header/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Login from './pages/Login'
import Footer from './common/Footer/Footer';
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import kids_banner from './Assets/banner_kids.png'
import Cart from './pages/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div>
      

<BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes> 
    <Footer/>   
    </BrowserRouter>

 
    </div>
  );
}

export default App;
