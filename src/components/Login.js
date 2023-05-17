import React, { useState } from "react";
import Admin from '../img/Admin.png'
import { useNavigate } from "react-router-dom";



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


   const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

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
    // Login successful, navigate to dashboard
    navigate('/DashboardLayout');
   
  } else {
    // Login failed, display error message
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
      <div class="bg-primary  flex flex-col justify-center w-1/2 h-full p-10 absolute top-0 bottom-0 right-0 bg-opacity-90 ">
      <h1 class="text-2xl font-bold mb-10 text-text_secondary text-center">Welcome to Doctor Appointment</h1>
        
        <div class="bg-secondary w-4/5 shadow rounded-2xl mb-20 mx-auto">

        <form onSubmit={handleSubmit}  class="flex-justify-between px-8 py-8 text-primary ">

        <h1 class=" text-2xl font-bold mb-6 text-center">Login as an Admin User</h1>
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
