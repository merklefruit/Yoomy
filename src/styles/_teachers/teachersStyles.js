import styled from "styled-components";

// Header

export const TeacherHeaderContainer = styled.div`
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const HeaderFlex = styled.div`
  background: white;
  padding-top: 5px;
  padding-bottom: 10px;
  padding-left: 25px;
  padding-right: 25px;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;

  .flex {
    display: flex;
  }

  h2 {
    margin: 0;
    margin-left: 10px;
  }

  span {
    text-transform: uppercase;
    border-radius: 100%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid ${(props) => props.theme.text};
    text-align: center;
    font-size: 1.9rem;
    font-weight: 400;

    transform: scale(0.8) translateY(-15px);
  }

  .right {
    button {
      background-color: ${(props) => props.theme.blue};
      border: none;
      border-radius: 5px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
      color: white;
      padding: 6px 10px;
      margin-top: 3px;

      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export const TeacherStatus = styled.div`
  display: flex;
  transform: translateY(-30px);
  margin-left: 90px;

  svg {
    path {
      fill: green;
    }
  }

  p {
    color: ${(props) => props.theme.text};
    margin: 0;
    margin-left: 6px;
    margin-right: 20px;
  }
`;

// Sidebar

export const Logo = styled.div`
  margin-top: 25px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.white};

  h1 {
    font-size: 2rem;
  }
`;

export const Menu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  a {
    svg {
      margin-right: 1rem;
      font-size: 1.2rem;
    }
    p {
      font-size: 1.2rem;
    }

    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
  }
`;
