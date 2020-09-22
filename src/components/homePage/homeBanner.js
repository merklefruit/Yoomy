import React from "react";

// Styled components
import { Banner } from "../../styles/homeStyles";

const HomeBanner = ({ color }) => {
  return <Banner style={{ backgroundColor: color }}></Banner>;
};

export default HomeBanner;
