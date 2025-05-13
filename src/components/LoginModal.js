import React, { useState } from 'react';

const LoginModal = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'fashyel2023') {
      onLogin();
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full overflow-hidden">
        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-primary mb-6 text-center">Acceso Administrativo</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Usuario</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            
            <div className="flex space-x-4">
              <button 
                type="button"
                onClick={onClose}
                className="flex-1 border border-primary text-primary py-2 rounded-xl hover:bg-gray-100 transition"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                className="flex-1 bg-primary text-white py-2 rounded-xl hover:bg-opacity-90 transition"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;