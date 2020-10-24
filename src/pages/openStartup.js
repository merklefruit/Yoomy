import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_URL } from "../helpers/config";

// Styled components
import { Container, Headline } from "../styles/globalStyles";

const OpenStartup = () => {
  const tokenPrice = 2;

  const [stats, setStats] = useState(null);
  useEffect(() => {
    const url = API_URL + "/open";
    axios
      .get(url)
      .then(({ data }) => {
        setStats(data);
      })
      .catch((err) => setStats(null));
  }, []);

  return (
    <Container>
      <Headline>
        <h1>I dati di Yoomy</h1>
        <h3>
          Yoomy è una Open Startup™, il che significa che opera in modo
          completamente trasparente e condivide le sue metriche, inclusi ricavi,
          costi, utenti e traffico.
        </h3>
      </Headline>
      {stats && (
        <Open>
          <div className="section">
            <h2 className="title">Metriche</h2>
            <div className="count">
              <div className="stat-card">
                <h2>{stats.count.users}</h2>
                <h3>Utenti</h3>
              </div>
              <div className="stat-card">
                <h2>{stats.count.teachers}</h2>
                <h3>Istruttori</h3>
              </div>
              <div className="stat-card">
                <h2>{stats.count.events}</h2>
                <h3>Lezioni svolte</h3>
              </div>
              <div className="stat-card">
                <h2>{stats.count.courses}</h2>
                <h3>Corsi</h3>
              </div>
            </div>
            <div className="credits">
              <div className="stat-card">
                <h2>{stats.credits.bought}</h2>
                <h3>Crediti acquistati</h3>
              </div>
              <div className="stat-card">
                <h2>{stats.credits.used}</h2>
                <h3>Crediti usati</h3>
              </div>
            </div>
          </div>
          <div className="section">
            <h2 className="title">Costi</h2>
            <div className="count">
              <div className="stat-card">
                <h2>0€</h2>
                <h3>Grafica</h3>
              </div>
              <div className="stat-card">
                <h2>0€</h2>
                <h3>Sviluppo</h3>
              </div>
              <div className="stat-card">
                <h2>0€</h2>
                <h3>Hosting</h3>
              </div>
              <div className="stat-card">
                <h2>0€</h2>
                <h3>Altro</h3>
              </div>
            </div>
          </div>
          <div className="section">
            <h2 className="title">Ricavi</h2>
            <div className="count">
              <div className="stat-card">
                <h2>{tokenPrice}€</h2>
                <h3>Prezzo medio gettone</h3>
              </div>
              <div className="stat-card">
                <h2>{stats.credits.bought * tokenPrice}€</h2>
                <h3>Stima Fatturato</h3>
              </div>
            </div>
          </div>
        </Open>
      )}
    </Container>
  );
};

export default OpenStartup;

const Open = styled.div`
  color: ${(props) => props.theme.text};
  padding-bottom: 50px;

  .count {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
    }
    margin-bottom: 1rem;
  }
  .credits {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .stat-card {
    padding: 20px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: grid;
    place-items: center;
    h2 {
      font-family: "DM Sans";
      margin: 0;
      font-weight: 800;
      font-size: 2.5rem;
    }
    h3 {
      text-align: center;
      font-family: "DM Sans";
      margin: 15px 0 0 0;
      font-weight: 400;
    }
  }

  .section {
    padding-bottom: 20px;

    .title {
      font-family: "DM Sans";
      font-size: 2rem;
      font-weight: 400;
    }
  }
`;
