import React, { useState, useEffect } from "react";
import axios from "axios";
import { TEACHERS_URL } from "../../../helpers/config";
import { setAlert } from "../../../actions/alert";

// Styled components
import { Container } from "../../../styles/globalStyles";
import { ListContainer } from "../../../styles/_app/istruttoriStyles.js";

const IstruttoriList = () => {
  const [listData, setListData] = useState(null);
  useEffect(() => {
    async function getTeachers() {
      try {
        const teachers = await axios.get(TEACHERS_URL);
        if (teachers.status === 200) {
          setListData(teachers.data);
        } else {
          const error = "Errore interno. Riprova più tardi.";
          setAlert(error, "", "error");
        }
      } catch (error) {
        setAlert(error, "", "error");
      }
    }
    getTeachers();
  }, []);

  return (
    <Container>
      <ListContainer>
        <ul>
          {listData
            ? listData.map((teacher) => (
                <li key={teacher.id}>
                  <h3>
                    {teacher.name} {teacher.surname}
                  </h3>
                  <p>Email: {teacher.email}</p>
                  <p>Bio: {teacher.biography}</p>
                  <p>Id: {teacher.id}</p>
                </li>
              ))
            : ""}
        </ul>
      </ListContainer>
    </Container>
  );
};

export default IstruttoriList;
