import AdsItem from "./AdsItem";

function AdsList({ Ads, children = "" }) {
  return (
    <div className="flex flex-wrap  gap-8 justify-center   ">
      {children}
      {Ads.map((item, index) => {
        return <AdsItem adsInfo={item} key={index} />;
      })}
    </div>
  );
}

export default AdsList;
