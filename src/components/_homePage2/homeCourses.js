import React from "react";
import styled from "styled-components";

// Styled components
import { Container } from "../../styles/globalStyles";

const HomeCourses = () => {
  return (
    <Background>
      <Container>
        <CoursesDisplay>
          <div className="title">
            <h2>Stili di Yoga da tutto il mondo</h2>
            <p>
              Collaboriamo con istruttori riconosciuti internazionalmente in
              oltre <b>12 discipline</b> di Yoga
            </p>
          </div>
          <div className="wrapper">
            <div className="courses">
              <div className="course">
                <img
                  src={require("../../assets/images/login-image.jpg")}
                  alt="vyniasa"
                />
                <h3>Vyniasa</h3>
              </div>

              <div className="course">
                <img
                  src={require("../../assets/images/signup-image.jpg")}
                  alt="course"
                />
                <h3>Vyniasa</h3>
              </div>

              <div className="course">
                <img
                  src={require("../../assets/images/login-image.jpg")}
                  alt="course"
                />
                <h3>Vyniasa</h3>
              </div>

              <div className="course">
                <img
                  src={require("../../assets/images/signup-image.jpg")}
                  alt="course"
                />
                <h3>Vyniasa</h3>
              </div>

              <div className="course">
                <img
                  src={require("../../assets/images/login-image.jpg")}
                  alt="course"
                />
                <h3>Vyniasa</h3>
              </div>

              <div className="course">
                <img
                  src={require("../../assets/images/signup-image.jpg")}
                  alt="course"
                />
                <h3>Vyniasa</h3>
              </div>

              <div className="course">
                <img
                  src={require("../../assets/images/login-image.jpg")}
                  alt="course"
                />
                <h3>Vyniasa</h3>
              </div>

              <div className="course">
                <img
                  src={require("../../assets/images/signup-image.jpg")}
                  alt="course"
                />
                <h3>Vyniasa</h3>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>... E molti altri in arrivo!</p>
          </div>
        </CoursesDisplay>
      </Container>
    </Background>
  );
};

export default HomeCourses;

const Background = styled.div`
  background-color: ${(props) => props.theme.background2};
  color: ${(props) => props.theme.text};
`;

const CoursesDisplay = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;

  .title {
    text-align: center;

    h2 {
      margin: 0;
      font-family: "DM Sans";
      font-size: 2.3rem;
    }

    p {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      font-size: 1.2rem;
      line-height: 125%;
    }
  }

  .wrapper {
    display: grid;
    place-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .courses {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .course {
      flex: 0 1 220px;
      @media (max-width: 600px) {
        flex: 0 1 180px;
      }
      @media (max-width: 450px) {
        flex: 0 1 130px;
      }

      margin-top: 0;
      margin-bottom: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;

      img {
        width: 100%;
        box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.05);
      }
      h3 {
        margin: 0;
        margin-top: 8px;
        font-size: 1.5rem;
        font-weight: 500;
        @media (max-width: 450px) {
          font-size: 1rem;
          margin-top: 0px;
        }
      }
    }
  }

  .footer {
    p {
      margin-top: 0;
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;
