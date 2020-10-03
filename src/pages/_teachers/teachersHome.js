import React from "react";

// Components
import Head from "../../components/head";
import TeachersCards from "../../components/_teachers/_teachersHome/teachersCards";
import TeachersShortcuts from "../../components/_teachers/_teachersHome/teachersShortcuts";

const TeachersHome = () => {
  return (
    <>
      <Head title="Area Istruttore" />
      <TeachersCards />
      <TeachersShortcuts />
    </>
  );
};

export default TeachersHome;
