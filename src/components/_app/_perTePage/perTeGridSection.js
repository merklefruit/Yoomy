import React from "react";

import { Container } from "../../../styles/globalStyles";
import {
  CardsSection,
  CardButton,
  SideBarSection,
  GridContainer,
} from "../../../styles/_app/perTeStyles";

const PerTeGridSection = () => {
  return (
    <Container>
      <GridContainer>
        <CardsSection>
          <div className="course">
            <div className="course-preview">
              <h6>Corso</h6>
              <h2>Yoga</h2>
              <a href="/">Vedi simili</a>
            </div>
            <div className="course-info">
              <div className="progress-container">
                <div className="progress"></div>
                <span className="progress-text">6 posti liberi</span>
              </div>
              <h6>
                Istruttore: <span>Jeff Bezos</span>
              </h6>
              <h2>Yoga per principianti</h2>
              <p>
                L'uomo più ricco del mondo che viene apposta a insegnarti yoga.
              </p>
              <CardButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Visualizza
              </CardButton>
            </div>
          </div>

          <div className="course">
            <div className="course-preview">
              <h6>Corso</h6>
              <h2>Pilates</h2>
              <a href="/">Vedi simili</a>
            </div>
            <div className="course-info">
              <div className="progress-container">
                <div className="progress"></div>
                <span className="progress-text">3 posti liberi</span>
              </div>
              <h6>
                Istruttore: <span>Elon Musk</span>
              </h6>
              <h2>Pilates per principianti</h2>
              <p>
                Affina le tue abilità di Pilates per far salire le azioni $TSLA
              </p>
              <CardButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Visualizza
              </CardButton>
            </div>
          </div>
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
