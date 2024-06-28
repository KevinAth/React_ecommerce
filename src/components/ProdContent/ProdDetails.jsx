// Importar React y los hooks necesarios desde React
import React, { useContext, useEffect, useState } from "react";
// Importar componentes de la cabecera y el pie de página
import { Footer } from "../footer/Footer";
import { NavHeader } from "../navheader/NavHeader";
// Importar el contexto de productos y el hook useParams de react-router-dom
import { ProdContext } from "../../context/ProdContext";
import { useParams } from "react-router-dom";

// Definir el componente ProdDetails
export function ProdDetails() {
  // Obtener el estado y funciones del contexto de productos
  const { products, setCarProd, carProd } = useContext(ProdContext);
  // Obtener el parámetro 'ProdId' de la URL
  const { ProdId } = useParams();
  // Estado local para el producto y para el estado de carga y error
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Efecto para cargar el producto basado en el 'ProdId'
  useEffect(() => {
    const getProductById = async () => {
      try {
        // Encontrar el producto en la lista de productos basado en el 'ProdId'
        const foundProduct = products.find(
          (product) => product.id === parseInt(ProdId)
        );
        if (foundProduct) {
          // Establecer el producto encontrado y resetear el estado de error
          setProduct(foundProduct);
          setError(false);
        } else {
          // Establecer el estado de error si no se encuentra el producto
          setError(true);
        }
      } catch (error) {
        // Capturar y manejar cualquier error ocurrido durante la búsqueda
        setError(true);
      } finally {
        // Establecer el estado de carga como falso después de completar la búsqueda
        setLoading(false);
      }
    };

    getProductById(); // Llamar a la función para obtener el producto por su ID
  }, [ProdId, products]); // Dependencias: ProdId y products (lista de productos)

  // Si la página está cargando, mostrar un mensaje de carga
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Si hay un error, mostrar un mensaje de error y la cabecera y el pie de página
  if (error) {
    return (
      <>
        <NavHeader />
        <main className="min-h-screen">
          <h1>Error: Producto no encontrado</h1>
        </main>
        <Footer />
      </>
    );
  }

  // Renderizar la cabecera, el contenido del producto y el pie de página si todo está bien
  return (
    <>
      <NavHeader />
      <main className="min-h-screen bg-gray-100">
        <div className="max-w-5xl mx-auto p-6">
          {/* Sección de detalles del producto */}
          <div className="grid grid-cols-2 gap-6 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="flex items-center">
              {/* Mostrar la imagen del producto */}
              <img
                src={product.img}
                alt={product.titulo}
                className="w-full h-auto"
              />
            </div>
            <div className="p-6">
              {/* Mostrar el título del producto */}
              <h1 className="text-2xl font-bold mb-2">{product.titulo}</h1>
              {/* Mostrar la categoría del producto */}
              <p className="text-gray-600 mb-2">{product.categoria}</p>
              {/* Mostrar la descripción del producto */}
              <p className="text-gray-700 mb-4">{product.descripcion}</p>
              {/* Mostrar el precio del producto */}
              <strong className="text-2xl text-green-600">
                ${product.precio}
              </strong>
              <br />
              {/* Botón para añadir el producto al carrito */}
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCarProd((preProd) => [...preProd, product])}
              >
                Añadir al carrito
              </button>
              {console.log(carProd)} {/* Log del estado actual del carrito */}
            </div>
          </div>
        </div>
      </main>
      <Footer /> {/* Renderizar el pie de página */}
    </>
  );
}
