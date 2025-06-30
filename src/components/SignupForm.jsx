import * as Yup from "yup";
import { useFormik } from "formik";
import { Signup } from "../api/auth/auth_api";
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().trim().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const onSubmit = async (values) => {
    try {
      const response = await Signup(values);
      console.log("responseOnSubmit", response);
      if (response) {
        navigate("/");
      }
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && <p>{errors.name}</p>}
        </div>
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
          {errors.email && touched.email && <p>{errors.email}</p>}
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
          {errors.password && touched.password && <p>{errors.password}</p>}
        </div>
        <div>
          <button type="submit">Signup</button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
