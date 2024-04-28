import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboute from "./pages/Aboute";
import SignIn from "./pages/SignIn";
import Signout from "./pages/Signout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Header";
// import SideBar from "./components/SideBar";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    {/* <SideBar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Aboute />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-out" element={<Signout />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
      </Routes>                                                           
    </BrowserRouter>
  );
};

export default App;
