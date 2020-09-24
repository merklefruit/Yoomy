import React from "react";
import { Link } from "react-router-dom";

import Layout from "../layout";

// Styled components
import {
  AuthCard,
  LoginForm,
  LoginButton,
  Terms,
} from "../../styles/authStyles";
import { Container } from "../../styles/globalStyles";

// Form Handling
import { Formik, Form, Field, ErrorMessage } from "formik";

const Registrati = () => {
  return (
    <Layout>
      <Container>
        <AuthCard>
          <h2>Registrati a Yooga.</h2>
          <LoginForm>
            <Formik
              initialValues={{
                nome: "",
                cognome: "",
                email: "",
                password: "",
                terms: false,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Campo richiesto";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Email non valida";
                }
                if (!values.nome) {
                  errors.nome = "Campo richiesto";
                }
                if (!values.cognome) {
                  errors.cognome = "Campo richiesto";
                }
                if (!values.password) {
                  errors.password = "Campo richiesto";
                }
                if (!values.terms) {
                  errors.terms = "Per favore accetta i termini e condizioni";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="label-div">
                    <label>Nome:</label>
                  </div>
                  <Field type="text" name="nome" />
                  <ErrorMessage name="nome" component="div" className="error" />

                  <div className="label-div">
                    <label>Cognome:</label>
                  </div>
                  <Field type="text" name="cognome" />
                  <ErrorMessage
                    name="cognome"
                    component="div"
                    className="error"
                  />

                  <div className="label-div">
                    <label>Email:</label>
                  </div>
                  <Field type="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />

                  <div className="label-div">
                    <label>Password:</label>
                  </div>
                  <Field type="password" name="password" />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />

                  <Terms>
                    <div className="checkbox">
                      <Field type="checkbox" name="terms" />
                    </div>
                    <p>Accetto i termini e condizioni</p>
                    <ErrorMessage
                      name="terms"
                      component="div"
                      className="error"
                    />
                  </Terms>

                  <LoginButton
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Registrati
                  </LoginButton>
                </Form>
              )}
            </Formik>
          </LoginForm>
          <p>
            Hai già un account? <Link to="/login">Accedi</Link>
          </p>
        </AuthCard>
      </Container>
    </Layout>
  );
};

export default Registrati;
