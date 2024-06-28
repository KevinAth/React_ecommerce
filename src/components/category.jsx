// Importar el hook useContext y el componente Link de react-router-dom
import { useContext } from "react";
import { ProdContext } from "../context/ProdContext";
import { Link } from "react-router-dom";

// Definir el componente Category
export function Category() {
  // Obtener las categorías y la función setProducts del contexto de productos
  const { categories, setProducts } = useContext(ProdContext);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <h1 className="text-lg font-bold mb-4 py-5 px-3">Categorias</h1>
      {/* Mapear sobre las categorías y renderizar cada una */}
      {categories.map((cat) => (
        <>
          {/* Enlace a la categoría específica */}
          <Link to={`/${cat.categoria}`}>
            <div className="grid grid-cols-2 m-2 hover:bg-slate-100">
              <div className="px-10 m-2">
                <p>{cat.categoria}</p> {/* Mostrar el nombre de la categoría */}
              </div>
              <div className="text-right m-2">
                <p>{cat.count}</p> {/* Mostrar el número de productos en la categoría */}
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
}
