import React from "react";
import { Link } from "react-router-dom";

// Styled components
import { Container, Button } from "../../styles/globalStyles";
import { Banner2 } from "../../styles/homeStyles";

const HomeBanner2 = () => {
  return (
    <Banner2>
      <Container>
        <Link to="/registrati">
          <Button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            Inizia la prova gratuita
          </Button>
        </Link>
      </Container>
    </Banner2>
  );
};

export default HomeBanner2;
