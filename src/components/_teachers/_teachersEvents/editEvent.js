import React from "react";

// Styled components
import { TeacherSection } from "../../../styles/_teachers/teachersHomeStyles";
import { EditContainer } from "../../../styles/_teachers/teacherEventStyles";

const EditEvent = ({ currentlyEditing, setCurrentlyEditing }) => {
  const event = currentlyEditing;
  const {
    course,
    // startDate,
    // endDate,
    duration,
    description,
    participants,
  } = event;
  const { name, level, intensity } = course;

  return (
    <div style={{ marginTop: "25px" }}>
      <TeacherSection>
        <h2>{name} del x dalle x alle x</h2>
      </TeacherSection>
      <EditContainer>
        <p>Durata: {duration} minuti</p>
        <p>Descrizione: {description}</p>
        {participants.length !== 0 ? (
          <div>
            <p>Partecipanti: </p>
            <ul>
              {participants.map((p) => (
                <li>
                  <p>ID: {p}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Partecipanti: Nessuno</p>
        )}

        <h3>Informazioni sul corso {name}</h3>
        <p>Livello: {level}</p>
        <p>Intensità: {intensity}</p>
        <button onClick={() => setCurrentlyEditing(null)}>Chiudi</button>
      </EditContainer>
    </div>
  );
};

export default EditEvent;
