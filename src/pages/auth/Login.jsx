import { Link, useNavigate } from "react-router"; 
import { useState } from "react";
import loginphoto from "../../assets/Images/loginphoto.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("https://advertising-api.onrender.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      localStorage.setItem("token", responseData.token);
      console.log("Login successful:", responseData);

  
      if (role === "vendor") {
        navigate("/dashboard");
      } else {
        navigate("/user");
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="flex w-screen h-screen justify-between items-center bg-gray-100">
      <div className="w-1/2 flex flex-col justify-center items-center h-full gap-6">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">WELCOME BACK</h1>
          <p className="text-gray-500">Please enter your details</p>
        </div>
        <form onSubmit={handleSubmit} className="w-80">
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="border border-gray-500 px-2 py-2 rounded-xl"
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="password" className="mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="**********"
              className="border border-gray-500 px-2 py-2 rounded-xl"
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="role" className="mb-1 font-medium">Role</label>
            <select
              name="role"
              id="role"
              className="border border-gray-500 px-2 py-2 rounded-xl"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select role</option>
              <option value="vendor">Vendor</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="flex justify-between items-center pb-3">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="pl-2 text-sm">Remember me</label>
            </div>
            <Link to="/forgot-password" className="text-sm text-red-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button className="bg-red-500 w-full py-2 rounded-xl text-white cursor-pointer" type="submit">
            Sign in
          </button>
          <div className="my-3">
            <Link
              to="/"
              className="bg-white py-2 rounded-xl text-black border border-gray-500 flex items-center justify-center gap-3 w-full"
            >
              <FcGoogle size={24} /> <span>Sign In with Google</span>
            </Link>
          </div>
          <p className="text-center">
            Don't have an account? <Link to="/signup" className="text-red-500">Sign up for free!</Link>
          </p>
        </form>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <img src={loginphoto} alt="Login" className="h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
