import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Pages/Home'
import './App.css';
import { AddProduct } from './Pages/AddProduct';
import { EditProduct } from './Pages/EditProduct';

function App() {
  // Define app route
  const AppRouter = [
    {
      path:'/',
      element:(
        <Home/>     // home component
      )
    },
    {
      path:'/create',
      element:(
        <AddProduct/>   // add product component
      )
    },
    {
      path:'/edit',
      element:(
        <EditProduct/>  // edit product component
      )
    }
  ]
  const App = useRoutes(AppRouter)
  return App
}

export default App;
