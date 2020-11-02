import React from "react";
import styled from "styled-components";

const PagamentiCards = () => {
  return (
    <Main>
      {/* <h2>Resoconto degli ultimi 30 giorni</h2>
      <p>Hai svolto 14 lezioni</p>
      <p>Hai accumulato 242 presenze da 89 clienti diversi</p>
      <p>Hai accumulato 921 crediti</p> */}
      <PagCard></PagCard>
    </Main>
  );
};

export default PagamentiCards;

const Main = styled.div`
  padding-left: 25px;

  h2 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

const PagCard = styled.div``;
