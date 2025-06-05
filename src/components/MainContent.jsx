// MainContent.jsx
import React from "react";
import OurCompanyForm from "./forms/OurCompanyForm";
import TeamForm from "./forms/TeamForm";
import ReviewForm from "./forms/ReviewForm";
import BannerForm from "./forms/BannerForm";
import HomeOverview from "./forms/HomeOverview";

const componentMap = {
  "About us": {
    "Our Company": OurCompanyForm,
    Team: TeamForm,
    Review: ReviewForm,
  },
  Home: {
    Banner: BannerForm,
    Overview:HomeOverview,
  },
};

export default function MainContent({ page, subpage }) {
  const SubpageComponent = componentMap?.[page]?.[subpage];

  return (
    <div className="flex-1 p-6">
      {SubpageComponent ? <SubpageComponent /> : <p>Select a page</p>}
    </div>
  );
}
