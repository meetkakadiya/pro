import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css';
import { AddProduct } from './Pages/AddProduct';
import { EditProduct } from './Pages/EditProduct';

function App() {
  return (
    <div >
       <Header />
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }  />
          <Route path='/create' element={ <AddProduct /> }  />
          <Route path='/edit' element={ <EditProduct /> }  />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
