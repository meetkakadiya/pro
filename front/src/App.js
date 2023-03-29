import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, useRoutes } from 'react-router-dom';
import Home from './Pages/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css';
import { AddProduct } from './Pages/AddProduct';
import { EditProduct } from './Pages/EditProduct';
import DashboardComponent from './components/DashboardComponent';

function App() {
  const AppRouter = [
    {
      path:'/',
      element:(
        <DashboardComponent 
        component={Home}
        />

      )
    },
    {
      path:'/create',
      element:(
        <DashboardComponent 
        component={AddProduct}
        />
      )
    },
    {
      path:'/edit',
      element:(
        <DashboardComponent 
        component={EditProduct}
        />
      )
    }
  ]
  const App = useRoutes(AppRouter)
  return App
}

export default App;
