import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/Product.jsx';
import Home from './pages/Home.jsx';
import Order from './pages/Order.jsx';
import News from './pages/News.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='order' element={<Order />} />
          <Route path='news' element={<News />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
