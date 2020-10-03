import React from "react";

// Styled components
import {
  TeacherSection,
  ShortcutsContainer,
} from "../../../styles/_teachers/teachersHomeStyles";

// Icons
import { FcInfo } from "react-icons/fc";

const TeachersHero = () => {
  return (
    <TeacherSection>
      <h2>Pannello di controllo</h2>
      <ShortcutsContainer>
        <FcInfo />
        <h3>
          Da qui puoi gestire i tuoi prossimi eventi ed effettuare operazioni
          come modificare e cancellare gli eventi. <br />
          Inoltre puoi visualizzare lo storico del tuo profilo da istruttore
          vedendo in modo chiaro quanti clienti hai avuto.
        </h3>
      </ShortcutsContainer>
    </TeacherSection>
  );
};

export default TeachersHero;
