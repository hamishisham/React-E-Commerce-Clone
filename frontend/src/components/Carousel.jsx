import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const images = [
  "https://s3-alpha-sig.figma.com/img/f2fb/e9b8/4327c8c1db6cabbeef327465bbb07fca?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nlON8iv1MTjl0n2ZPpl7vtGUzaKjyxWUARgEGQMzY-z9Xn6NHAf377MQ87pN3~Gdr3A9mhYXNlMJJd-4~M-BrjmkdZNIYh0TOCTH2SiVUz0O9D1xiRpQoJEiXomXV7SXkVrSeZGHHyJ8tT6CP~HG5TDHAcA1ur8a0LjQefX5Y6lntpCSEtZn20cjHAoan8Qf92N-IGDV~gZOBK6HEGnowhCmva8dNK3RfRfTigfcTXq5pzHZFIIO~f6Yn7TpCWrwXt9c0UpIvtmxhcHB~fjLIjh4NjEwQy97WWexNK65i1TAo3Zb2oRSfHIG7ws2SY~nGHwNmWElU~ayDSV3aDne6w__",
  "https://s3-alpha-sig.figma.com/img/a405/0492/418cb6129537699a59395b8e92ead112?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FiE7-bGEDm61CLU4uu72-MEKt0ORYxulHuwED7Fj6RuJwa~z1A9o7mu46M9EzByhJZt42MjJtYzPMMit~byWZb97f~qeliwWJk1NlQ80FauFGCMYXb5APOuTJROgs4qFHjmAo2gRw4XMSVaKJFDaczjWG7iKXOU5UxaWiB9BS61goj~h-lm1bLt4uwAkgaNunTW0EJx-1lb~ETV628lOXadWCZe2DpxDIm2RhkGkveLCzC0kDTIMhPAtuDTO6BSS8Fw4qKn0iCt2LRE1R3H8NJONKcBCbQZauMbbmTEuTog3uGUAj3d~xmohKJPKv7-fttC1gF~VpnwYcikP9devew__",
  "https://s3-alpha-sig.figma.com/img/039e/fe69/4f237de61d046b18d74c025020d97dd7?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g1W3e9csr-ec74f6w7pxkvm8CNS~Rc9HZZwpVS~prLHBuHCUlJ0LC-m~aK0qpXnJgmXecAKejfFkslHyLjMM0rU~kfQ2fkkvphvUUFuv2ZCF8iKAa-thJNxgc1FPCO6cUn77nnq8e5xFzj5enfPDOHFBF8x3i0XYBtAkPb2gqB1qSR8DjEd2iU8ape-8O1va6q22oR6i97V-8y5-4t9xrJowjG3QotSK4M9e-CVuiLIalo2XpOERVafLhlD4Q9uXbbibzLHqeV8ySHC45fLTqI-NeCV8uaSqvY71WRpwYI2S3C~6fVDw~1r136Z96ihJDOsq0kF-v1MzLB3-3i9mXw__",
  "https://s3-alpha-sig.figma.com/img/deeb/643a/41457c90e2a94d66f339f954bfba9930?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gUlVubnE-CMRupLJbZyCgKPzMbPZVlHTqO~EhRhN-oKEOzzxYdy2Y2mYM~b5gtbwEG0uw2mslk9C-X49Ras9Gg2Qd3zmWfyrSHjnhk5VfCMrRVo3ozkAMUBM-~AxKMFomh0mTCVESvl-ceJNmC1Y1YGY5hnGuCS5vlcjLoUTUrbVGVMqa1KHb82IcSE9dlAOV~IPLztEbo7fUpiuKU2o22HBz0LNhjyh8vzU8MJ8-N~JbY0YxwaMcw-CEWz7Vd6m2ea-oGVXz0fAhpHb0wA-lINL2sLEkmTKYgkv2B9U791zay853k6Mc~9g9NoWKai60qlH99HPmMyDfmEyKUwaHg__",
  "https://s3-alpha-sig.figma.com/img/fdfe/7a4d/dcccc625b011018bea37444ef821a0b0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXi2jUewktMUYOH2mNuAskkYwngHnAPTxUrEiV06AgCWRGgPw3lA6yE~TzmheRFVZQmDqusHHQ8okorTK6HixFlMVmYQpwJ~UtOj1SPTsztGwnYP5mHRTfEiSude-WqeKOTzAmMAyIx0iGvJSQMTIfSDVBKq3XLv~3M545yN52BYfU3PN9cwg~A3479yX~bqraBh39qWsPb61MLFOCoMGPWd6TPA72YiZA5eU05~zQV64IbPyp2LmUmbGDIyop1KYZ~UO2GdVbz2wT~bilGCWYFkgDVZO0wemVphF8I8hbVYHpLfd7YEKRnT1xWapZ~r2~rsutjVrxyYNsow0DCYkA__",
  "https://s3-alpha-sig.figma.com/img/fdfe/7a4d/dcccc625b011018bea37444ef821a0b0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXi2jUewktMUYOH2mNuAskkYwngHnAPTxUrEiV06AgCWRGgPw3lA6yE~TzmheRFVZQmDqusHHQ8okorTK6HixFlMVmYQpwJ~UtOj1SPTsztGwnYP5mHRTfEiSude-WqeKOTzAmMAyIx0iGvJSQMTIfSDVBKq3XLv~3M545yN52BYfU3PN9cwg~A3479yX~bqraBh39qWsPb61MLFOCoMGPWd6TPA72YiZA5eU05~zQV64IbPyp2LmUmbGDIyop1KYZ~UO2GdVbz2wT~bilGCWYFkgDVZO0wemVphF8I8hbVYHpLfd7YEKRnT1xWapZ~r2~rsutjVrxyYNsow0DCYkA__",
];
const Carousel = () => {
  const [index, setIndex] = useState(0);
  function nextImg() {
    setIndex((index) => (index + 1) % images.length);
  }
  function prevImg() {
    setIndex((index) => (index - 1 + images.length) % images.length);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-screen relative mt-7 z-0">
      <div className="item w-full ">
        <img src={images[index]} alt="" className="w-full h-[70vh]" />
      </div>
      <div className="arrow absolute top-1/3 text-8xl flex justify-between w-full cursor-pointer">
        <IoIosArrowBack onClick={prevImg} />
        <IoIosArrowForward onClick={nextImg} />
      </div>
    </div>
  );
};

export default Carousel;
