import styled from "styled-components";

// PerTe Hero

// PerTe Next Events

export const NextEventsHeading = styled.div`
  margin-top: 30px;

  svg {
    margin-right: 8px;
  }

  h2 {
    font-family: "Montserrat";
    font-weight: 400;
    color: ${(props) => props.theme.text};
  }
`;

export const NextEvents = styled.div`
  display: grid;
  grid-template-columns: 1fr 25%;
  gap: 2.5rem;

  .event-card {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.05);
    background: white;
    color: ${(props) => props.theme.text};
    display: grid;
    grid-template-columns: 1fr 160px;

    h3 {
      font-weight: 400;
      line-height: 130%;
      font-size: 1.3rem;
      margin: 0;

      span {
        font-weight: 500;
      }
    }

    .picture-container {
      display: grid;
      place-items: center;

      img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    button {
      padding: 10px 30px;
      margin-top: 9px;
      background: ${(props) => props.theme.beige};
      border-radius: 12px;
      border: none;
      box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.04);
      color: ${(props) => props.theme.text};
      cursor: pointer;
    }
  }

  .calendar {
    background: white;
    box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    position: relative;
    display: grid;
    place-items: center;
    padding: 20px;
    svg {
      margin-left: 15px;
      width: 45%;
    }
    button {
      margin-top: 8px;
      padding: 10px;
      width: 85%;
      background: ${(props) => props.theme.beige};
      border-radius: 12px;
      border: none;
      color: ${(props) => props.theme.text};
      box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.04);
      cursor: pointer;
    }
  }
`;

// Per te Grid Section

export const GridHeading = styled.div`
  margin-top: 30px;

  svg {
    margin-right: 8px;
  }

  h2 {
    font-family: "Montserrat";
    font-weight: 400;
    color: ${(props) => props.theme.text};
  }
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr 1fr;

  .live-ora {
    background: white;
    box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    position: relative;

    padding: 20px;
  }

  .crediti {
    background: white;
    box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    position: relative;

    padding: 20px;
  }
  .obiettivo {
    background: white;
    box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    position: relative;

    padding: 20px;
  }
`;
