import React from "react";

// Styled components
import { Container } from "../../styles/globalStyles";
import { Row, Content } from "../../styles/homeStyles";

function HomeContent() {
  return (
    <Container>
      <Row>
        <Content>
          <h2>
            Lo yoga è progettato per aiutarti a sentirti meglio nel corpo e
            nella mente. Ottieni accesso illimitato alle migliori lezioni live
            di yoga, meditazione e Pilates.
          </h2>
        </Content>
      </Row>
    </Container>
  );
}

export default HomeContent;
