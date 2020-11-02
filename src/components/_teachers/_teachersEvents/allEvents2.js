import React, { useEffect, forwardRef } from "react";
import styled from "styled-components";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchEvents } from "../../../actions";

// date-fns
import { format } from "date-fns";
import { it } from "date-fns/locale";

// Material table
import MaterialTable from "material-table";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const DetailRow = ({ rowData }) => {
  const { course, startDate, endDate, description, participants } = rowData;
  return (
    <Detail>
      <h3>
        Lezione <span>{course.name}</span> di{" "}
        {format(new Date(startDate), "iiii d MMMM", { locale: it })}{" "}
        <span>
          dalle {format(new Date(startDate), "HH:mm", { locale: it })} alle{" "}
          {format(new Date(endDate), "HH:mm", { locale: it })}
        </span>
      </h3>
      <p>
        {participants.length > 1 ? (
          <b> {participants.length} Partecipanti: </b>
        ) : participants.length === 0 ? (
          <b> Nessun iscritto finora</b>
        ) : (
          <b> 1 Partecipante: </b>
        )}
        {participants.map((p, i) => (
          <span style={{ marginRight: "10px" }}>
            {p.name} {p.surname}
            {i !== participants.length - 1 && ","}
          </span>
        ))}
      </p>
      <p>
        <b>Descrizione della lezione:</b> {description}
      </p>
      <p>
        <b>Altre informazioni: </b> Intensità {course.intensity}
        /10, Livello: {course.level}
      </p>
    </Detail>
  );
};

const AllEvents2 = ({ teacher, events, fetchEvents, setCurrentlyEditing }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <Table>
      <MaterialTable
        title="Tutti i tuoi eventi pianificati"
        icons={tableIcons}
        columns={[
          { title: "Corso", field: "course.name" },
          { title: "Data di inizio", field: "startDate", type: "date" },
          { title: "Durata (min)", field: "duration", type: "string" },
          { title: "Partecipanti", field: "participants.length" },
          { title: "Crediti", field: "credits" },
        ]}
        data={events}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
        detailPanel={(rowData) => {
          return <DetailRow rowData={rowData} />;
        }}
        options={{
          actionsColumnIndex: -1,
        }}
        localization={{
          pagination: {
            labelDisplayedRows: "{from}-{to} di {count}",
            labelRowsSelect: "righe",
          },
          toolbar: {
            nRowsSelected: "{0} righe selezionate",
            searchPlaceholder: "Cerca",
          },
          header: {
            actions: "Modifica",
          },
          body: {
            emptyDataSourceMessage: "Nessun dato disponibile",
            filterRow: {
              filterTooltip: "Filtra",
            },
          },
        }}
      />
    </Table>
  );
};

AllEvents2.propTypes = {
  teacher: PropTypes.object,
  events: PropTypes.array,
  fetchEvents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  teacher: state.auth.teacher,
  events: state.api.events,
});

export default connect(mapStateToProps, { fetchEvents })(AllEvents2);

const Table = styled.div`
  padding: 0 25px 0 25px;
`;

const Detail = styled.div`
  padding: 10px 25px 10px 25px;

  h3 {
    font-weight: 600;
    margin: 0.5rem 0 0 0;
    font-size: 1.1rem;

    span {
      color: ${({ theme }) => theme.blue};
    }
  }
  p {
    font-size: 1rem;
    margin: 0.4rem 0 0.4rem 0;

    span {
      color: ${({ theme }) => theme.darkblue};
      font-weight: 500;
    }
  }
`;
