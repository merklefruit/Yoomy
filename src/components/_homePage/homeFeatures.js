import React from "react";

// Styled components
import { Container, Button } from "../../styles/globalStyles";
import { FeaturesSection, Card } from "../../styles/homeStyles";

const HomeFeatures = () => {
  return (
    <>
      <Container fluid>
        <FeaturesSection>
          <Card text>
            <h3>
              I nostri istruttori professionisti effettuano tante lezioni ogni
              settimana. Scegli quella che si addice di più alla tua routine!
            </h3>

            <Button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              Registrati gratis
            </Button>
            <ul>
              <li>
                <p>
                  <span>200+</span> ore di corsi registrati
                </p>
              </li>
              <li>
                <p>
                  <span>15+</span> classi ogni settimana
                </p>
              </li>
              <li>
                <p>
                  <span>12</span> istruttori professionisti
                </p>
              </li>
            </ul>
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
