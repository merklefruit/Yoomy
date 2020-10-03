import React from "react";
import { Link } from "react-router-dom";

// Styled components
import {
  CardsContainer,
  TeacherSection,
} from "../../../styles/_teachers/teachersHomeStyles";

// Icons
import { TiArrowSync } from "react-icons/ti";
import { RiCalendarEventFill } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";

const PagamentiCards = () => {
  return (
    <TeacherSection>
      <h2>Panoramica</h2>
      <CardsContainer>
        <div className="card">
          <div className="card-content">
            <TiArrowSync />
            <p>Pagamenti in sospeso</p>
          </div>
          <div className="card-number">
            <h2>1242 €</h2>
          </div>
          <div className="card-footer">
            <p>
              <Link to="/">Vedi dettagli</Link>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <RiCalendarEventFill />
            <p>Eventi svolti questo mese</p>
          </div>
          <div className="card-number">
            <h2>5</h2>
          </div>
          <div className="card-footer">
            <p>
              <Link to="/">Vedi dettagli</Link>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <GrMoney />
            <p>Fatturato (ultimi 30 giorni)</p>
          </div>
          <div className="card-number">
            <h2>2136 €</h2>
          </div>
          <div className="card-footer">
            <p>
              <Link to="/">Vedi dettagli</Link>
            </p>
          </div>
        </div>
      </CardsContainer>
    </TeacherSection>
  );
};

export default PagamentiCards;
