import React from "react";
import { FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

const FullPageSpinner = () => {
  return (
    <div
      style={{
        fontSize: "4em",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.FaSpinner
        animate={{ rotate: 180 }}
        transition={{ repeat: Infinity, duration: 0.5 }}
      />
    </div>
  );
};

FaSpinner.defaultProps = {
  "aria-label": "loading",
};

export default FullPageSpinner;
