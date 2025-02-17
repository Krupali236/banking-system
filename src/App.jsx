import "./App.css";
import Login from "./components/user/login";
import Register from "./components/user/register";
import AdminLogin from "./components/user/admin-register";
import Managers from "./components/admin/managers";
import Home from "./components/home";
import Navbar from "./navigation/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import bg from "./assets/images/bg1.jpg";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Register />
        </>
      ),
    },
  ]);
  return (
    <>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <AdminLogin /> */}
      {/* <Managers /> */}
      {/* <Home /> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;
