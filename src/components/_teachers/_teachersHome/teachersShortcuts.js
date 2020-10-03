import React from "react";
import { Link } from "react-router-dom";

// Styled components
import {
  TeacherSection,
  ShortcutsContainer,
} from "../../../styles/_teachers/teachersHomeStyles";

const TeachersShortcuts = () => {
  return (
    <TeacherSection>
      <h2>Azioni rapide</h2>
      <ShortcutsContainer>
        <div>
          <Link to="/teachers/events">
            <button>Crea un nuovo evento</button>
          </Link>
          <button>Visualizza tutti i tuoi eventi</button>
          <button>Visualizza le tue ultime fatture</button>
        </div>
      </ShortcutsContainer>
    </TeacherSection>
  );
};

export default TeachersShortcuts;
