import React from "react";
import { motion } from "framer-motion";

// Styled components
import { Container } from "../../styles/globalStyles";
import { Banner } from "../../styles/priceStyles";

const PrezziBanner = () => {
  return (
    <Container>
      <Banner>
        <div className="cta">
          <p>Solo per il periodo di Beta: </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.99 }}
          >
            Prova 1 lezione gratis{" "}
          </motion.button>
        </div>
      </Banner>
    </Container>
  );
};

export default PrezziBanner;
