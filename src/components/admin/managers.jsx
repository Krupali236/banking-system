const Managers = () => {
  return (
    <>
      <div className="conatiner">
        <h1 className="bg-blue-700 text-white p-3 text-2xl">All Bank Managers</h1>

        <table className="my-5 w-full">
          <thead className="bg-blue-700 text-white capitalize">
            <tr>
              <th className="p-4">Manager Name</th>
              <th className="p-4">bank name</th>
              <th className="p-4">email</th>
              <th className="p-4">gender</th>
              <th className="p-4">Contact</th>
              <th className="p-4">street</th>
              <th className="p-4">city</th>
              <th className="p-4">pincode</th>
            </tr>
          </thead>
          <tbody className="font-semibold">
            <tr className="border-b-[1px] border-slate-200">
              <td className="capitalize">Demo</td>
              <td className="capitalize">demo bank</td>
              <td>demo@gmail.com</td>
              <td className="capitalize">male</td>
              <td>1234567890</td>
              <td className="capitalize">demo street</td>
              <td className="capitalize">demo city</td>
              <td>123456 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Managers;
