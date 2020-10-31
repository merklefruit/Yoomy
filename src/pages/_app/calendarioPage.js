import React from "react";

// Components
import Head from "../../components/head";
import CalendarioHero from "../../components/_app/_calendarioPage/calendarioHero";
import CalendarioList2 from "../../components/_app/_calendarioPage/calendarioList2";

const CalendarioPage = () => {
  return (
    <>
      <Head title="Calendario" />
      <CalendarioHero />
      <CalendarioList2 />
    </>
  );
};

export default CalendarioPage;
