import styled from "styled-components";

export const TeacherSection = styled.div`
  @media (max-width: 768px) {
    margin-top: 55px;
  }

  display: block;
  margin-bottom: 30px;

  p {
    color: ${(props) => props.theme.text};
    margin-top: 10px;
    padding-left: 25px;
  }

  h2 {
    padding-left: 25px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  padding: 25px;

  @media (max-width: 1200px) {
    display: block;
  }

  .card {
    position: relative;
    width: 300px;
    height: 120px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
    margin-right: 20px;
    padding: 20px;

    @media (max-width: 1200px) {
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 25px;
    }

    .card-content {
      margin-top: 15px;
      display: flex;

      p {
        margin: 0;
        margin-top: 5px;
        color: ${(props) => props.theme.text};
        opacity: 0.8;
      }

      svg {
        font-size: 1.7rem;
        margin-right: 10px;
        path {
          fill: color: ${(props) => props.theme.text};
        }
      }
    }

    .card-number {
      margin: 0;
      position: absolute;
      top: 65px;
      left: 55px;

      h2 {
        opacity: 0.9;
        font-size: 2rem;
        font-weight: 400;
      }
    }

    .card-footer {
      position: absolute;
      bottom: 0;
      left: 57px;

      p {
        font-weight: 600;

        a {
          color: ${(props) => props.theme.blue};
        }
      }
    }
  }
`;

// Shortcuts

export const ShortcutsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  margin-left: 25px;
  margin-right: 25px;
  background: ${(props) => props.theme.beige};
  border-radius: 20px;
  border: 1px solid lightgray;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 1000px;

  h3 {
    line-height: 1.5rem;
    width: 90%;
    font-weight: 400;
    font-size: 1.1rem;
  }
  svg {
    margin-right: 15px;
    font-size: 2.6rem;
  }
`;
