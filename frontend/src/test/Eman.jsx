import AdsItem from "../components/AdsItem";
import AdsList from "../components/AdsList";
import Carousel from "../components/Carousel";
import DisplaySellers from "../components/DisplaySellers";
import {
  Ads,
  Ads2,
  bestSellersImages,
  bestSellersImages2,
} from "../services/adsInfo";
import Layout from "./../components/Layout";

const Eman = () => {
  return (
    <div className="bg-[#575757] ">
      <Layout>
        {/* Carousel for home Ads */}
        <Carousel />
        {/* display ads */}
        <div className="px-8 relative w-screen -mt-52 flex flex-col items-center gap-8">
          <AdsList Ads={Ads} />
          <DisplaySellers
            title="Best Sellers in Clothing & Accessories"
            sellersImages={bestSellersImages}
          />
          <AdsList Ads={Ads2}>
            <div className="py-5 px-3 flex flex-col justify-between gap-3 w-[21%]  bg-slate-200">
              <h2 className="text-2xl font-bold text-wrap w-4/5 ">
                Best Sellers in Toys & Games
              </h2>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/daa2/260a/cde5b0b7822beb6d782053b8d616fc89?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bl2kRU~rQ7Ln1Y7PIMmadH~bGavmQoIVeJwKx1USUazpMhspZNCFFe6aRVdt10jj2tGktD2N5t~xKCdkGEWQLt2-~cxL4pegPi1cTWc21DscH5Of~T6tCtWhqdVAupzspdvxQDsPIFzjoh9sCFqRqxMBRF7TvHIwJWoDS9UyoZCS2dJ8WN57zDpjgZ69~LL51OxWVfpfpZYP4jdwIhnrSdarxszmODILAz3mtJQ6s6phzmTF6llYOl8NOpF-CRO7p~JFbZsOxt6UJf~glG6zZo8Ocp0-SIf9i9jpEovj1c3J~Ewwz4S2iiDHTTtlOvQ9qsvn9znfG0jMeJRwY3ZB7A__"
                  alt=""
                  className="w-full h-full"
                />
                <p className="text-[11.58px] font-normal w-full text-wrap">
                  Storio Rechargeable Toys Talking Cactus Baby Toys for Kids
                  Dancing Cactus Toys…
                </p>
              </div>
              <div></div>
            </div>
          </AdsList>
          <DisplaySellers
            title="Min. 50% off | Unique kitchen finds | Amazon Brands & more"
            sellersImages={bestSellersImages2}
            link="See all"
          />
        </div>
      </Layout>
    </div>
  );
};

export default Eman;
