import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    userName: "",
    phoneNumber: "",
  };

  async function onSubmit(values, { setSubmitting }) {
    console.log(values);
    setSubmitting(false);
  }
  return (
    <>
      <div>Login</div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        enableReinitialize={true}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          console.log(values);
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter you mail id"
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
