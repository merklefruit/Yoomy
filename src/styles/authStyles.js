import styled from "styled-components";
import { motion } from "framer-motion";

export const AuthCard = styled.div`
  max-width: 400px;
  margin: 40px auto;
  text-align: center;
  border-radius: 7px;
  border: 1px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};

  -webkit-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
  -moz-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
  box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);

  h2 {
    margin: 10px 20px;
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  p {
    font-size: 0.9rem;

    a {
      color: ${(props) => props.theme.text};
      border-bottom: 1px solid ${(props) => props.theme.text};

      &:hover {
        color: black;
        border-color: black;
      }
    }
  }
`;

export const LoginForm = styled.div`
  margin-left: 25px;
  margin-right: 29px;
  text-align: center;
  background-color: ${(props) => props.theme.background};

  form {
    text-align: left;

    label  {
      font-size: 0.8rem;
      letter-spacing: 1px;
      background: transparent;
    }

    .label-div {
      margin-top: 30px;
    }

    .error {
      height: 0;
      font-size: 0.7rem;
      color: red;
      text-align: left;
      margin-top: 4px;
    }

    input {
      border-radius: 0px;
      display: block;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid gray;
      background: transparent;
      padding-bottom: 4px;

      &:focus {
        outline: none;
        border-color: black;
      }
      &:hover {
        border-color: black;
      }
    }
  }
`;

export const LoginButton = styled(motion.button)`
  background-color: ${(props) => props.theme.yellow};
  color: black;
  border: none;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 5px;
  width: 100%;

  -webkit-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
  -moz-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
  box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);

  &:focus {
    outline: none;
  }
`;

export const Terms = styled.div`
  display: inline-block;
  float: left;
  margin-top: 20px;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;

  .checkbox {
    margin-top: 1px;
    margin-right: 10px;
    width: 20px;
    float: left;
  }

  input {
    margin-left: 0;
    margin-right: 0;
  }
  p {
    width: 400px;
    margin: 0;
  }
`;
