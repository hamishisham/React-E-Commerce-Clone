import AdsList from "../components/AdsList";
import Carousel from "../components/Carousel";
import DisplaySellers from "../components/DisplaySellers";
import {
  Ads,
  Ads2,
  bestSellersImages,
  bestSellersImages2,
} from "../services/adsInfo";
import Layout from "./../components/Layout/Layout";

import DifferentAdsItem from "../components/DifferentAdsItem";
import { PAGE } from "./../../node_modules/stylis/src/Enum";
const Home = () => {
  return (
    <Layout>
      <div className="bg-[#575757] ">
        {/* Carousel for home Ads */}
        <Carousel />
        {/* display ads */}
        <div className="px-8 w-full relative  lg:-mt-52 sm:-mt-24 md:-mt-12  flex flex-col items-center gap-8">
          <AdsList Ads={Ads} />
          <DisplaySellers
            title="Best Sellers in Clothing & Accessories"
            sellersImages={bestSellersImages}
          />
          <AdsList Ads={Ads2}>
            <DifferentAdsItem />
          </AdsList>
          <DisplaySellers
            title="Min. 50% off | Unique kitchen finds | Amazon Brands & more"
            sellersImages={bestSellersImages2}
            link="See all"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
