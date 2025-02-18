import { useState } from "react";
import { connect } from "react-redux";
import { validateFields } from "../utils/common";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    email: "",
    password: "",
    role: "customer",
    errormsg: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValid = (value) => {
    const handleError = {};
    if (!value?.email) {
      handleError.email = "Please Enter email";
    }
    if (!value?.password) {
      handleError.password = "Please Enter password";
    }
    setErrors(handleError);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Click");

    const validation = isValid(state);
    if(validation){
      console.log("Login Successful")
    }
   
  };
  return (
    <>
      <h1 className="bg-blue-700 text-white p-3">Login User</h1>

      <div className="container:full flex flex-col items-center">
        <form
          className="grid grid-cols-1 justify-items-center gap-14 mt-16"
          onSubmit={handleLogin}
        >
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              User Role
            </label>
            <select
              name="role"
              id="role"
              className="p-3 w-96 rounded-md border-2"
              onChange={handleOnChange}
              value={state.role}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="border-2 p-3 w-96 rounded-md"
              value={state.email}
              onChange={handleOnChange}
            />
            {errors?.email && (
              <p className="text-red-500 font-semibold">{errors?.email}</p>
            )}
          </div>

          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="border-2 p-3 w-96 rounded-md"
              value={state.password}
              onChange={handleOnChange}
            />
            {errors?.password && (
              <p className="text-red-500 font-semibold">{errors?.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white mt-10 w-52 p-4"
          >
            Login User
          </button>
        </form>
      </div>
    </>
  );
};

export default connect()(Login);
