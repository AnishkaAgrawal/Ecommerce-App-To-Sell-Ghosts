import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux';
import * as THREE from 'three';

import './index.css'
import App from './App.jsx'

import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './components/Home.jsx';
import Bag from './components/bag.jsx';
import Profile from "./components/profile.jsx";
import LoginForm from './components/Login2.jsx';
import { Navigate } from "react-router-dom";

import Companionship from './components/Companionship.jsx';   
import Revenge from './components/Revenge.jsx';         
import Productivity from './components/Productivity.jsx';    
import Peace from './components/Peace.jsx';   
import Sleep from './components/Sleep.jsx';             
import Product from './components/Product.jsx';
import GhostOrder from './components/Placeorder.jsx';
import finalStore from './components/store/MainStore.jsx';
import Comments from './components/Comments.jsx';



const router = createBrowserRouter([
  // { path: "/login", element: <LoginForm /> },
  { path: "/", element: <Navigate to="/app" replace /> }, 
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "/app/details/:id", element: <Comments /> },
      { path: "/app/add-to-cart", element: <Bag /> },
      { path: "/app/ghost-order", element: <GhostOrder /> },
      { path: "/app/companionship", element: <Companionship /> },
      { path: "/app/revenge", element: <Revenge /> },
      { path: "/app/productivity", element: <Productivity /> },
      { path: "/app/peace", element: <Peace /> },
      { path: "/app/sleep", element: <Sleep /> },
      { path: "/app/product", element: <Product /> },
      { path: "/app/profile", element: <Profile /> },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={finalStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
