import React from "react";
import Head from "../components/head";

// Styled components
import styled from "styled-components";
import { Container, Headline } from "../styles/globalStyles";

const TermsPage = () => {
  return (
    <>
      <Head title="Privacy" />
      <Container>
        <TermsContainer>
          <Headline>
            <h1> Termini e condizioni d'uso del sito web </h1>
          </Headline>

          <h2> 1. Termini </h2>

          <p>
            {" "}
            Accedendo a questo sito Web, accessibile da yoomy.it, accetti di
            essere vincolato dai presenti Termini e condizioni d'uso del sito
            Web e accetti di essere responsabile del contratto con le leggi
            locali applicabili. Se non sei d'accordo con uno qualsiasi di questi
            termini, ti è vietato accedere a questo sito. I materiali contenuti
            in questo sito Web sono protetti da copyright e diritto dei marchi.{" "}
          </p>

          <h2> 2. Usa licenza </h2>

          <p>
            {" "}
            È concesso il permesso di scaricare temporaneamente una copia dei
            materiali sul sito web di Yoomy solo per la visualizzazione
            transitoria personale e non commerciale. Questa è la concessione di
            una licenza, non un trasferimento di titolo, e in base a questa
            licenza non puoi:{" "}
          </p>

          <ul>
            <li> modificare o copiare i materiali; </li>
            <li>
              {" "}
              utilizzare i materiali per qualsiasi scopo commerciale o per
              qualsiasi esposizione pubblica;{" "}
            </li>
            <li>
              {" "}
              tentare di decodificare qualsiasi software contenuto nel sito web
              di Yoomy;{" "}
            </li>
            <li>
              {" "}
              rimuovere qualsiasi copyright o altre notazioni proprietarie dai
              materiali; o{" "}
            </li>
            <li>
              {" "}
              trasferire i materiali a un'altra persona o "rispecchiare" i
              materiali su qualsiasi altro server.{" "}
            </li>
          </ul>

          <p>
            {" "}
            Ciò consentirà a Yoomy di terminare in caso di violazione di una
            qualsiasi di queste restrizioni. In caso di risoluzione, anche il
            diritto di visualizzazione verrà annullato e l'utente dovrà
            distruggere qualsiasi materiale scaricato in suo possesso, sia esso
            in formato cartaceo o elettronico.
          </p>

          <h2> 3. Dichiarazione di non responsabilità </h2>

          <p>
            {" "}
            Tutti i materiali sul sito web di Yoomy sono forniti "così come
            sono". Yoomy non fornisce alcuna garanzia, espressa o implicita,
            pertanto nega tutte le altre garanzie. Inoltre, Yoomy non rilascia
            alcuna dichiarazione in merito all'accuratezza o all'affidabilità
            dell'uso dei materiali sul proprio sito Web o in altro modo in
            relazione a tali materiali o ai siti collegati a questo sito Web.{" "}
          </p>

          <h2> 4. Limitazioni </h2>

          <p>
            {" "}
            Yoomy oi suoi fornitori non saranno ritenuti responsabili per
            eventuali danni derivanti dall'uso o dall'incapacità di utilizzare i
            materiali sul sito Web di Yoomy, anche se Yoomy o un rappresentante
            autorizzato di questo sito Web sono stati informati, oralmente o per
            iscritto, di la possibilità di tale danno. Alcune giurisdizioni non
            consentono limitazioni alle garanzie implicite o limitazioni di
            responsabilità per danni accidentali, queste limitazioni potrebbero
            non essere applicabili.{" "}
          </p>

          <h2> 5. Revisioni ed Errata </h2>

          <p>
            {" "}
            Il materiale che appare sul sito web di Yoomy può includere errori
            tecnici, tipografici o fotografici. Yoomy non prometterà che nessuno
            dei materiali in questo sito Web sia accurato, completo o attuale.
            Yoomy può modificare i materiali contenuti nel suo sito Web in
            qualsiasi momento senza preavviso. Yoomy non si impegna ad
            aggiornare i materiali.{" "}
          </p>

          <h2> 6. Collegamenti </h2>

          <p>
            {" "}
            Yoomy non ha esaminato tutti i siti collegati al suo sito Web e non
            è responsabile per i contenuti di tali siti collegati. La presenza
            di qualsiasi collegamento non implica l'approvazione da parte di
            Yoomy del sito. L'utilizzo di qualsiasi sito web collegato è a
            rischio dell'utente.{" "}
          </p>

          <h2> 7. Modifiche ai termini di utilizzo del sito </h2>

          <p>
            {" "}
            Yoomy può rivedere i presenti Termini di utilizzo del proprio sito
            Web in qualsiasi momento senza preavviso. Utilizzando questo sito
            Web, accetti di essere vincolato dalla versione corrente di questi
            Termini e condizioni d'uso.{" "}
          </p>

          <h2> 8. La tua privacy </h2>

          <p> Si prega di leggere la nostra Informativa sulla privacy. </p>

          <h2> 9. Legge applicabile </h2>

          <p>
            {" "}
            Qualsiasi reclamo relativo al sito web di Yoomy sarà regolato dalle
            leggi dello stesso indipendentemente dalle disposizioni sui
            conflitti di legge.{" "}
          </p>
        </TermsContainer>
      </Container>
    </>
  );
};

export default TermsPage;

const TermsContainer = styled.div`
  color: ${(props) => props.theme.text};
  margin-bottom: 20px;

  p {
    font-size: 1.1rem;
  }
`;
