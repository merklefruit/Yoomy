import styled from "styled-components";

export const TeacherBio = styled.div`
  width: 100%;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-evenly;

  z-index: 1;
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 25px;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  @media (max-width: 1000px) {
    display: block;
  }
  @media (max-width: 500px) {
    padding: 0;
  }

  img {
    max-width: 600px;
    height: 500px;
    object-fit: cover;

    @media (max-width: 1000px) {
      width: 100%;
      height: 400px;
      display: block;
      margin: auto auto;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
  }

  p {
    margin-top: 0;
    line-height: 125%;
    margin-left: 0;
    font-size: 1.5rem;
    margin-right: 18px;
    width: 80%;
    @media (max-width: 800px) {
      width: 100%;
      font-size: 1.3rem;
      margin-right: 24px;
    }
    @media (max-width: 500px) {
      padding-left: 25px;
      padding-right: 25px;
    }
  }
`;
