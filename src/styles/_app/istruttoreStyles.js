import styled from "styled-components";

export const TeacherFirstSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }

  .flex1 {
    .bio {
      p {
        font-size: 1.3rem;
        width: 88%;
        @media (max-width: 950px) {
          width: 100%;
          font-size: 1.2rem;
        }
      }
    }
  }

  .flex2 {
    .photo {
      margin-top: 25px;
      position: relative;
      background: pink;
      display: grid;
      place-items: end;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .more {
    }
  }
`;
