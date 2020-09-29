import React from "react";

// Components
import Head from "../../components/head";
import CalendarioHero from "../../components/_app/_calendarioPage/calendarioHero";
import CalendarioList from "../../components/_app/_calendarioPage/calendarioList";

const CalendarioPage = () => {
  return (
    <>
      <Head title="Calendario" />
      <CalendarioHero />
      <CalendarioList />
    </>
  );
};

export default CalendarioPage;
