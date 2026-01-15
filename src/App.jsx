import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import './App.css'

function App() {
  return (
    <Routes>
      {/* Shortcuts instead for wrting path="/" React router has prop called index it work the same way as path="/" */}
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage/>} />
    </Routes>
  );
}

export default App
