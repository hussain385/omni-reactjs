import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './views/Signup';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
