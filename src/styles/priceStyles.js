import styled from "styled-components";

// Hero

export const HeroContent = styled.div`
  margin: 0;
  margin-bottom: 35px;
  font-family: "Montserrat";

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.text};
    width: 88%;
    line-height: 1.8rem;

    @media (max-width: 650px) {
      width: 100%;
    }
  }
`;

// Cards

export const PriceCards = styled.div`
  margin-top: 25px;
  display: grid;
  color: ${(props) => props.theme.text};
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  .price-card {
    background: #fffcf7;
    height: 500px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
      0 3px 3px rgba(0, 0, 0, 0.04), 0 5px 5px rgba(0, 0, 0, 0.04),
      0 8px 8px rgba(0, 0, 0, 0.03);

    transition: all ease-in-out 0.3s;

    &:hover {
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.05),
        0 6px 6px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.05),
        0 12px 12px rgba(0, 0, 0, 0.05);
      transform: scale(1.005);
    }

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
        background: #c0eded;
      }
      .span-3 {
        background: #c0edc2;
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
  margin-top: 40px;
  background: #f0fffe;

  .features {
    margin-top: 50px;

    .feature {
      padding-top: 50px;
      padding-bottom: 50px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      border: none;

      @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        padding-bottom: 0;
      }

      .feat-part {
        height: 400px;
      }

      .image {
        svg {
          max-width: 400px;
        }

        text-align: center;
      }

      .text {
        @media (max-width: 1000px) {
          margin-top: 0;
        }

        h2 {
          margin-top: 0;
          padding-top: 150px;
        }
        h3 {
          margin-top: 0;

          font-size: 1.55rem;
          font-weight: 400;
        }
      }
    }
  }

  .cta {
    position: absolute;
    display: flex;
    align-content: center;
    top: 70px;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 1.15rem;

    p {
      a {
        margin-left: 10px;
        color: ${(props) => props.theme.primaryDarker};
        border-bottom: 1px solid ${(props) => props.theme.primaryDarker};
        padding-bottom: 1px;

        &:hover {
          color: black;
          border-color: black;
          cursor: pointer;
        }
      }
    }
  }
`;
