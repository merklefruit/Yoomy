import React from "react";

// Components
import Head from "../../components/head";
import IstruttoriHero from "../../components/_app/_istruttoriPage/istruttoriHero";
import IstruttoriList from "../../components/_app/_istruttoriPage/istruttoriList";

const IstruttoriPage = () => {
  return (
    <>
      <Head title="Istruttori" />
      <IstruttoriHero />
      <IstruttoriList />
    </>
  );
};

export default IstruttoriPage;
