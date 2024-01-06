import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import WishList from './pages/wishlist/Wishlist'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="wishlist" element={<WishList/>}/>
      </Route>
    </Routes>
  );
}

export default App;
