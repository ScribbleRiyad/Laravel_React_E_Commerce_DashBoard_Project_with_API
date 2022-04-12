
import React from 'react'
import './App.css';

import {BrowserRouter,Route, Routes} from 'react-router-dom';

import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Protected from './Protected'
import Productlist from './Productlist'
import SearchProduct from './SearchProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      
      <h1>Scribble E-Commerce</h1>
      <Routes>
        <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/update" element={<Protected Cmp={UpdateProduct} />} />

          <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
          <Route path="/" element={<Protected Cmp={Productlist} />} />
      
      </Routes>
      

      </BrowserRouter>
    </div>

  );
}

export default App;
