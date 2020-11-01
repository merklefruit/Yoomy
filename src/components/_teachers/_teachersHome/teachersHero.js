import React from "react";

// Styled components
import {
  TeacherSection,
  ShortcutsContainer,
} from "../../../styles/_teachers/teachersHomeStyles";

// Icons
import { FcInfo } from "react-icons/fc";
import { TiWarningOutline } from "react-icons/ti";

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
      <ShortcutsContainer>
        <TiWarningOutline style={{ color: "coral" }} />
        <h3>
          Questa sezione è ancora in fase di sviluppo.
          <br />
          Ci piacerebbe sapere come possiamo migliorare. Se ti va, scrivici le
          tue opinioni (clicca su "Supporto" a sinistra)
        </h3>
      </ShortcutsContainer>
    </TeacherSection>
  );
};

export default TeachersHero;
