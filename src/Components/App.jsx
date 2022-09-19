import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import SingleProduct from './SingleProduct/SingleProduct';
import Login from './Login/Login';
import SellProduct from './SellProduct/SellProduct';
import Sign from './SignUp/Sign';
import MyProducts from './MyProducts/MyProducts';
import AdminProduct from './AdminProduct/Adminproduct';
import AdminUser from './AdminUser/AdminUser';

const App = () => {

  return (
    <>
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/login" element={<Login/>}/>
        <Route exact path ="/sign" element={<Sign/>}/>
        <Route exact path ="/MyProducts" element={<MyProducts/>}/>
        <Route exact path ="/sellProducts" element={<SellProduct/>}/>
        <Route exact path ="/:id" element={<SingleProduct/>}/>
        <Route exact path="/admin/products" element={<AdminProduct/>}/>
        <Route exact path ="/admin/users" element={<AdminUser/>}/>
      </Routes>
    </>
  );
};

export default App;
