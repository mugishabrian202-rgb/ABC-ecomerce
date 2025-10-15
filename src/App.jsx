import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId/*" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/old-products" element={<Navigate to="/products" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </div>
  );
}

export default App;
