import React, { useState } from 'react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('textos');

  return (
    <section id="admin" className="py-20 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-serif font-bold text-black">Panel de Administración</h2>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 bg-gray-50">
            <nav className="p-4">
              <button 
                onClick={() => setActiveTab('textos')}
                className={`w-full text-left px-4 py-2 mb-2 rounded-lg ${activeTab === 'textos' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                Editar Textos
              </button>
              <button 
                onClick={() => setActiveTab('productos')}
                className={`w-full text-left px-4 py-2 mb-2 rounded-lg ${activeTab === 'productos' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                Productos
              </button>
              <button 
                onClick={() => setActiveTab('colecciones')}
                className={`w-full text-left px-4 py-2 mb-2 rounded-lg ${activeTab === 'colecciones' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                Colecciones
              </button>
              <button 
                onClick={() => setActiveTab('personalidad')}
                className={`w-full text-left px-4 py-2 mb-2 rounded-lg ${activeTab === 'personalidad' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                Bolsos por Personalidad
              </button>
            </nav>
          </div>
          
          <div className="md:w-3/4 p-6">
            {activeTab === 'textos' && (
              <div>
                <h3 className="text-xl font-serif font-bold text-black mb-6">Editar Textos Generales</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Título Principal</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                      defaultValue="Elegancia hecha bolso"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Subtítulo</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                      defaultValue="Piezas únicas que cuentan tu historia sin decir una palabra"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Slogan</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                      defaultValue="Fashyel se parece a ti"
                    />
                  </div>
                  <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition duration-300">
                    Guardar Cambios
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'productos' && (
              <div>
                <h3 className="text-xl font-serif font-bold text-black mb-6">Administrar Productos</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Bolso Editorial</td>
                        <td className="px-6 py-4 whitespace-nowrap">$450</td>
                        <td className="px-6 py-4 whitespace-nowrap space-x-2">
                          <button className="text-blue-500 hover:text-blue-700">Editar</button>
                          <button className="text-red-500 hover:text-red-700">Eliminar</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Clutch Nocturno</td>
                        <td className="px-6 py-4 whitespace-nowrap">$380</td>
                        <td className="px-6 py-4 whitespace-nowrap space-x-2">
                          <button className="text-blue-500 hover:text-blue-700">Editar</button>
                          <button className="text-red-500 hover:text-red-700">Eliminar</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="mt-4 bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition duration-300">
                  + Añadir Producto
                </button>
              </div>
            )}
            
            {activeTab === 'colecciones' && (
              <div>
                <h3 className="text-xl font-serif font-bold text-black mb-6">Administrar Colecciones</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Esenciales</td>
                        <td className="px-6 py-4">Piezas fundamentales para cada ocasión</td>
                        <td className="px-6 py-4 whitespace-nowrap space-x-2">
                          <button className="text-blue-500 hover:text-blue-700">Editar</button>
                          <button className="text-red-500 hover:text-red-700">Eliminar</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Edición Limitada</td>
                        <td className="px-6 py-4">Creaciones exclusivas para mentes audaces</td>
                        <td className="px-6 py-4 whitespace-nowrap space-x-2">
                          <button className="text-blue-500 hover:text-blue-700">Editar</button>
                          <button className="text-red-500 hover:text-red-700">Eliminar</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="mt-4 bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition duration-300">
                  + Añadir Colección
                </button>
              </div>
            )}
            
            {activeTab === 'personalidad' && (
              <div>
                <h3 className="text-xl font-serif font-bold text-black mb-6">Administrar Bolsos por Personalidad</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Personalidad</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">El Clásico</td>
                        <td className="px-6 py-4">Para quienes valoran lo atemporal</td>
                        <td className="px-6 py-4 whitespace-nowrap space-x-2">
                          <button className="text-blue-500 hover:text-blue-700">Editar</button>
                          <button className="text-red-500 hover:text-red-700">Eliminar</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">La Aventurera</td>
                        <td className="px-6 py-4">Para espíritus libres y viajeras</td>
                        <td className="px-6 py-4 whitespace-nowrap space-x-2">
                          <button className="text-blue-500 hover:text-blue-700">Editar</button>
                          <button className="text-red-500 hover:text-red-700">Eliminar</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="mt-4 bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition duration-300">
                  + Añadir Bolso
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;