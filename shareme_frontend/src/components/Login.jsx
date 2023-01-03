import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className='flex justify-start items-center flex-col h-screen'>Login
      <div className="relative w-full h-full">
        <video src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoplay
          className='w-full h-full object-cove'
        />
      </div>
    </div>
  )
}

export default Login