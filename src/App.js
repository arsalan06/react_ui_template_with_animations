
import './App.css';
import IconsBanner from './components/IconsBanner/IconsBanner';
import MainBanner from './components/MainBanner/MainBanner';
import Navbar from './components/Navbar/Navbar';
import Toolbar from "@mui/material/Toolbar";
import PaymentBanner from './components/PaymentBanner/PaymentBanner';
import CartBanner from './components/PaymentBanner/CartBanner';
import GatwayBanner from './components/GatwayBanner/GatwayBanner';
import ReviewSlider from './components/ReviewSlider/ReviewSlider';
import ContactBanner from './components/ContactBanner/ContactBanner';
function App() {
  return (
    <div>
      <Navbar/>
      <Toolbar/>
      <MainBanner/>
      <IconsBanner/>
      <PaymentBanner/>
      <GatwayBanner/>
      <CartBanner/>
      <ReviewSlider/>
      <ContactBanner/>
    </div>
  );
}

export default App;
