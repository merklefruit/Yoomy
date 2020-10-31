import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Date handling
import { format, addDays, subDays } from "date-fns";
import { it } from "date-fns/locale";

const CustomCalendar = ({ onDateChange }) => {
  const [initial, setInitial] = useState(new Date());
  const formatDay = (offset) =>
    format(addDays(initial, offset), "iii dd", { locale: it });
  const handleClick = (offset) => onDateChange(addDays(initial, offset));

  const daysToShow = 7;
  const maxWeeksAhead = 2;

  return (
    <Wrapper>
      <div className="weeks">
        {initial.getUTCDate() !==
          addDays(new Date(), daysToShow * maxWeeksAhead).getUTCDate() && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setInitial(addDays(initial, daysToShow))}
          >
            {"< prossima settimana"}
          </motion.button>
        )}
        {initial.getUTCDate() !== new Date().getUTCDate() && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setInitial(subDays(initial, daysToShow))}
          >
            {"settimana precedente >"}
          </motion.button>
        )}
      </div>
      <Calendar>
        {Array.from(Array(daysToShow).keys()).map((i) => (
          <div className="daycard" key={i}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleClick(i)}
            >
              {formatDay(i)}
            </motion.button>
          </div>
        ))}
      </Calendar>
    </Wrapper>
  );
};

export default CustomCalendar;

const Wrapper = styled.div`
  padding-top: 15px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
  position: relative;
  display: grid;
  place-items: center;

  .weeks {
    padding-bottom: 20px;
    display: flex;
    align-items: flex-end;
    direction: rtl;
    justify-content: space-between;

    width: 70%;
    @media (max-width: 1300px) {
      width: 75%;
    }
    @media (max-width: 1100px) {
      width: 80%;
    }
    @media (max-width: 700px) {
      width: 100%;
    }

    button {
      background: none;
      border: none;
      font-family: "DM Sans";
      font-weight: 300;
      display: flex;
      align-items: center;

      cursor: pointer;
      &:focus {
        outline: none;
      }

      svg {
        padding-left: 5px;
        width: 20px;
        padding-top: 2px;
      }
    }
  }
`;

const Calendar = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  @media (max-width: 1300px) {
    width: 75%;
  }
  @media (max-width: 1100px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
  border-bottom: 2px solid ${({ theme }) => theme.text};

  .daycard {
    margin-right: 1rem;
    margin-bottom: 25px;
    &:last-child {
      margin-right: 0;
    }
    @media (max-width: 600px) {
      margin-right: 0.5rem;
    }

    button {
      background: ${({ theme }) => theme.beige};
      border: none;
      padding: 7px 12px;
      border-radius: 12px;
      font-size: 1.1rem;

      @media (max-width: 600px) {
        font-size: 0.9rem;
        padding: 7px 8px;
      }

      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;
