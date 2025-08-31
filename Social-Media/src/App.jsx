import './App.css'
import Navbar from './components/navbar'
import Bag from './components/bag';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import Loader from './components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import ReCAPTCHA from "react-google-recaptcha";   // ✅ import here
import LoginForm from './components/Login2';
function App() {
  return (
    <>
      {/* Uncomment to show Login Page */}
      {/* <Login/> */}

      <Navbar/>
      <Loader/>
      <Outlet/>

      {/* Example reCAPTCHA directly in App (for testing only) */}
      {/* <div className="flex justify-center my-6">
        <ReCAPTCHA
          sitekey="YOUR_SITE_KEY"  // replace with actual key
          onChange={(value) => console.log("Captcha value:", value)}
        />
      </div> */}

      <Footer/>
    </>
  )
}

export default App
