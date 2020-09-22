import React from "react";

// Components
import HomeHero from "../components/homePage/homeHero";
import HomeContent from "../components/homePage/homeContent";
import HomeFeatures from "../components/homePage/homeFeatures";
import HomeBanner from "../components/homePage/homeBanner";

function homePage() {
  return (
    <>
      <HomeHero />
      <HomeContent />
      <HomeBanner color="#1C58D4" />
      <HomeFeatures />
      <HomeBanner color="#3C3838" />
    </>
  );
}

export default homePage;
