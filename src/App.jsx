import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Aboute from "./pages/Aboute";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Aheader from "./components/Admin page/Aheader";
import SignIn from "./pages/SignIn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GustLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <Aboute />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "signIn",
          element: <SignIn/>,
        },
      ],
    },
    {
      path: "/user",
      element: <UserLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;

function GustLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      <Header />
      <Outlet />
    </div>
  );
}

function UserLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      <Aheader />
      <div className="grid grid-cols-[250px_1fr]">
        <SideBar />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
