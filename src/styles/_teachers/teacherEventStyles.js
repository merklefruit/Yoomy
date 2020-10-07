import styled from "styled-components";

// New Event

export const EventForm = styled.div`
  padding: 0 25px;

  hr {
    border: 1px solid rgba(0, 0, 0, 0.07);
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${(props) => props.theme.text};
  }

  .nice-dates-popover {
    max-width: 300px;
  }

  .dataeora {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }

  .flex {
    position: relative;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .wrapper {
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
  }

  .dalle {
    margin-bottom: 10px;
  }
  .alle {
  }
  .lab1 {
    padding-bottom: 8px;
    padding-left: 115px;
  }
  .lab2 {
    padding-left: 125px;
  }

  label {
    margin-right: 10px;
    color: ${(props) => props.theme.text};
    font-size: 1rem;
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 9px;
    border-radius: 4px;

    &:focus {
      outline-color: #4085f7;
    }

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  button {
    margin-top: 20px;
    padding: 8px 15px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.yellow};
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);

    &:hover {
      cursor: pointer;
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  }

  textarea {
    margin-top: 10px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 9px;
    border-radius: 4px;

    &:focus {
      outline-color: #4085f7;
    }
  }
`;

// All events

export const EventList = styled.div`
  table {
    text-align: left;
    border-spacing: 0;
    margin-left: 25px;
    width: calc(100% - 50px);
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.08);
    border-radius: 7px;

    thead {
      font-family: "Montserrat";
      font-size: 1rem;
      background: ${(props) => props.theme.verylightgray};
    }

    th,
    td {
      padding: 15px 15px;
      font-size: 0.935rem;
      color: ${(props) => props.theme.text};
    }

    td {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      background: ${(props) => props.theme.white};
    }

    button {
      background: transparent;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

// Edit event

export const EditContainer = styled.div`
  margin-left: 25px;
`;
