import * as Yup from "yup";
import { useFormik } from "formik";
import { Login } from "../api/auth/auth_api";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const onSubmit = async (values) => {
    try {
      const response = await Login(values);
      if (response) {
        console.log("responseLoginSubmit", response);
        login(response);
      }
      console.log("onSubmit", response);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = formik;
  return (
    <form
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>
        <div>
          <button type="submit">Login</button>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
