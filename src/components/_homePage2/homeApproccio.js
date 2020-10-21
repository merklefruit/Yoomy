import React, { useEffect } from "react";
import styled from "styled-components";

// Styled components
import { Container } from "../../styles/globalStyles";

// Scroll behavior
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// Assets
import StepsLine from "../../assets/svg/StepsLine";
import StepsLine2 from "../../assets/svg/StepsLine2";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.7,
    },
  },
};

const HomeApproccio = () => {
  const animation = useAnimation();
  const [Ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
  }, [animation, inView]);

  return (
    <Container>
      <Approccio>
        <div className="title">
          <h2>
            L'approccio <span>Yoomy</span>
          </h2>
        </div>
        <motion.div
          ref={Ref}
          variants={variants}
          initial="hidden"
          animate={animation}
          className="steps"
        >
          <motion.div className="child">
            <motion.div variants={child} className="flex c1">
              <span>1</span>
              <StepsLine />
            </motion.div>
            <div className="content">
              <p>Scegli un corso che ti interessa tra le decine disponibili</p>
            </div>
          </motion.div>

          <motion.div variants={child} className="child">
            <div className="flex c2">
              <span>2</span>
              <StepsLine2 />
            </div>
            <div className="content">
              <p>Iscriviti a una lezione che soddisfa le tue esigenze</p>
            </div>
          </motion.div>

          <motion.div variants={child} className="child">
            <div className="flex c1">
              <span>3</span>
              <StepsLine />
            </div>
            <div className="content">
              <p>Invita i tuoi amici per allenarvi assieme</p>
            </div>
          </motion.div>

          <motion.div variants={child} className="child">
            <div className="flex c2">
              <span>4</span>
            </div>
            <div className="content">
              <p>Entra nella stanza virtuale e svolgi la lezione</p>
            </div>
          </motion.div>
        </motion.div>
      </Approccio>
    </Container>
  );
};

export default HomeApproccio;

const Approccio = styled.div`
  color: ${(props) => props.theme.text};
  align-items: center;

  .title {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;

    h2 {
      font-family: "DM Sans";
      font-size: 2.5rem;

      span {
        opacity: 0.7;
      }
    }
  }

  .steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .child {
      flex: 0 1 180px;
      margin: 5px;
      @media (max-width: 950px) {
        margin: 15px;
      }

      .flex {
        display: flex;
        @media (max-width: 950px) {
          display: grid;
          place-items: center;
        }
      }

      .c1 {
        svg {
          margin-top: 20px;
          margin-left: 5px;
        }
        @media (max-width: 950px) {
          margin-bottom: 25px;
        }
      }
      .c2 {
        margin-bottom: 25px;

        svg {
          margin-left: 5px;
        }
      }

      svg {
        @media (max-width: 950px) {
          display: none;
        }
      }

      span {
        font-family: "DM Sans";
        font-size: 3.5rem;
        color: ${(props) => props.theme.primary};
        background: ${(props) => props.theme.secondary};
        border-radius: 50%;
        width: 50px;
        height: 50px;
        text-align: center;
      }
    }
  }

  .content {
    font-family: "DM Sans";
    text-align: left;
    width: 100%;

    p {
      margin-top: 10px;
      font-size: 1.15rem;
    }

    @media (max-width: 950px) {
      text-align: center;
    }
  }
`;
