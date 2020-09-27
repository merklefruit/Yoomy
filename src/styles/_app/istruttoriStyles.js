import styled from "styled-components";

// Istruttori Hero

// Istruttori List

export const ListContainer = styled.div`
  display: grid;
  color: ${(props) => props.theme.text};
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;

  @media (max-width: 650px) {
    margin: auto 30px;
  }

  .card {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 10px;
    text-align: center;

    a {
      color: ${(props) => props.theme.text};

      img {
        margin: 0;
        opacity: 0.92;
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 2px;

        &:hover {
          cursor: pointer;
        }
      }

      h3 {
        margin-top: 10px;
        margin-bottom: 5px;
        font-weight: 400;
        font-size: 1.2rem;
      }
      p {
        margin-top: 5px;
        margin-bottom: 10px;
      }
    }
  }
`;
