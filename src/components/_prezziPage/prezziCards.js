import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Styled components
import { Container } from "../../styles/globalStyles";
import { PriceCards } from "../../styles/priceStyles";

// Icons
import { GrYoga, GrGrow, GrSync } from "react-icons/gr";

const PrezziCards = () => {
  return (
    <Container>
      <PriceCards>
        <div className="price-card">
          <div className="inner">
            <span className="span-1">OCCASIONALE</span>
            <p>1 Credito</p>
            <h2>19€</h2>
            <small>
              Un credito spendibile per una lezione Live Online di 1 ora con uno
              dei nostri istruttori
            </small>
            <div className="features">
              <div className="feature">
                <GrYoga />
                <p>Perfetto per principianti</p>
              </div>
              <div className="feature">
                <GrGrow />
                <p>Crescita garantita al 100%</p>
              </div>
              <div className="feature">
                <GrSync />
                <p>Scegli tu la data e l'ora</p>
              </div>
            </div>
            <div className="cta">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Acquista 1 Credito
                </motion.button>
              </Link>
              <p>+1 gratis col primo acquisto</p>
            </div>
          </div>
        </div>

        <div className="price-card">
          <div className="inner">
            <span className="span-2">BUON AFFARE</span>
            <p>3 Crediti</p>
            <h2>49€</h2>
            <h2 className="discount">-16%</h2>
            <small>
              Tre crediti spendibili su tutta la piattaforma, senza nessuna
              limitazione o scadenza
            </small>
            <div className="features">
              <div className="feature">
                <GrYoga />
                <p>Per tutti i livelli</p>
              </div>
              <div className="feature">
                <GrGrow />
                <p>Crescita garantita al 100%</p>
              </div>
              <div className="feature">
                <GrSync />
                <p>Scegli tu la data e l'ora</p>
              </div>
            </div>
            <div className="cta">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Acquista 3 Crediti
                </motion.button>
              </Link>
              <p>+1 gratis col primo acquisto</p>
            </div>
          </div>
        </div>

        <div className="price-card">
          <div className="inner">
            <span className="span-3">IL MIGLIORE</span>
            <p>10 Crediti</p>
            <h2>95€</h2>
            <h2 className="discount">-53%</h2>
            <small>
              Dieci crediti per avere la massima offerta di Yoga Live in Italia.
              Garantito.
            </small>
            <div className="features">
              <div className="feature">
                <GrYoga />
                <p>Per gli appassionati</p>
              </div>
              <div className="feature">
                <GrGrow />
                <p>Bonus Yoomy esclusivi</p>
              </div>
              <div className="feature">
                <GrSync />
                <p>1 annullamento gratuito</p>
              </div>
            </div>
            <div className="cta">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Acquista 10 Crediti
                </motion.button>
              </Link>
              <p>+1 gratis col primo acquisto</p>
            </div>
          </div>
        </div>
      </PriceCards>
    </Container>
  );
};

export default PrezziCards;
