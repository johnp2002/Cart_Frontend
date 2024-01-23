
'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Login from '@/app/components/Login';
import { useRouter} from 'next/navigation'

const HomePage = () => {
  const [token, setToken] = useState('');
  const [userId, setuserId] = useState('');
  const router = useRouter();
  
  const handleLogin = (newToken, userId) => {
    if (newToken.toString() === 'undefined') {
      return;
    }
  
    Cookies.set('token', newToken, { path: '/home' });
    Cookies.set('id', userId, { path: '/home' });
    setToken(newToken);
    setuserId(userId);
    
    setTimeout(() => {
      router.push('/home');
    }, 1000);
  };

  useEffect(() => {
    
    const storedToken = Cookies.get('token');
    const id = Cookies.get('id');
    if (storedToken) {
      setToken(storedToken);
    }
    if(id){
      setuserId(id);
    }
  }, []);

  const handleLogout = () => {
    
    Cookies.remove('token', { path: '/' });
    Cookies.remove('token', { path: '/home' });
    Cookies.remove('id', { path: '/' });
    Cookies.remove('id', { path: '/home' });
    setToken('');
    setuserId('');
  };

  return (
    <div>
      {!token ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <p>Welcome, user!</p>
          <button onClick={handleLogout}>Logout</button>
          {/* Render protected content here */}
        </div>
      )}

    </div>
  );
};

export default HomePage;

















































