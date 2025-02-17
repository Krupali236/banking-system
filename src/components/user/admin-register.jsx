const AdminLogin = () => {
  return (
    <>
      <h1 className="my-2 bg-blue-700 text-white p-3">Admin Register</h1>

      <div className="container">
        <form className="grid grid-cols-1 justify-items-center gap-14 mt-5">
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
        </form>
        <button type="submit" className="bg-blue-700 text-white mt-10 w-52 p-4">
          Login
        </button>
      </div>
    </>
  );
};
export default AdminLogin;
