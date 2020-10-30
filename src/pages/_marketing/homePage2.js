import React from "react";

// Components
import Head from "../../components/head";
import BetaForm from "../../components/_marketing/_homePage2/betaForm";
import FreeTrial from "../../components/_marketing/_homePage2/freeTrial";
import HomeApproccio from "../../components/_marketing/_homePage2/homeApproccio";
import HomeHero from "../../components/_marketing/_homePage2/homeHero";
import HomePrices from "../../components/_marketing/_homePage2/homePrices";
import MacbookSection from "../../components/_marketing/_homePage2/macbookSection";
// import HomeCourses from "../../components/_homePage2/homeCourses";

function HomePage2() {
  return (
    <>
      <Head title="Home" />
      <HomeHero />
      <HomeApproccio />
      <MacbookSection />
      <FreeTrial />
      {/* <HomeCourses /> */}
      <HomePrices />
      <BetaForm />
    </>
  );
}

export default HomePage2;
