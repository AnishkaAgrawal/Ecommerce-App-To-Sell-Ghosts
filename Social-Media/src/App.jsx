
import './App.css'
import Navbar from './components/navbar'
import Bag from './components/bag';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import Loader from './components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
     <Navbar/>
     <Loader/>
     <Outlet/>
     
     <Footer/>
    </>
  )
}

export default App
