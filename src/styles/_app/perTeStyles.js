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
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }

  .event-card {
    padding: 20px;
    border-radius: 4px;
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

      @media (max-width: 1100px) {
        font-size: 1.2rem;
      }

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
    @media (max-width: 1100px) {
      display: none;
    }

    background: white;
    box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    position: relative;
    display: grid;
    place-items: center;
    padding: 20px;
    svg {
      margin-left: 15px;
      width: 45%;
    }

    a {
      width: 100%;
      text-align: center;
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

  .live-icon {
    color: red;
  }
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: 45% 1fr 1fr;
  gap: 2.5rem;
  color: ${(props) => props.theme.text};

  .card {
    background: white;
    box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    position: relative;
    padding: 20px;

    h3 {
      margin: 0;
      font-weight: 500;
    }

    button {
      padding: 10px;
      width: 80%;
      border: none;
      border-radius: 12px;
      color: ${(props) => props.theme.text};
      background: ${(props) => props.theme.beige};
      cursor: pointer;
    }
  }

  .live-ora {
    .event {
      border-radius: 12px;
      margin-bottom: 10px;
      padding-left: 20px;
      padding-right: 20px;

      display: flex;
      align-items: center;

      button {
        width: 100px;
        margin-left: auto;
        margin-right: 0;
      }

      h4 {
        font-weight: 400;
      }
    }
  }

  .crediti {
  }

  .obiettivo {
  }

  .inner {
    text-align: center;
    h4 {
      color: ${(props) => props.theme.primary};
      margin-top: 15px;
      margin-bottom: 15px;
      font-size: 3rem;
      font-weight: 400;
    }
  }
`;
