import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg"
const Navbar = () => {
  return (
    <>
    <div className="flex justify-between bg-blue-700 text-white">
      <ul className="flex items-center px-5 py-5">
        <li><img src={logo} alt="logo" height="40px" width="40px" /></li>
        <NavLink to="/">
          <li className="text-white text-lg mx-5">Home</li>
        </NavLink>
        <NavLink to="/about">
          <li className="text-white text-lg mx-5">About Us</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="text-white text-lg mx-5">Contact Us</li>
        </NavLink>
      </ul>
      <div className="flex items-center">
      <NavLink to="/register">
        <button className="text-white text-lg bg-transparent mx-1">Register Admin</button>
      </NavLink>
      <NavLink to="/login">
        <button className="text-white text-lg bg-transparent mx-1">Login</button>
      </NavLink>
      </div>
    </div>
    </>
  );
};
export default Navbar;
