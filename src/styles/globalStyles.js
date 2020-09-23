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
  background-color: ${(props) => props.theme.yellow};
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
