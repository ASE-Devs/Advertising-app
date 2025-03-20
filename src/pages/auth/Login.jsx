import { Link } from "react-router";
import loginphoto from "../../assets/Images/loginphoto.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center bg-[#F8F8F8]">
      <div className="w-[50vw] flex flex-col justify-center items-center h-[100vh] gap-6">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold w-full">WELCOME BACK</h1>
          <p className="text-[#636364] text-center w-full">Please enter your details</p>
        </div>
        <div className="bottom">
          <form action="">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-1 font-medium">Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your email" className="border-1 border-gray-500 pl-2 py-1 h-[40px] rounded-xl mb-3" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-1 font-medium">Password</label>
              <input type="password" name="" id="" placeholder="**********" className="border-1 border-gray-500 pl-2 py-1 rounded-xl mb-3  h-[40px]" />
            </div>
            <div className="flex justify-between items-center pb-3">
              <div className="flex items-center ">
                <input type="checkbox" name="" id="" />
                <p className="pl-2 font-medium text-[14px]">Remember me</p>
              </div>
              <p><Link to='/' className="font-medium text-[14px]">Forget Password</Link></p>
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-[#EA454C]  py-2 rounded-xl text-white" type="submit"><Link to='/'>Sign in</Link></button>
              <button className="bg-white  py-2 rounded-xl text-black border-gray-500 border-1" type="submit"><Link to='/' className="flex items-center justify-center gap-3"><FcGoogle size={24} /> <span>Sign In with Google</span> </Link></button>
              <p>Don't have an account? <span className="text-red-600">Sign up for free!</span></p>
            </div>
          </form>
        </div>
      </div>
      <div>
        <img src={loginphoto} alt="Login Photo" className="h-[100vh]" />
      </div>

    </div>
  );
};

export default Login;
