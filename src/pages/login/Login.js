import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link } from "react-router-dom";

import styles from "./login.module.scss";
import { memberLoginAction } from "redux/manageUser/actionCallApi";

const Schema = Yup.object().shape({
  email: Yup.string().email("Email is invalid!").required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { infoUserLogin } = useSelector((state) => state.manageUserReducer);

  const formik = useFormik({
    initialValues: { password: "", email: "" },
    validationSchema: Schema,
    onSubmit: (values) => {
      dispatch(memberLoginAction(values, navigate));
    },
  });
  if (Object.entries(infoUserLogin).length > 0) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className={styles.login}>
      <div className="form-login">
        <h1 className="text-center mb-3">Member Login</h1>
        <form onSubmit={formik.handleSubmit} className="">
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-danger">** {formik.errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn px-5 btn-outline-success">
              Login
            </button>
          </div>
          <div className="d-flex mt-3 justify-content-center">
            <h5 className="mr-2">Don't have an account? </h5>
            <Link className="h5" to="/register">
              Register!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
