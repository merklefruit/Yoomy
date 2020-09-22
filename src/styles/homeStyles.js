import styled from "styled-components";

// Hero section

export const Row = styled.div`
  display: block;
  margin-top: 60px;
`;

export const HeroCol1 = styled.div`
  h1 {
    width: 60%;
    font-size: 3rem;
    color: ${(props) => props.theme.text};

    @media (max-width: 1000px) {
      width: 70%;
    }

    @media (max-width: 800px) {
      width: 75%;
    }

    @media (max-width: 650px) {
      width: 100%;
      font-size: 2.5rem;
    }

    @media (max-width: 450px) {
      width: 100%;
      font-size: 2rem;
    }
  }
`;

export const HeroCol2 = styled.div`
  width: 65%;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 100%;
    border-radius: 10px;
    -webkit-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
    -moz-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
    box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
  }
`;

// Content section

export const Content = styled.div`
  margin-left: 10%;
  margin-bottom: 40px;

  @media (max-width: 650px) {
    margin-left: 0;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 300;
    color: ${(props) => props.theme.text};
    letter-spacing: 1px;
  }

  button {
    background-color: ${(props) => props.theme.blue};
    color: black;
    border: none;
    margin-top: 0;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    font-size: 1.15rem;
    font-weight: 400;
    border-radius: 20px;

    -webkit-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
    -moz-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
    box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);

    &:focus {
      outline: none;
    }
  }
`;

// Features section

export const FeaturesSection = styled.div`
  display: flex;
  margin-left: 25px;

  @media (max-width: 600px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 50px;
    width: 90%;

    @media (max-width: 750px) {
      font-size: 1.4rem;
    }
  }

  button {
    background-color: ${(props) => props.theme.blue};
    color: black;
    border: none;
    margin-top: 0;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    font-size: 1.15rem;
    font-weight: 400;
    border-radius: 20px;

    -webkit-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
    -moz-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
    box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);

    &:focus {
      outline: none;
    }
  }
`;

export const Card = styled.div`
  width: 50%;

  @media (max-width: 600px) {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    width: 80%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

// Banner section

export const Banner = styled.div`
  margin: 0;
  height: 150px;
`;
