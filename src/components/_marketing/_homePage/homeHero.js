import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Styled components
import { Container, Button } from "../../../styles/globalStyles";
import { HomeRow, HeroCol1, HeroCol2 } from "../../../styles/_marketing/homeStyles";

// SVG
import HeroImg from "../../../assets/svg/HeroImg";

function HomeHero() {
  return (
    <>
      <Container>
        <HomeRow flex>
          <HeroCol1>
            <h1>Pratica lo Yoga ovunque e in qualsiasi momento.</h1>
            <Link to="/registrati">
              <Button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                Iscriviti gratis
              </Button>
            </Link>
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 72, opacity: 0 }}
              transition={{ duration: 2, ease: [0.6, 0.05, -0.01, 0.9] }}
              className="under-hero"
            >
              <div className="bullet">
                <p>Prova senza carta di credito</p>
              </div>
            </motion.div>
          </HeroCol1>
          <HeroCol2>
            <HeroImg />
          </HeroCol2>
        </HomeRow>
      </Container>
    </>
  );
}

export default HomeHero;
