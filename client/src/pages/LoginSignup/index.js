import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { authUser } from "../../actions/userAction";

import "./loginSignup.css";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialFormValue = {
    email: "",
    password: "",
  };

  const SignupSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Password is required"),
  });

  return (
    <>
      <div>Login</div>
      <Formik
        initialValues={initialFormValue}
        validationSchema={SignupSchema}
        onSubmit={async (data) => {
          let user = await dispatch(authUser(data));
          try {
            if (user) {
              console.log(user);
              navigate(`/users/${user[0].id}`);
            }
          } catch (error) {
            console.log(error);
          }
        }}
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
          console.log(errors);
          return (
            <form onSubmit={handleSubmit} autoComplete='off'>
              <div>
                <label>Email</label>
                <input
                  type='text'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='Enter your email'
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
              <div>
                <label>Password</label>
                <input
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder='Enter your password'
                />
                {errors.password && <span>{errors.password}</span>}
              </div>
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginSignup;
