
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar'
import Login from './pages/login/login'
import Main from './pages/main/main';

import Shop from './pages/shop/shop';
import { AuthProvider } from "./context/context";
import Cart from './pages/cart/cart'
import WishList from './pages/wishList/wishlist';
import Register from './pages/register/register'
import { ModalProvider } from './context/modal'
import Search from './pages/search/search';
import Vase from './pages/options/vase';
import Bouquet from './pages/options/bouquet';


function App() {
  return (
    <>
      <ModalProvider>

        <Navbar />
        <Routes>
          
          <Route path='/login' element={<AuthProvider><Login /></AuthProvider>} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<AuthProvider><Cart /></AuthProvider>} />
          <Route path='/wishList' element={<AuthProvider><WishList /></AuthProvider>} />
         
          <Route path='/profile' />
          <Route path='/checkout' />
         

          <Route path='/' element={<Main />} />
          <Route path='/search' element={<Search />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/vases' element={<Vase />} />
          <Route path='/shop/bouquets' element={<Bouquet />} />


        </Routes>
      </ModalProvider>
    </>
  );
}

export default App;
