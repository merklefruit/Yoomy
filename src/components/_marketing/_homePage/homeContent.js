import React from "react";

// Styled components
import { Container } from "../../../styles/globalStyles";
import { Row, Content } from "../../../styles/_marketing/homeStyles";

function HomeContent() {
  return (
    <Container>
      <Row>
        <Content
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2.7 }}
        >
          <h2>
            Lo yoga è progettato per aiutarti a sentirti meglio nel corpo e
            nella mente. Con Yooga, ottieni accesso illimitato alle migliori
            lezioni live di Yoga, Meditazione e molto altro.
          </h2>
        </Content>
      </Row>
    </Container>
  );
}

export default HomeContent;
