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
      <HomeBanner color="#264653" />
      <HomeFeatures />
      <HomeBanner color="#f4a261" />
    </>
  );
}

export default homePage;
