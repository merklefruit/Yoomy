import React from "react";

import Layout from "../components/layout";

// Components
import HomeHero from "../components/_homePage/homeHero";
import HomeContent from "../components/_homePage/homeContent";
import HomeFeatures from "../components/_homePage/homeFeatures";
import HomeBanner from "../components/_homePage/homeBanner";
import HomeBanner2 from "../components/_homePage/homeBanner2";

function homePage() {
  return (
    <Layout>
      <HomeHero />
      <HomeContent />
      <HomeBanner />
      <HomeFeatures />
      <HomeBanner2 />
    </Layout>
  );
}

export default homePage;
