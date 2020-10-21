import React from "react";
import styled from "styled-components";

// Styled components
import { Container } from "../../styles/globalStyles";

// Assets
import StepsLine from "../../assets/svg/StepsLine";
import StepsLine2 from "../../assets/svg/StepsLine2";

const HomeApproccio = () => {
  return (
    <Container>
      <Approccio>
        <div className="title">
          <h2>
            L'approccio <span>Yoomy</span>
          </h2>
        </div>
        <div className="steps">
          <div className="child">
            <div className="flex c1">
              <span>1</span>
              <StepsLine />
            </div>
            <div className="content">
              <p>Scegli un corso che ti interessa tra le decine disponibili</p>
            </div>
          </div>

          <div className="child">
            <div className="flex c2">
              <span>2</span>
              <StepsLine2 />
            </div>
            <div className="content">
              <p>Iscriviti a una lezione che soddisfa le tue esigenze</p>
            </div>
          </div>

          <div className="child">
            <div className="flex c1">
              <span>3</span>
              <StepsLine />
            </div>
            <div className="content">
              <p>Invita i tuoi amici per allenarvi assieme</p>
            </div>
          </div>

          <div className="child">
            <div className="flex c2">
              <span>4</span>
            </div>
            <div className="content">
              <p>Entra nella stanza virtuale e svolgi la lezione</p>
            </div>
          </div>
        </div>
      </Approccio>
    </Container>
  );
};

export default HomeApproccio;

const Approccio = styled.div`
  color: ${(props) => props.theme.text};
  align-items: center;

  .title {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;

    h2 {
      font-family: "DM Sans";
      font-size: 2.5rem;

      span {
        opacity: 0.7;
      }
    }
  }

  .steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .child {
      flex: 0 1 180px;
      margin: 5px;
      @media (max-width: 950px) {
        margin: 15px;
      }

      .flex {
        display: flex;
        @media (max-width: 950px) {
          display: grid;
          place-items: center;
        }
      }

      .c1 {
        svg {
          margin-top: 20px;
          margin-left: 5px;
        }
        @media (max-width: 950px) {
          margin-bottom: 25px;
        }
      }
      .c2 {
        margin-bottom: 25px;

        svg {
          margin-left: 5px;
        }
      }

      svg {
        @media (max-width: 950px) {
          display: none;
        }
      }

      span {
        font-family: "DM Sans";
        font-size: 3.5rem;
        color: ${(props) => props.theme.primary};
        background: ${(props) => props.theme.secondary};
        border-radius: 50%;
        width: 50px;
        height: 50px;
        text-align: center;
      }
    }
  }

  .content {
    font-family: "DM Sans";
    text-align: left;
    width: 100%;

    p {
      margin-top: 10px;
      font-size: 1.15rem;
    }

    @media (max-width: 950px) {
      text-align: center;
    }
  }
`;
