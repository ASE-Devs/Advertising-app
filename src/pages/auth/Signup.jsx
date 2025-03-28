import React from "react";
import { useNavigate } from "react-router";
import signup from "../../assets/Images/signup.png";
import { FcGoogle } from "react-icons/fc";
import { apiSignup } from "../../services/auth";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await apiSignup(formData);
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-screen min-h-screen bg-[#F8F8F8]">
      <div className="w-[55%] flex flex-col justify-center items-center  px-12">
        <h1 className="text-4xl font-semibold mb-6 text-center">
          GET STARTED NOW
        </h1>
        <form onSubmit={handleSubmit} className="w-[80%]">
          <div className="flex gap-3">
            <div className="flex flex-col w-full">
              <label className="mb-1 font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="border border-gray-500 pl-2 py-2 h-[40px] w-full rounded-xl mb-3"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-1 font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="border border-gray-500 pl-2 py-2 h-[40px] w-full rounded-xl mb-3"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border border-gray-500 pl-2 py-2 h-[40px] rounded-xl mb-3"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="**********"
              className="border border-gray-500 pl-2 py-2 rounded-xl mb-3 h-[40px]"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="**********"
              className="border border-gray-500 pl-2 py-2 rounded-xl mb-3 h-[40px]"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Role</label>
            <select
              name="role"
              className="border border-gray-500 pl-2 py-2 rounded-xl mb-3 h-[40px]"
            >
              <option value="vendor">Vendor</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="flex items-center pb-3">
            <input type="checkbox" required />
            <p className="pl-2 font-medium text-[14px]">
              I agree to the terms and policy
            </p>
          </div>
          <button
            className="bg-[#EA454C] w-full py-2 rounded-xl text-white cursor-pointer"
            type="submit"
          >
            Sign up
          </button>
          <div className="flex flex-col gap-3 items-center mt-2">
            <p>or</p>
            <button
              className="bg-white w-full py-2 rounded-xl text-black border border-gray-500"
              type="button"
            >
              <div className="flex items-center justify-center gap-3">
                <FcGoogle size={24} /> <span>Sign In with Google</span>
              </div>
            </button>
            <p>
              Have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-[#EA454C] cursor-pointer"
              >
                Sign in
              </span>
            </p>
          </div>
        </form>
      </div>

      <div className="w-[45%] h-screen flex items-center justify-center">
        <img
          src={signup}
          alt="Signup Illustration"
          className="h-[90%] w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Signup;
