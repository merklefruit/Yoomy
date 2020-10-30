import React from "react";

//temporary
import styled from "styled-components";

// Styled components
import { Container, Headline } from "../../../styles/globalStyles";

const ScopriHero = () => {
  return (
    <Container>
      <Headline>
        <h1>Manifesto</h1>
      </Headline>

      <ManifestoContent>
        <h2>VISION</h2>
        <p>
          Vogliamo creare una piattaforma per lo Yoga Online basata su una{" "}
          <b>community</b> di istruttori di alta qualità.
        </p>
        <h2>COME FUNZIONA?</h2>
        <p>
          Gli utenti possono accedere al sito per visualizzare il calendario dei
          prossimi eventi, così da <b>iscriversi</b> ai corsi che più li
          interessano.
        </p>
        <h2>PERCHÉ?</h2>
        <p>
          La piattaforma <b>semplifica</b> il processo di <b>marketing</b> e{" "}
          <b>prenotazione</b> delle lezioni, e lascia <b>totale libertà</b> ai
          singoli istruttori per quanto riguarda lo svolgimento effettivo delle
          classi. <br /> L'enfasi della piattaforma è sul creare una vera e
          propria community di istruttori e praticanti di Yoga, che diventi il
          punto di riferimento sia per coloro che vogliono provare una
          disciplina nuova, sia per coloro che effettuano le lezioni tutti i
          giorni.
        </p>
        <h2> QUANTO COSTA?</h2>
        <p>
          Gli utenti potranno acquistare dei gettoni da usare sulla piattaforma,
          spendendoli per iscriversi ai singoli eventi. Ogni settimana gli
          istruttori vengono pagati direttamente in base al numero di gettoni
          che hanno accumulato nelle lezioni. Il modello di business della
          piattaforma è basato sul brand legato alla community. Esisteranno
          prodotti acquistabili sullo shop del sito, completamente opzionali per
          tutti gli utenti. <br /> Per quanto riguarda gli istruttori, vorremmo
          riservarci una fetta pari all'1% del ricavo totale, utile per
          sostenere le spese tecniche di mantenimento.
        </p>
      </ManifestoContent>
    </Container>
  );
};

export default ScopriHero;

const ManifestoContent = styled.div`
  color: ${(props) => props.theme.text};
  width: 75%;
  @media (max-width: 650px) {
    width: 100%;
  }

  h2 {
    font-size: 1.5rem;
    font-family: "Montserrat";
  }
  p {
    line-height: 2rem;
    font-size: 1.25rem;
    font-weight: 400;
  }
`;
