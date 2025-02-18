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

  const isValid = (value)=>{
    const handleError = {};

    if (!value.name.trim()) handleError.name = "Please Enter Name";
    if (!value.email.trim()) handleError.email = "Please Enter Email";
    if (!value.password.trim()) handleError.password = "Please Enter Password";
    if (!value.address.trim()) handleError.address = "Please Enter Address";
    if (!value.contactno.trim()) handleError.contactno = "Please Enter Contact Number";
    if (!value.age.trim()) handleError.age = "Please Enter Age";
    if (!value.city.trim()) handleError.city = "Please Enter City";
    if (!value.pincode.trim()) handleError.pincode = "Please Enter Pincode";

    setErrors(handleError);

    return Object.keys(handleError).length === 0; // Returns `true` if no errors


  }
  const handleRegister = (e)=>{
    e.preventDefault();
    if (isValid(registerData)) {
      console.log("Registration Successful", registerData);
    } else {
      console.log("Validation Failed");
    }
  }
  return (
    <>
      <h1 className="bg-blue-700 text-white p-4">Register User</h1>

      <div className="container:full px-5 flex flex-col items-center">
        <form className="grid grid-cols-2 gap-14 mt-5" onSubmit={handleRegister}>
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
              className="border-2 p-3 w-96 rounded-md"
              onChange={handleUserInput}
            />
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
              className="border-2 p-3 w-96 rounded-md"
              onChange={handleUserInput}
            />
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
              className="border-2 p-3 w-96 rounded-md"
              onChange={handleUserInput}
            />
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
              className="border-2 p-3 w-96 rounded-md"
              onChange={handleUserInput}
            />
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
              className="border-2 p-3 w-96 rounded-md"
              onChange={handleUserInput}
            />
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
              className="border-2 p-3 w-96 rounded-md"
              onChange={handleUserInput}
            />
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
              className="border-2 p-3 w-96 rounded-md"
              onChange={handleUserInput}
            />
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
              className="border-2 p-3 w-96 rounded-md"
              onChange={handleUserInput}
            />
          </div>
        <button type="submit" className="bg-blue-700 text-white mt-10 w-52 p-4">
          Register User
        </button>
        </form>
      </div>
    </>
  );
};
export default Register;
