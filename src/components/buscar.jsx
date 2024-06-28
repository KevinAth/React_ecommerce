// Importar componentes y hooks necesarios de react-router-dom y react
import { Link, Outlet, useParams } from "react-router-dom";
import { useContext } from "react";
// Importar el contexto de productos
import { ProdContext } from "../context/ProdContext";
// Importar componentes de la cabecera y el pie de página
import { NavHeader } from "./navheader/NavHeader";
import { Footer } from "./footer/Footer";

// Definir el componente BuscarProd
export function BuscarProd() {
  // Obtener el estado y funciones del contexto de productos
  const { products, setCarProd, carProd } = useContext(ProdContext);

  // Obtener el parámetro 'nombre' de la URL
  const { nombre } = useParams();
  console.log(nombre);

  // Filtrar los productos que coinciden con el nombre proporcionado en la URL
  const prods = products.filter((producto) => producto.titulo == nombre);
  console.log(prods);

  return (
    <div>
      {/* Renderizar la cabecera */}
      <NavHeader />
      {/* Renderizar los productos filtrados en una cuadrícula */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ">
        {prods.map((prod) => (
          <div
            id={prod.id}
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
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCarProd((preProd) => [...preProd, prod])}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Renderizar el pie de página */}
      <Footer />
    </div>
  );
}
