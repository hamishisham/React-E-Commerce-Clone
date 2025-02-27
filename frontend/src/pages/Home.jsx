import AdsList from "../components/Home/AdsList";
import Carousel from "../components/Home/Carousel";
import DisplaySellers from "../components/Home/DisplaySellers";
import {
  Ads,
  Ads2,
  bestSellersImages,
  bestSellersImages2,
} from "../services/adsInfo";

import DifferentAdsItem from "../components/Home/DifferentAdsItem";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#575757] ">
        {/* Carousel for home Ads */}
        <Carousel />
        {/* display ads */}
        <div className="px-8 w-full relative  lg:-mt-52 sm:-mt-24 md:-mt-12  flex flex-col items-center gap-8">
          <AdsList Ads={Ads} key="devicesAds" />
          <DisplaySellers
            title="Best Sellers in Clothing & Accessories"
            sellersImages={bestSellersImages}
          />
          <AdsList Ads={Ads2} key="fashionAds">
            <DifferentAdsItem />
          </AdsList>
          <DisplaySellers
            title="Min. 50% off | Unique kitchen finds | Amazon Brands & more"
            sellersImages={bestSellersImages2}
            link="See all"
          />
        </div>
      </div>
    <Footer />
    </div>
  );
};

export default Home;
