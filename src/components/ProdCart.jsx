// Importar componentes y hooks necesarios de react-router-dom y react
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
// Importar el contexto de productos
import { ProdContext } from "../context/ProdContext";

// Definir el componente ProdCart
export function ProdCart() {
  // Obtener el estado y funciones del contexto de productos
  const { products, setCarProd, carProd } = useContext(ProdContext);

  // Mapear sobre la lista de productos y renderizar cada uno
  return products.map((prod) => (
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
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCarProd((preProd) => [...preProd, prod])}
        >
          Agregar al carrito
        </button>
        {/* Mostrar el estado del carrito en la consola */}
        {console.log(carProd)}
      </div>
    </div>
  ));
}
