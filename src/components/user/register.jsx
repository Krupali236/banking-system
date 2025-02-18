const Register = () => {
  return (
    <>
      <h1 className="bg-blue-700 text-white p-4">Register User</h1>

      <div className="container:full px-5 flex flex-col items-center">
        <form className="grid grid-cols-2 gap-14 mt-5">
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              Name
            </label>
            <input
              type="text"
              placeholder="Enter a name"
              name="username"
              className="border-2 p-3 w-96 rounded-md"
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
              className="border-2 p-3 w-96 rounded-md"
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
              placeholder="Enter Password"
              className="border-2 p-3 w-96 rounded-md"
            />
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              className="border-2 p-3 w-96 rounded-md"
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
              placeholder="Contact number"
              className="border-2 p-3 w-96 rounded-md"
            />
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              Age
            </label>
            <input
              type="text"
              placeholder="Age"
              className="border-2 p-3 w-96 rounded-md"
            />
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              placeholder="Address"
              className="border-2 p-3 w-96 rounded-md"
            />
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              City
            </label>
            <input
              type="text"
              placeholder="City"
              className="border-2 p-3 w-96 rounded-md"
            />
          </div>
          <div className="columns-1 flex flex-col text-start">
            <label className="font-semibold text-blue-700 my-1 text-lg">
              {" "}
              Pincode
            </label>
            <input
              type="text"
              placeholder="Contact number"
              className="border-2 p-3 w-96 rounded-md"
            />
          </div>
        </form>
        <button type="submit" className="bg-blue-700 text-white mt-10 w-52 p-4">
          Register User
        </button>
      </div>
    </>
  );
};
export default Register;
