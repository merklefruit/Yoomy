import React from "react";

// Components
import Head from "../../components/head";
import HomeHero from "../../components/_marketing/_homePage/homeHero";
import HomeContent from "../../components/_marketing/_homePage/homeContent";
import HomeFeatures from "../../components/_marketing/_homePage/homeFeatures";
import HomeBanner from "../../components/_marketing/_homePage/homeBanner";
import HomeBanner2 from "../../components/_marketing/_homePage/homeBanner2";

function homePage() {
  return (
    <>
      <Head title="Home" />
      <HomeHero />
      <HomeContent />
      <HomeBanner />
      <HomeFeatures />
      <HomeBanner2 />
    </>
  );
}

export default homePage;
