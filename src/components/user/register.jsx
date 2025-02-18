import { useState } from "react";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const [errors, setErrors] = useState({});

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(registerData,"data")
  };

  const isValid = (value) => {
    const handleError = {};
    if (!value.name) handleError.name = "Please Enter Name";
    if (!value.email) handleError.email = "Please Enter Email";
    if (!value.password) handleError.password = "Please Enter Password";
    if (!value.address) handleError.address = "Please Enter Address";
    if (!value.contactno) handleError.contactno = "Please Enter Contact Number";
    if (!value.age) handleError.age = "Please Enter Age";
    if (!value.city) handleError.city = "Please Enter City";
    if (!value.pincode) handleError.pincode = "Please Enter Pincode";
    setErrors(handleError);
    return Object.keys(handleError).length === 0; // Returns `true` if no errors
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (isValid(registerData)) {
      console.log("Registration Successful", registerData);
    } else {
      console.log("Validation Failed");
    }
  };
  return (
    <>
      <h1 className="bg-blue-700 text-white p-4">Register User</h1>

      <div className="container:full px-5 flex flex-col items-center">
        <form
          className="grid grid-cols-2 gap-14 mt-5"
          onSubmit={handleRegister}
        >
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              Name
            </label>
            <input
              type="text"
              placeholder="Enter a name"
              name="name"
              value={registerData?.name}
              className={
                errors.name
                  ? "border-2 p-3 w-96 rounded-md border-red-700"
                  : "border-2 p-3 w-96 rounded-md"
              }
              onChange={handleUserInput}
            />
            {errors?.name && (
              <span className="text-red-700">{errors?.name}</span>
            )}
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={registerData?.email}
              className={
                errors.email
                  ? "border-2 p-3 w-96 rounded-md border-red-700"
                  : "border-2 p-3 w-96 rounded-md"
              }
              onChange={handleUserInput}
            />
            {errors?.email && (
              <span className="text-red-700">{errors?.email}</span>
            )}
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              Password
            </label>
            <input
              type="password"
              name="password"
              value={registerData?.password}
              placeholder="Enter Password"
              className={
                errors.password
                  ? "border-2 p-3 w-96 rounded-md border-red-700"
                  : "border-2 p-3 w-96 rounded-md"
              }
              onChange={handleUserInput}
            />
            {errors?.password && (
              <span className="text-red-700">{errors?.password}</span>
            )}
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              Gender
            </label>
            <select
              name="gender"
              value={registerData?.gender}
              id="gender"
              className="border-2 p-3 w-96 rounded-md"
              onChange={handleUserInput}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              Contact No
            </label>
            <input
              type="text"
              name="contactno"
              value={registerData?.contactno}
              placeholder="Contact number"
              className={
                errors.contactno
                  ? "border-2 p-3 w-96 rounded-md border-red-700"
                  : "border-2 p-3 w-96 rounded-md"
              }
              onChange={handleUserInput}
            />
            {errors?.contactno && (
              <span className="text-red-700">{errors?.contactno}</span>
            )}
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              Age
            </label>
            <input
              type="text"
              name="age"
              value={registerData?.age}
              placeholder="Age"
              className={
                errors.age
                  ? "border-2 p-3 w-96 rounded-md border-red-700"
                  : "border-2 p-3 w-96 rounded-md"
              }
              onChange={handleUserInput}
            />
            {errors?.age && <span className="text-red-700">{errors?.age}</span>}
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              value={registerData?.address}
              placeholder="Address"
              className={
                errors.address
                  ? "border-2 p-3 w-96 rounded-md border-red-700"
                  : "border-2 p-3 w-96 rounded-md"
              }
              onChange={handleUserInput}
            />
            {errors?.address && (
              <span className="text-red-700">{errors?.address}</span>
            )}
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              City
            </label>
            <input
              type="text"
              name="city"
              value={registerData?.city}
              placeholder="City"
              className={
                errors.city
                  ? "border-2 p-3 w-96 rounded-md border-red-700"
                  : "border-2 p-3 w-96 rounded-md"
              }
              onChange={handleUserInput}
            />
            {errors?.city && (
              <span className="text-red-700">{errors?.city}</span>
            )}
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              value={registerData?.pincode}
              placeholder="Pincode"
              className={
                errors.pincode
                  ? "border-2 p-3 w-96 rounded-md border-red-700"
                  : "border-2 p-3 w-96 rounded-md"
              }
              onChange={handleUserInput}
            />
            {errors?.pincode && (
              <span className="text-red-700">{errors?.pincode}</span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white mt-10 w-52 p-4"
          >
            Register User
          </button>
        </form>
      </div>
    </>
  );
};
export default Register;
