// Importar componentes y hooks necesarios
import { NavHeader } from "../navheader/NavHeader";
import { useContext } from "react";
import { ProdContext } from "../../context/ProdContext";

// Definir el componente ProdsCart
export function ProdsCart() {
  // Obtener el estado y funciones del contexto de productos
  const { carProd, setCarProd } = useContext(ProdContext);

  // Función para eliminar un producto del carrito por su ID
  function del(id) {
    const cardel = carProd.filter((n) => n.id !== id); // Filtrar el producto a eliminar
    setCarProd(cardel); // Actualizar el carrito con los productos restantes
  }

  // Función para calcular el total de los productos en el carrito
  function total(prods) {
    let totalprod = 0;
    prods.forEach((prod, index) => {
      totalprod += prod.precio; // Sumar el precio de cada producto al total
    });
    return totalprod.toFixed(2); // Devolver el total con dos decimales
  }

  // Renderizar el contenido del carrito
  return (
    <div>
      <NavHeader /> {/* Renderizar la cabecera */}
      <div className="grid grid-cols-3 p-8">
        <div className="col-span-1 m-1 max-w-md rounded overflow-hidden shadow-lg bg-white">
          {/* Mostrar el total de la compra */}
          <strong className="m-5">Total: ${total(carProd)}</strong>
          <br />
          {/* Botón para eliminar todos los productos del carrito */}
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded m-1"
            onClick={() => setCarProd([])}
          >
            Eliminar Carrito
          </button>
          {/* Botón para realizar la compra (acción simulada con alerta) */}
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-1"
            onClick={() => alert("Realizando Compra...")}
          >
            Realizar compra
          </button>
        </div>
        <div className="m-1 col-span-2">
          {/* Mostrar la lista de productos en el carrito */}
          <div>
            {carProd.map((prod) => (
              <div className="grid grid-cols-4 rounded overflow-hidden shadow-lg bg-white">
                <div className="col-span-1">
                  {/* Mostrar la imagen del producto */}
                  <img src={prod.img} alt="" className="max-h-24" />
                </div>
                <div className="col-span-3">
                  {/* Mostrar el título y precio del producto */}
                  <h1 className="font-bold text-xl mb-2">{prod.titulo}</h1>
                  <p>${prod.precio}</p>
                  {/* Botón para eliminar el producto del carrito */}
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-1 rounded"
                    onClick={() => del(prod.id)}
                  >
                    Eliminar Producto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
