import styled from "styled-components";

export const CalendarContainer = styled.div``;

export const Picker = styled.div`
  max-width: 610px;
  margin-bottom: 25px;
`;

export const EventCard = styled.div`
  margin-bottom: 1.5rem;
  background: ${(props) => props.theme.beige};
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: ${(props) => props.theme.text};
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;

  max-width: 550px;

  display: flex;
  @media (max-width: 550px) {
    display: block;
  }

  justify-content: space-between;
  align-items: center;

  .card-photo {
    svg {
      transform: scale(2);

      path {
        color: red;
      }
    }
  }

  .card-info {
    text-align: left;

    h3 {
      font-family: "Montserrat";
      margin: 10px 0;
      font-size: 1.3rem;
    }

    h4 {
      margin-top: 0;
      margin-bottom: 10px;
      margin-left: 0;
      margin-right: 0;

      font-size: 1rem;
      opacity: 0.8;
      font-weight: 400;
      font-family: "Montserrat";

      a {
        color: ${(props) => props.theme.text};

        &:hover {
          color: black;
          border-color: black;
        }

        span {
          border-bottom: 1px solid ${(props) => props.theme.text};
        }
      }
    }

    p {
      font-size: 1.2rem;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      margin-bottom: 5px;
      font-weight: 300;

      span {
        font-weight: 400;
      }
    }
  }

  .card-buttons {
    @media (max-width: 550px) {
      display: flex;
    }

    width: 95px;
    padding-left: 10px;

    .b1 {
      margin-bottom: 20px;
      @media (max-width: 550px) {
        margin-bottom: 10px;
      }
    }
    .b2 {
    }

    display: block;

    button {
      background-color: ${(props) => props.theme.beige};
      border-radius: 5px;
      border: 1px solid ${(props) => props.theme.lightgray};
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;

      @media (max-width: 550px) {
        width: 100px;
        margin-top: 10px;
        margin-right: 20px;
      }

      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.yellow};
        transform: scale(1.04);
        transition: transform 0.2s ease-in-out;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;
