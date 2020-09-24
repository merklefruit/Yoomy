import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

// Styled components
import {
  AuthCard,
  LoginForm,
  LoginButton,
  Terms,
  BackgroundImage,
} from "../../styles/authStyles";
import { Container } from "../../styles/globalStyles";

// Form Handling
import { Formik, Form, Field, ErrorMessage } from "formik";

const Registrati = ({ register, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/app/per-te" />;
  }

  return (
    <>
      <Container>
        <AuthCard>
          <BackgroundImage>
            <img
              src={require("../../assets/images/login-image.jpg")}
              alt="register-hero"
            />
          </BackgroundImage>
          <LoginForm>
            <h2>Registrati</h2>
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
                  setSubmitting(false);
                  const { nome, email, password } = values;
                  register({
                    username: nome,
                    email,
                    password,
                  });
                }, 300);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="label-div">
                    <label>Username:</label>
                  </div>
                  <Field type="text" name="nome" />
                  <ErrorMessage name="nome" component="div" className="error" />

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
                    <p className="discrete">Accetto i termini e condizioni</p>
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
          <p className="extra">
            Hai già un account? <Link to="/login">Accedi</Link>
          </p>
        </AuthCard>
      </Container>
    </>
  );
};

Registrati.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Registrati);
