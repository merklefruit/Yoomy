import styled from "styled-components";

export const PriceCards = styled.div`
  margin-top: 25px;
  display: grid;
  color: ${(props) => props.theme.text};
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  .price-card {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 500px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
      0 3px 3px rgba(0, 0, 0, 0.04), 0 5px 5px rgba(0, 0, 0, 0.04),
      0 8px 8px rgba(0, 0, 0, 0.03);

    .inner {
      margin: 25px;
      position: relative;

      span {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px 8px;
        font-weight: 600;
        font-size: 0.8rem;
        letter-spacing: 1px;
      }

      .span-1 {
        background: ${(props) => props.theme.secondary};
      }
      .span-2 {
        background: ${(props) => props.theme.secondary};
      }
      .span-3 {
        background: ${(props) => props.theme.secondary};
      }

      p {
        position: absolute;
        top: 20px;
        left: 0;
        font-weight: 300;
        font-size: 1.3rem;
      }

      h2 {
        position: absolute;
        top: 50px;
        left: 0;
        letter-spacing: 2px;
        font-size: 2rem;
        font-weight: 700;
      }

      .discount {
        top: 68px;
        left: 70px;
        color: red;
        font-size: 1.4rem;
      }

      small {
        position: absolute;
        top: 130px;
        left: 0;
        font-size: 1rem;
      }

      .features {
        position: absolute;
        top: 200px;

        .feature {
          width: 100%;
          margin-bottom: 25px;
          display: flex;
          align-content: center;

          svg {
            font-size: 1.4rem;
          }

          p {
            margin: 0;
            margin-left: 1rem;
            position: relative;
            display: block;
            top: 0;
            font-size: 1.1rem;
            font-weight: 400;
          }
        }
      }

      .cta {
        position: absolute;
        top: 350px;
        left: 0;
        width: 100%;

        button {
          border: none;
          padding: 18px 25px;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04),
            0 2px 2px rgba(0, 0, 0, 0.04), 0 3px 3px rgba(0, 0, 0, 0.04),
            0 5px 5px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.03);
          background: ${(props) => props.theme.banners};
          color: white;
          font-weight: 500;

          &:hover {
            cursor: pointer;
          }
          &:focus {
            outline: none;
          }
        }

        p {
          font-size: 0.935rem;
          font-weight: 400;
          margin-top: 42px;
          opacity: 0.8;
        }
      }
    }
  }
`;

// Banner

export const Banner = styled.div`
  position: relative;
  color: ${(props) => props.theme.text};
  width: 100%;
  height: 150px;
  margin-top: 30px;
  background: #d0e9ff;

  .cta {
    position: absolute;
    display: flex;
    align-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
      margin-right: 20px;
      font-size: 1.15rem;
    }

    button {
      border: none;
      padding: 10px 20px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
        0 3px 3px rgba(0, 0, 0, 0.04), 0 5px 5px rgba(0, 0, 0, 0.04),
        0 8px 8px rgba(0, 0, 0, 0.03);
      background: ${(props) => props.theme.banners};
      color: white;
      font-weight: 500;

      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;
