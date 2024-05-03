import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="border-b-2  relative  ">
      <div className="flex max-lg:flex-col  md:flex-1 justify-between">
        <div className="grid grid-cols-1 [auto_1fr] text-sm sm:text-lg font-semibold dark:text-white">
          <div className="px-2 py-2 text-2xl b-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-">
            PLAB-MS
          </div>
        </div>
        <div className="absolute right-2 top-2 lg:hidden pl-6">
          <Navbar.Toggle />
        </div>
        <div className="flex-1 px-2 flex max-lg:flex-col gap-2 items-center ">
          <Navbar.Collapse className="flex-1">
            <form>
              <TextInput
                type="text"
                placeholder="Search..."
                rightIcon={AiOutlineSearch}
                className="p-2"
              />
            </form>
            <div className="flex-1 flex lg:items-center max-lg:flex-col max-lg:gap-y-5 lg:gap-x-5">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
            </div>
            <div className="flex gap-x-2 lg:items-center justify-between p-2">
              <Button className="w-18 h-10" color="gray">
                <FaMoon />
              </Button>
              <NavLink to="/SignUp">
                <Button
                  className="w-18 h-10"
                
                  gradientDuoTone="purpleToBlue"
                 
                >
                  SignIn
                </Button>
              </NavLink>
            </div>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
