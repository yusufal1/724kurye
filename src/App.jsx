import './App.css';
import Homepage from './pages/Homepage';
import About from './pages/About';
import BeCourier from './pages/BeCourier';
import Contact from './pages/Contact';
import CallCourier from './pages/CallCourier';
import LoginSignup from './pages/LoginSignup';
import Agree from './pages/Agree';
import Payment from './pages/Payment';
import { Route, Routes, Link, NavLink } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/hakkimizda' element={<About/>}/>
      <Route path='/kurye-ol' element={<BeCourier/>}/>
      <Route path='/iletisim' element={<Contact/>}/>
      <Route path='/kurye-cagir' element={<CallCourier/>}/>
      <Route path='/giris-yap' element={<LoginSignup/>}/>
      <Route path='/anlas' element={<Agree/>}/>
      <Route path='/odeme' element={<Payment/>}/>
    </Routes>
  );
}

export default App;
