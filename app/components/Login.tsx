// components/Login.js
import { useState, useEffect } from 'react';
import {toast} from 'react-toastify';
const Login = ({ onLogin }: any) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [tog, setTog] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      (data.status !== 'success')?toast.error(data.msg + ''):toast.success(data.msg);
      localStorage.setItem('token', data.token);
      onLogin(data.token, data.userId); // Assuming your server returns 'userId' instead of 'id'
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSignup = async () => {
    console.log('function called')
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();

      console.log(data);
      
      (data.status == 'success')?toast.success(data.msg):toast.error(data.msg);

    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (
    <div className='w-full h-full flex flex-wrap items-center justify-center' style={{ background: 'url(/bg.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}>


      <div className=" w-2/4 flex content-center flex-wrap justify-center items-center h-screen bg-gray-800 bg-opacity-0  ">
        <div className=''>
          <h1 className='text-4xl tracking-tighter text-white text-center'>Welcome to <span className='font-extrabold'>J-Commerce</span></h1>
        </div>
        <div className='w-full  '>

          {
            tog ?
              <div style={{backdropFilter:'blur(4px) brightness(0.9)'}} className=" p-8 w-full rounded-md shadow-md -skew-x-6">
                <h2 className="text-2xl font-bold mb-4 text-white ">Login</h2>
                <input
                  className="border bg-transparent text-white  p-2 mb-4 w-full rounded-md"
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="border bg-transparent text-white  p-2 mb-4 w-full rounded-md"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className=''>

                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={handleLogin}
                  >
                    SignIn
                  </button>
                  <span className='ml-2 text-white underline cursor-pointer' onClick={() => setTog(!tog)}>

                    or Create New Account
                  </span>
                </div>
              </div>
              :
              <div style={{backdropFilter:'blur(4px) brightness(0.9)'}} className=" p-8 rounded-md w-full shadow-md -skew-x-6">
                <h2 className="text-2xl font-bold mb-4 text-white ">Complete your Signup </h2>
                <input
                  className="border bg-transparent text-white  p-2 mb-4 w-full rounded-md"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="border bg-transparent text-white  p-2 mb-4 w-full rounded-md"
                  type="text"
                  placeholder="email"
                  value={'enter Your Email'}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="border bg-transparent text-white  p-2 mb-4 w-full rounded-md"
                  type="password"
                  placeholder="Password"
                  value={''}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className=''>

                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={handleSignup}
                  >
                    Signup
                  </button>
                  <span className='ml-2 text-white underline cursor-pointer' onClick={() => setTog(!tog)}>

                    or SignIn
                  </span>
                </div>
              </div>
          }
          <div className='w-full flex flex-wrap justify-between items-end  bg-blend-multiply'>

            {/* <img width={'200px'} className='animate-spin opacity-15' style={{mixBlendMode:'multiply',zIndex:'-1',animationDuration:'15s',}} src="https://www.pngfile.net/public/uploads/preview//floral-design-ornament-png-free-download-11568400209fzz1jfelvo.png" alt="" /> */}
            {/* <img width={'150'} className='animate-spin ' style={{ mixBlendMode: 'multiply', zIndex: '-1', animationDuration: '15s', }} src="https://freesvg.org/img/1342406378.png" alt="" /> */}
            <img width={'150'} className='animate-spin mix-blend-multiply' style={{ mixBlendMode: 'multiply', zIndex: '0', animationDuration: '15s', }} src="https://clipart-library.com/images_k/wheel-transparent/wheel-transparent-3.png" alt="" />
            <img width={'100'} className='animate-spin mix-blend-multiply' style={{ mixBlendMode: 'multiply', zIndex: '0', animationDuration: '15s', }} src="https://clipart-library.com/images_k/wheel-transparent/wheel-transparent-3.png" alt="" />
          </div>

        </div>
      </div>
    </div >
  );
};

export default Login;
