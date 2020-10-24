import React from "react";

// Components
import Head from "../../components/head";
import PrezziHero from "../../components/_prezziPage/prezziHero";
import PrezziCards from "../../components/_prezziPage/prezziCards";
import PrezziFeatures from "../../components/_prezziPage/prezziFeatures";

const PrezziPage = () => {
  return (
    <>
      <Head title="Prezzi" />
      <PrezziHero />
      <PrezziCards />
      <PrezziFeatures />
    </>
  );
};

export default PrezziPage;
