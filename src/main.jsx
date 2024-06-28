// Importar React y ReactDOM para renderizar componentes
import React from "react";
import ReactDOM from "react-dom/client";
// Importar el componente principal de la aplicación
import App from "./App.jsx";
// Importar el archivo de estilos globales
import "./index.css";
// Importar funciones para crear y proporcionar el enrutador
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Importar componentes específicos para las rutas
import { ProdDetails } from "./components/ProdContent/ProdDetails.jsx";
import { ProdFiltered } from "./components/ProdFiltered.jsx";
import { ProdContextProvider } from "./context/ProdContext.jsx";
import { ProdsCart } from "./components/Cart/Cart.jsx";
import { BuscarProd } from "./components/buscar.jsx";

// Crear el enrutador con las rutas y sus componentes correspondientes
const router = createBrowserRouter([
  {
    path: "/", // Ruta principal
    element: <App />,
  },
  {
    path: "ProdDetails/:ProdId", // Ruta para detalles del producto con un ID dinámico
    element: <ProdDetails />,
  },
  {
    path: "/:category", // Ruta para productos filtrados por categoría
    element: <ProdFiltered />,
  },
  {
    path: "cart/", // Ruta para el carrito de compras
    element: <ProdsCart />,
  },
  {
    path: "/Buscar/:nombre", // Ruta para buscar productos por nombre
    element: <BuscarProd />,
  },
]);

// Renderizar la aplicación en el elemento con el ID 'root'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Proveedor del contexto de productos */}
    <ProdContextProvider>
      {/* Proveedor del enrutador */}
      <RouterProvider router={router} />
    </ProdContextProvider>
  </React.StrictMode>
);
