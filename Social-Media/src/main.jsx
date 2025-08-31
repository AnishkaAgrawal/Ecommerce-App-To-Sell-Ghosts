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
// import ProtectedRoute from "./components/ProtectedRoute.jsx";
// import ProtectedRoute from '../src/components/ProtectedRoute.jsx';

// New Category Components
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
  { path: "/login", element: <LoginForm /> },
  { path: "/", element: <Navigate to="/login" replace /> }, // redirect root to login
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "details/:id", element: <Comments /> },
      { path: "add-to-cart", element: <Bag /> },
      { path: "ghost-order", element: <GhostOrder /> },
      { path: "companionship", element: <Companionship /> },
      { path: "revenge", element: <Revenge /> },
      { path: "productivity", element: <Productivity /> },
      { path: "peace", element: <Peace /> },
      { path: "sleep", element: <Sleep /> },
      { path: "product", element: <Product /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

// const router = createBrowserRouter([
//   {
//     path:"/login",
//     element:<LoginForm/>
//   },
//   {
//   path: "/" , element: <App/> , children: [
//     // {path : "/login" , element : <LoginForm/>},
//     { path: "/" , element: <Home/> },
//     {path : '/details/:id',element : <Comments/>},
//     { path: "/add-to-cart", element: <Bag/> },
//     // { path: "/profile" , element: <Profile/> },
//     {path : "/ghost-order" ,element : <GhostOrder/>},
//     // Updated categories to match navbarItem
//     { path: "/companionship", element: <Companionship/> },
//     { path: "/revenge", element: <Revenge/> },
//     { path: "/productivity", element: <Productivity/> },
//     { path: "/peace", element: <Peace/> },
//     { path: "/sleep", element: <Sleep/> },

//     { path: "/product", element: <Product/> },
//   ]
// }])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={finalStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
