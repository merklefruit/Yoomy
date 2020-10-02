import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
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

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      width: 100%;
      max-width: 100%;
    `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}
    ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled(motion.button)`
  background-color: ${(props) => props.theme.buttons};
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
`;

export const Headline = styled.div`
  color: ${(props) => props.theme.text};
  margin-top: 25px;
  small {
    display: flex;
    margin-bottom: 0;
    color: ${(props) => props.theme.lightgray};

    a  {
      color: ${(props) => props.theme.lightgray};
      margin: 0 4px;

      &:hover {
        color: black;
      }
      &:active {
        color: black;
      }
    }

    svg {
      display: block;
      align-items: center;
      margin-right: 0;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;

    @media (max-width: 900px) {
      font-size: 2.7rem;
      font-weight: 500;
    }
    @media (max-width: 650px) {
      font-size: 2.4rem;
    }
  }

  hr {
    display: none;
  }

  ${(props) =>
    props.withHr &&
    css`
      h1 {
        margin-bottom: 0;
      }

      hr {
        display: block;
        width: 45%;
        height: 2px;
        border: none;
        background-color: ${(props) => props.theme.text};
        margin-left: 0;
        margin-bottom: 25px;

        @media (max-width: 650px) {
          width: 70%;
        }
      }
    `}

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    width: 70%;

    @media (max-width: 650px) {
      font-size: 1rem;
      width: 100%;
    }
  }
`;
