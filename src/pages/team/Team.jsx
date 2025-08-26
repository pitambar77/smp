// import React, { useEffect, useState } from "react";
// import Banner from "../../components/Banner";
// import Card from "./Card";
// import Gallery from "./Gallery";
// import SubBanner from "./SubBanner";
// import Content9 from "../home/Content9";
// import Common from "../../components/Common";
// import axios from "axios";
// import { BASE_URL } from "../../api/config";

// const Team = () => {
//   const [bannerData, setBannerData] = useState(null);

//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const res = await axios.get(`${BASE_URL}/api/all-banners/team`);
//         setBannerData(res.data);
//       } catch (err) {
//         console.error("Failed to fetch banner", err);
//       }
//     };
//     fetchBanner();
//   }, []);

//   if (!bannerData) return <div></div>;

//   return (
//     <>
//       <Banner
//         title={bannerData.title}
//         description={bannerData.description}
//         imageUrl={`${BASE_URL}/${bannerData.imageUrl}`}
//       />

//       <SubBanner />
//       <Card />
//       <Gallery />
//       <Common />
//       <div className=" mt-[15px]">
//         <Content9 />
//       </div>
//     </>
//   );
// };

// export default Team;


import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Card from "./Card";
import Gallery from "./Gallery";
import SubBanner from "./SubBanner";
import Content9 from "../home/Content9";
import Common from "../../components/Common";
import axios from "axios";
import { BASE_URL } from "../../api/config";

const Team = () => {
  const [bannerData, setBannerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/all-banners/team`);
        setBannerData(data);
      } catch (err) {
        console.error("Failed to fetch banner", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
        <div className="flex flex-col items-center">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (!bannerData) return <div>Failed to load banner</div>;

  return (
    <>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        imageUrl={`${BASE_URL}/${bannerData.imageUrl}`}
      />
      <SubBanner />
      <Card />
      <Gallery />
      <Common />
      <div className="mt-[15px]">
        <Content9 />
      </div>
    </>
  );
};

export default Team;

