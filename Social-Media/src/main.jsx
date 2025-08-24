import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux';

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

const router = createBrowserRouter([{
  path: "/" , element: <App/> , children: [
    { path: "/" , element: <Home/> },
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
