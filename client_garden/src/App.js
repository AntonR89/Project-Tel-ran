import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import SalePage from './pages/SalePage';
import CartPage from './pages/CartPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductDescrPage from './pages/ProductDescrPage';
import CategoryProductPage from './pages/CategoryProductPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductDescrPage />} />
        <Route path='/sale' element={<SalePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/categories/:id' element={<CategoryProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
