import React from "react";

import { Container } from "../../../styles/globalStyles";
import {
  CardsSection,
  SideBarSection,
  GridContainer,
} from "../../../styles/_app/perTeStyles";

const PerTeGridSection = () => {
  return (
    <Container>
      <GridContainer>
        <CardsSection>
          <div className="course">{/* insert live course card */}</div>
        </CardsSection>
        <SideBarSection>
          <div className="sidebar-wrapper">
            <h3>Menu</h3>
            <p>Corsi recenti</p>
            <p>Prossimi corsi</p>
            <p>vedi tutto</p>
            <p>preferiti</p>
          </div>
        </SideBarSection>
      </GridContainer>
    </Container>
  );
};

export default PerTeGridSection;
