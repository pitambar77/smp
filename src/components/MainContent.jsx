// MainContent.jsx
// import React from "react";
// import TeamForm from "./forms/TeamForm";
// import ReviewForm from "./forms/ReviewForm";
// import BannerForm from "./forms/BannerForm";
// import HomeOverview from "./forms/HomeOverview";
// import TeamCardForm from "./forms/Team/TeamCardForm";
// import TeamGalleryForm from "./forms/Team/TeamGalleryForm";
// import AboutDirectorForm from "./forms/OurCompany/AboutDirectorForm";
// import GalleryForm from "./forms/OurCompany/GalleryForm";

// const componentMap = {
//   "About us": {
//     "Our Company": AboutDirectorForm,
//     "Company Gallery":GalleryForm,
//     Team: TeamForm,
//     Card:TeamCardForm,
//     Review: ReviewForm,
//     Gallery:TeamGalleryForm
//   },
//   Home: {
//     Banner: BannerForm,
//     Overview:HomeOverview,
//   },
// };

// export default function MainContent({ page, subpage }) {
//   const SubpageComponent = componentMap?.[page]?.[subpage];

//   return (
//     <div className="flex-1 p-6">
//       {SubpageComponent ? <SubpageComponent /> : <p>Select a page</p>}
//     </div>
//   );
// }

import React from "react";

// Import all your forms
import TeamForm from "./forms/TeamForm";

import BannerForm from "./forms/BannerForm";
import HomeOverview from "./forms/HomeOverview";
import TeamCardForm from "./forms/Team/TeamCardForm";
import TeamGalleryForm from "./forms/Team/TeamGalleryForm";
import AboutDirectorForm from "./forms/OurCompany/AboutDirectorForm";
import GalleryForm from "./forms/OurCompany/GalleryForm";
import WiningGalleryForm from "./forms/Training/WiningGalleryForm";
import VideoForm from "./forms/Training/VideoForm";
import AllBannerForm from "./forms/AllBannerForm";
import ImageForm from './forms/ImageForm';
import EducatorForm from "./forms/EducatorForm";
import MarketingProofAdmin from "./forms/Resource/MarketingProofAdmin";
import WebVideoForm from './forms/Services/WebVideoForm'
import CraftForm from "./forms/Services/CraftForm";
import OrganicVideoForm from './forms/Services/OrganicVideoForm'
import OrganicCraftForm from './forms/Services/OrganicCraftForm'
import SocialVideoForm from './forms/Services/SocialVideoForm'
import GoogleVideoForm from './forms/Services/GoogleVideoForm'
import ContentVideoForm from './forms/Services/ContentVideoForm'
import SocialMediaCraftForm from "./forms/Services/SocialMediaCraftForm";
import GooglecraftForm from "./forms/Services/GooglecraftForm";
import ContentCraftForm from "./forms/Services/ContentCraftForm";
import SocialUserImageForm from './forms/Services/SocialUserImageForm'
import ReviewCardForm from "./forms/ReviewCardForm";
import TeamSoftBanner from "./forms/Team/TeamSoftBanner";




// Map nested structure
const componentMap = {
  "About us": {
    "Our Company": {
      "About Director": AboutDirectorForm,
      "Company Gallery": GalleryForm,
    },
    Team: {
      "Soft Banner":TeamSoftBanner,
      Card: TeamCardForm,
      Gallery: TeamGalleryForm,
    },
    Review: ReviewCardForm,
  },
  Home: {
    Banner: BannerForm,
    Logo:ImageForm,
    Educator:EducatorForm,
    Overview: HomeOverview,
  },
  Training:{
    "Wining Gallery":WiningGalleryForm,
    "Video":VideoForm,
  },
  "All Banner":{

    Banner:AllBannerForm,
  },
  Resource:{
    Ebook:MarketingProofAdmin
  },
  Service:{
    "Web Design":{
      Video:WebVideoForm,
      Craft:CraftForm
    },
    "Organic": {
      Video:OrganicVideoForm,
      Craft:OrganicCraftForm,
    },
    "Content Marketing": {
      Video:ContentVideoForm,
      Craft:ContentCraftForm,
    },
    "Social Media": {
      Video:SocialVideoForm,
      Craft:SocialMediaCraftForm,
      "Social User":SocialUserImageForm
    },
    "Google Ads": {
      Video:GoogleVideoForm,
      Craft:GooglecraftForm,
    },
  }
};

export default function MainContent({ page, subpage, childSubpage }) {
  const PageGroup = componentMap?.[page];
  const SubGroup = PageGroup?.[subpage];

  // Support nested third level (childSubpage)
  const SubpageComponent =
    typeof SubGroup === "object" && childSubpage
      ? SubGroup[childSubpage]
      : SubGroup;

  return (
    <div className="flex-1 p-6 max-w-5xl mx-auto">
      {SubpageComponent ? (
        <SubpageComponent />
      ) : (
        <p className="text-gray-600">Select a section from the sidebar.</p>
      )}
    </div>
  );
}
