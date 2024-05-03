import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("please fill out fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/backend/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      //removing the same username
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/signin");
      }
      // Handle the response
    } catch (error) {
      // Handle errors
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="grid grid-cols-[auto_1fr] gap-5 ml-48 mr-48 items-center max-sm:m-4 ">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center max-sm:m-4">
        <img src="src/assets/new.jpg" alt="Welcome" />
      </div>
      <div className="flex-1">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label value="Your UserName" />
            <TextInput
              type="text"
              placeholder="UserName"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Your Email" />
            <TextInput
              type="email"
              placeholder="example@gmail.com"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Your Password" />
            <div className="relative">
              <TextInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                onChange={handleChange}
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
          <Button
            gradientDuoTone="purpleToBlue"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading</span>
              </>
            ) : (
              "Sign up"
            )}
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5 ">
          <span>Have an account?</span>
          <NavLink to="/signin" className="text-blue-500">
            Signin{" "}
          </NavLink>
        </div>
        {errorMessage && (
          <Alert className="mt-5" color="failure">
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default SignUp;
