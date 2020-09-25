import React, { Fragment } from "react";
import { ImSpinner2 } from "react-icons/im";
import { motion } from "framer-motion";

const FullPageSpinner = () => {
  return (
    <Fragment>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.2 }}
        style={{
          fontSize: "2rem",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImSpinner2 />
      </motion.div>
    </Fragment>
  );
};

ImSpinner2.defaultProps = {
  "aria-label": "loading",
};

export default FullPageSpinner;
