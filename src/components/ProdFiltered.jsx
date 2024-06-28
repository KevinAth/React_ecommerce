// Importar componentes y hooks necesarios de react-router-dom y react
import { Link, Outlet, useParams } from "react-router-dom";
import { useContext } from "react";
// Importar el contexto de productos
import { ProdContext } from "../context/ProdContext";
// Importar componentes de la cabecera y el pie de página
import { NavHeader } from "./navheader/NavHeader";
import { Footer } from "./footer/Footer";

// Definir el componente ProdFiltered
export function ProdFiltered() {
  // Obtener el estado del contexto de productos
  const { products } = useContext(ProdContext);
  // Obtener el parámetro 'category' de la URL
  const { category } = useParams();

  // Filtrar los productos que coinciden con la categoría proporcionada en la URL
  const prodfill = products.filter((prods) => prods.categoria === category);

  return (
    <>
      {/* Renderizar la cabecera */}
      <NavHeader />
      {/* Renderizar los productos filtrados en una cuadrícula */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 m-10">
        {prodfill.map((prod) => (
          <div
            id={prod.id} // Asignar el ID del producto al elemento div
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2"
          >
            {/* Mostrar la imagen del producto */}
            <img src={prod.img} alt={prod.titulo} className="w-full max-h-sm" />
            {/* Enlace al detalle del producto */}
            <Link
              to={`ProdDetails/${prod.id}`}
              className="font-bold text-xl mb-2 px-3"
            >
              {prod.titulo}
            </Link>
            {/* Mostrar la descripción del producto */}
            <p className="text-gray-700 text-base px-3">
              Descripción :{prod.descripcion}
            </p>
            <div className="px-6 py-4">
              {/* Mostrar la categoría del producto */}
              <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {prod.categoria}
              </span>
              {/* Mostrar el precio del producto */}
              <div className="font-bold text-xl mb-2">${prod.precio}</div>
              {/* Botón para agregar el producto al carrito */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Renderizar el pie de página */}
      <Footer />
    </>
  );
}
