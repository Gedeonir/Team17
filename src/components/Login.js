import React, { useState } from "react";
import Admin from '../img/Admin.png'
import { useNavigate } from "react-router-dom";
import { FaClosedCaptioning } from "react-icons/fa";
import { Loading2 } from "./Loading";
import { BiErrorCircle } from 'react-icons/bi'
import { useLocation } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error,setError]=useState({
    Error:false,
    errorMsg:''
  });

  const location=useLocation()

  console.log(location);

   const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // Call API endpoint with email and password
    const response = await fetch('https://doctorsappointment-production.up.railway.app/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    
  })
  const data = await response.json();
  if (response.ok) {
    localStorage.setItem("token",data.token);
    // Login successful, navigate to dashboard
    setLoading(false)
    navigate('/dashboard');
   
  } else {
    // Login failed, display error message
    setLoading(false)
    setError({
      ...error,
      Error:true,
      errorMsg:data.message
    })
    console.log(data.message);
  }
    }

  return (
    <div class="flex flex-justify-center w-full h-screen">
      <div
        class="bg-blue-500  text-white flex justify-center w-full p-10"
        style={{ backgroundImage: `url(${Admin})`, backgroundSize: 'cover', backgroundPosition:"bottom" }}
      >
       
        
      </div>
      <div class="bg-primary  flex flex-col justify-center lg:w-1/2 w-full h-full lg:p-10 p-5 absolute top-0 bottom-0 right-0 bg-opacity-90 ">
      <h1 class="text-2xl font-bold mb-10 text-text_secondary lg:text-center">Welcome to Doctor Appointment</h1>
        
        <div class="bg-secondary lg:w-4/5 w-full shadow rounded-2xl mb-20 mx-auto">

        <form onSubmit={handleSubmit}  class="flex-justify-between lg:px-8 px-2 py-8 text-primary ">

          <h1 class=" text-2xl font-bold mb-6 text-center">Login as an Admin User</h1>
          {location.state.message && <p className="text-danger font-bold text-center">{location.state.message}</p>}
          {Loading && <Loading2 message="Signing in......."/>}
          {error.Error&& <div className='flex justify-start gap-2 bg-danger  px-4 py-2 bg-opacity-20 rounded-t-2xl rounded-r-2xl'><BiErrorCircle size={25}/><p>{error.errorMsg}</p></div>}
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              class="appearance-none  rounded-lg w-full py-2 px-3 text-gray-700"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
             

          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            
            <input
            
              class="appearance-none  rounded-lg w-full py-2 px-3 text-gray-700 "
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            
            />
             

          </div>
          <button
            class="bg-primary w-full rounded-full hover:bg-blue-700 text-text_secondary font-bold py-2 px-4 mb-16"
            type='submit'
          >
            LOGIN
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
