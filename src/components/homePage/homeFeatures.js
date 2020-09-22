import React from "react";

// Styled components
import { Container } from "../../styles/globalStyles";
import { FeaturesSection, Card } from "../../styles/homeStyles";

const HomeFeatures = () => {
  return (
    <>
      <Container fluid>
        <FeaturesSection>
          <Card>
            <h3>
              I nostri istruttori professionisti effettuano tante lezioni ogni
              settimana. Scegli quella che si addice di più alla tua routine!
            </h3>

            <button>Guarda gli orari</button>
          </Card>
          <Card style={{ textAlign: "center" }}>
            <img
              src={require("../../assets/images/feature-1.jpg")}
              alt="featured-1"
            />
          </Card>
        </FeaturesSection>
      </Container>
    </>
  );
};

export default HomeFeatures;
