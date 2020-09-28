import React, { Fragment } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { motion } from "framer-motion";

const FullPageSpinner = () => {
  return (
    <Fragment>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.4 }}
        style={{
          fontSize: "3rem",
          color: "black",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AiOutlineLoading />
      </motion.div>
    </Fragment>
  );
};

AiOutlineLoading.defaultProps = {
  "aria-label": "loading",
};

export default FullPageSpinner;
