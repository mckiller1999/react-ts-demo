import React from "react";
import { useFormik } from "formik";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { siginActionApi } from "../redux/reducer/userReducer";
type Props = {};
export interface UserSigninForm {
  email: string;
  password: string;
}
const Login = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const signinFrom = useFormik<UserSigninForm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email cannot be blank")
        .email("email is valid"),
      password: yup.string().required("password cannot be blank"),
    }),

    onSubmit: (values: UserSigninForm) => {
      const action = siginActionApi(values);
      dispatch(action);
    },
  });
  return (
    <div className="container w-50">
      <form className="m-5" onSubmit={signinFrom.handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
          <p>email</p>
          <input
            className="form-control"
            name="email"
            id="email"
            onChange={signinFrom.handleChange}
            onBlur={signinFrom.handleBlur}
          />
          <p className="text text-danger">
            {signinFrom.errors.email && signinFrom.errors.email}
          </p>
        </div>
        <div className="form-group">
          <p>password</p>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={signinFrom.handleChange}
            onBlur={signinFrom.handleBlur}
          />
          <p className="text text-danger">
            {signinFrom.errors.password && signinFrom.errors.password}
          </p>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
