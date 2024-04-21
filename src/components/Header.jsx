import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  // For current path
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-lg font-semibold dark:text-white"
      >
        <span className="px-2 py-2 text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white">
          Planning Budget
        </span>
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline p-2"
        />
      </form>

      <div className="flex gap-2 items-center">
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>

        <Button className="w-18 h-10" color="gray">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button
            className="w-18 h-10"
            color="gray"
            gradientDuoTone="purpleToBlue"
          >
            Sign In
          </Button>
        </Link>
      </div>

      <Navbar.Toggle className="lg:hidden" />
    </Navbar>
  );
};

export default Header;
