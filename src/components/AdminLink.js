import React, { useState } from 'react';
import LoginModal from './LoginModal';

const AdminLink = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    window.location.hash = 'admin';
  };

  return (
    <>
      {!isLoggedIn && (
        <button 
          onClick={() => setShowLogin(true)}
          className="inline-block text-gray-400 text-sm hover:text-gray-600 transition duration-300"
        >
          ¿Eres administrador?
        </button>
      )}
      
      {showLogin && (
        <LoginModal 
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
    </>
  );
};

export default AdminLink;