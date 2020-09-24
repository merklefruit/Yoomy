import React from "react";
import { Link } from "react-router-dom";

// Styled components
import {
  AuthCard,
  LoginForm,
  LoginButton,
  BackgroundImage,
} from "../../styles/authStyles";
import { Container } from "../../styles/globalStyles";

// Form Handling
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => {
  return (
    <>
      <Container>
        <AuthCard>
          <BackgroundImage>
            <img
              src={require("../../assets/images/hero-image.jpg")}
              alt="login-hero"
            />
          </BackgroundImage>
          <LoginForm>
            <h2>Login</h2>

            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Campo richiesto";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Indirizzo email non valido";
                }
                if (!values.password) {
                  errors.password = "Campo richiesto";
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
                  <label>Email:</label>
                  <Field type="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                  <div style={{ marginTop: "30px" }}>
                    <label>Password:</label>
                  </div>
                  <Field type="password" name="password" />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                  <LoginButton
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </LoginButton>
                </Form>
              )}
            </Formik>
          </LoginForm>
          <p className="extra">
            Non hai un account? <Link to="/registrati">Registrati</Link>
          </p>
        </AuthCard>
      </Container>
    </>
  );
};

export default Login;
