import logo from './logo.svg';
import './App.css';
import Navbar from './components/Home/Navbar/Navbar';
import Slider from './components/Home/Slider/Slider'
import SelectCoupon from './components/Home/SelectCoupon/SelectCoupon';
import BestDeals from './components/Home/BestDeals/BestDeals';
import BestCoupons from './components/Home/BestCoupons/BestCoupons';
import GetInTouch from './components/Home/GetInTouch/GetInTouch';
import Footer from './components/Home/Footer/Footer';
import FloatingSocialBar from './components/Home/FloatingSocialBar/FloatingSocialBar';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <SelectCoupon></SelectCoupon>
      <BestDeals></BestDeals>
      <FloatingSocialBar></FloatingSocialBar>
      <BestCoupons></BestCoupons>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </div>
  );
}

export default App;
