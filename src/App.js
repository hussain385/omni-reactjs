import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './views/Signup';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Customer from './views/Customer';
import Inventory from './views/Inventory';
import Setting from './views/Setting';
import Reciepts from './views/Reciepts';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="customer" element={<Customer />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="setting" element={<Setting />} />
        <Route path="reciept" element={<Reciepts />} />
      </Routes>
    </div>
  );
}

export default App;
