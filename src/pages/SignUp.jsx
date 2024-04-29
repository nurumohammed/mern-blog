import { Button, Label, TextInput } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="grid grid-cols-[auto_1fr] gap-5 ml-48 mr-48 items-center">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        <img src="src/assets/new.jpg" alt="Welcome" />
      </div>
      <div className="flex-1">
        <form className="flex flex-col gap-4">
          <div>
            <Label value="Your UserName" />
            <TextInput type="text" placeholder="UserName" id="username" />
          </div>
          <div>
            <Label value="Your Email" />
            <TextInput type="text" placeholder="example@gmail.com" id="email" />
          </div>
          <div>
            <Label value="Your Password" />
            <div className="relative">
              <TextInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <Button gradientDuoTone="purpleToPink" type="submit">
            SignUp
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5 ">
          <span>Have an account?</span>
          <NavLink to="/signin" className="text-blue-500">
            Signin{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
