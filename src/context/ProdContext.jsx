import { createContext, useContext, useEffect, useState } from "react";
import { products as data } from "../data/products.json"; // Importar los datos de productos desde un archivo JSON
import { useLocalStorage } from "../components/useLocalStorage"; // Importar el hook useLocalStorage para gestionar el localStorage

// Crear el contexto de productos
export const ProdContext = createContext();

// Definir el proveedor de contexto para productos
export function ProdContextProvider(props) {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías

  // Función para contar las categorías y sus productos correspondientes
  const cat = (data) => {
    let catcount = {};
    data.forEach((prod) => {
      if (catcount[prod.categoria]) {
        catcount[prod.categoria] += 1; // Incrementar el contador de productos por categoría
      } else {
        catcount[prod.categoria] = 1; // Inicializar el contador de productos por categoría
      }
    });
    // Crear un array de objetos con las categorías y la cantidad de productos en cada una
    const array = Object.keys(catcount).map((key) => {
      return { categoria: key, count: catcount[key] };
    });

    return array;
  };

  const [carProd, setCarProd] = useLocalStorage("carProd", []); // Utilizar useLocalStorage para gestionar el estado persistente del carrito de compras

  // Cargar los productos y las categorías al iniciar la aplicación
  useEffect(() => {
    setProducts(data); // Establecer los productos desde los datos importados
    setCategories(cat(data)); // Establecer las categorías contando los productos
  }, []);

  // Renderizar el contexto proporcionando los valores necesarios a los componentes hijos
  return (
    <ProdContext.Provider
      value={{ products, categories, setProducts, setCarProd, carProd }}
    >
      {props.children} {/* Renderizar los componentes hijos */}
    </ProdContext.Provider>
  );
}
