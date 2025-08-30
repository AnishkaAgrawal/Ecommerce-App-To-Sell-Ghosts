import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux';
import * as THREE from 'three';

import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx';
import Bag from './components/bag.jsx';
import Profile from "./components/profile.jsx";

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

const scene= new THREE.Scene() ; 
const camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer();

console.log(scene);
console.log(camera);
console.log(renderer);

const router = createBrowserRouter([{
  path: "/" , element: <App/> , children: [
    { path: "/" , element: <Home/> },
    {path : '/details/:id',element : <Comments/>},
    { path: "/add-to-cart", element: <Bag/> },
    { path: "/profile" , element: <Profile/> },
    {path : "/ghost-order" ,element : <GhostOrder/>},
    // Updated categories to match navbarItem
    { path: "/companionship", element: <Companionship/> },
    { path: "/revenge", element: <Revenge/> },
    { path: "/productivity", element: <Productivity/> },
    { path: "/peace", element: <Peace/> },
    { path: "/sleep", element: <Sleep/> },

    { path: "/product", element: <Product/> },
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={finalStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
