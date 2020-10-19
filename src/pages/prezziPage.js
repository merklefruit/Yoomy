import React from "react";

// Components
import Head from "../components/head";
import PrezziHero from "../components/_prezziPage/prezziHero";
import PrezziCards from "../components/_prezziPage/prezziCards";
// import PrezziBanner from "../components/_prezziPage/prezziBanner";

const PrezziPage = () => {
  return (
    <>
      <Head title="Prezzi" />
      <PrezziHero />
      <PrezziCards />
      {/* <PrezziBanner /> */}
    </>
  );
};

export default PrezziPage;
