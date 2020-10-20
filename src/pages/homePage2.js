import React from "react";

// Components
import Head from "../components/head";
import FreeTrial from "../components/_homePage2/freeTrial";
import HomeApproccio from "../components/_homePage2/homeApproccio";
import HomeHero from "../components/_homePage2/homeHero";
import MacbookSection from "../components/_homePage2/macbookSection";

function HomePage2() {
  return (
    <>
      <Head title="Home" />
      <HomeHero />
      <HomeApproccio />
      <MacbookSection />
      <FreeTrial />
    </>
  );
}

export default HomePage2;
