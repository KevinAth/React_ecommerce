// Importar componentes y hooks necesarios de react-router-dom y react
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

// Definir el componente NavHeader
export function NavHeader() {
  // Crear un estado local para el texto de búsqueda
  const [text, setText] = useState("");
  // Obtener la función navigate para cambiar la ruta
  const navigate = useNavigate();

  // Función para actualizar el estado con el texto de búsqueda
  function buscar(e) {
    const palabra = e.target.value;
    setText(palabra);
  }

  // Función para manejar el evento de enviar el formulario de búsqueda
  function evento(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    navigate(`Buscar/${text}`); // Navegar a la ruta de búsqueda con el texto proporcionado
  }

  return (
    <div className="flex items-center justify-between py-5 px-6 bg-slate-300 mb-6">
      {/* Enlace a la página principal */}
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDuFrtsf-QuvvZ4w-8mzmp0p10N5VP4yVxA&s"
          alt=""
          className="h-10 w-10 rounded-full"
        />
      </Link>
      <div className="flex items-center ">
        {/* Formulario de búsqueda */}
        <form onSubmit={evento}>
          <input
            type="text"
            placeholder="Buscar"
            className="mx-10 px-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={buscar} // Actualizar el texto de búsqueda al cambiar el valor del input
          />
          <button type="submit" className="hidden">
            <img
              src="https://www.flaticon.es/icono-gratis/lupa_751463"
              alt=""
            />
            Buscar
          </button>
        </form>
        {/* Enlace al carrito de compras */}
        <Link to="/cart">
          <img
            src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-add-shopping-cart-icon-image_2292615.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}
