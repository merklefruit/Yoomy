import React, { useState } from "react";
import styled from "styled-components";

// Components
import Head from "../../components/head";
import NewEvent from "../../components/_teachers/_teachersEvents/newEvent";
import AllEvents from "../../components/_teachers/_teachersEvents/allEvents";
import EditEvent from "../../components/_teachers/_teachersEvents/editEvent";

const TeachersEvents = () => {
  // conditional functionality :: aka buttons to expose different functionality
  const [showNewEvent, setShowNewEvent] = useState(false);
  const [showAllEvents, setShowAllEvents] = useState(false);

  // ID of the event in "editing mode"
  const [currentlyEditing, setCurrentlyEditing] = useState(null);

  return (
    <div>
      <Head title="Eventi" />
      <div style={{ paddingLeft: "25px", marginBottom: "30px" }}>
        <Button
          onClick={() => {
            setShowNewEvent(!showNewEvent);
            setShowAllEvents(false);
          }}
        >
          Crea un evento
        </Button>
        <Button
          onClick={() => {
            setShowAllEvents(!showAllEvents);
            setShowNewEvent(false);
          }}
        >
          Visualizza i tuoi prossimi eventi
        </Button>
      </div>
      {showNewEvent && <NewEvent setShowNewEvent={setShowNewEvent} />}
      {showAllEvents && <AllEvents setCurrentlyEditing={setCurrentlyEditing} />}
      {showAllEvents && currentlyEditing !== null && (
        <EditEvent
          currentlyEditing={currentlyEditing}
          setCurrentlyEditing={setCurrentlyEditing}
        />
      )}
    </div>
  );
};

export default TeachersEvents;

const Button = styled.button`
  padding: 10px 15px;
  background: ${(props) => props.theme.yellow};
  border: 1px solid lightgray;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  margin-right: 20px;

  &:hover {
    box-shadow: none;
  }
  &:focus {
    outline: none;
  }
`;
