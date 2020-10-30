import styled from "styled-components";

// Header

export const TeacherHeaderContainer = styled.div`
  margin-bottom: 30px;
  margin-top: 0;
`;

export const HeaderFlex = styled.div`
  background: ${({ theme }) => theme.white};
  padding-bottom: 10px;
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;

  .flex {
    display: flex;
  }

  .avatar {
    span {
      font-weight: 600;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.violet};
    }
  }

  h2 {
    margin-top: 0;
    padding-top: 9px;
    padding-bottom: 15px;
    margin-left: 12px;

    font-size: 1.4rem;
    font-weight: 500;
    font-family: "DM Sans";
  }

  .right {
    display: flex;
    align-items: center;

    button {
      background-color: ${(props) => props.theme.blue};
      border: none;
      border-radius: 5px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
      color: white;
      padding: 6px 10px;

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
  transform: translateY(-35px);
  margin-left: 80px;

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
  padding-top: 25px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.white};

  h1 {
    margin: 0;
    font-size: 2rem;
  }
`;

export const Menu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  padding-top: 15px;

  a {
    span {
      display: flex;
      font-size: 1.1rem;
      align-items: center;
    }
    color: ${({ theme }) => theme.white};

    svg {
      margin-right: 8px;
    }
  }

  .active {
    span {
      font-weight: 600;
    }
  }
`;
