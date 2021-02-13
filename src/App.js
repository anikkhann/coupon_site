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
import MostPopularStores from './components/Home/MostPopularStores/MostPopularStores';
import MostPopularStores2 from './components/Home/MostPopularStores2/MostPopularStores2';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <SelectCoupon></SelectCoupon>
      {/* <MostPopularStores></MostPopularStores> */}
      <MostPopularStores2></MostPopularStores2>
      <BestDeals></BestDeals>
      <FloatingSocialBar></FloatingSocialBar>
      <BestCoupons></BestCoupons>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </div>
  );
}

export default App;
