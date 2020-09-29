import React from "react";
import Helmet from "react-helmet";

const Head = ({ title, desc }) => {
  return (
    <Helmet title={title ? `${title} | Yooga.` : "Yooga."}>
      <meta name="Description" content={desc} />
    </Helmet>
  );
};

export default Head;
