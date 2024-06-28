// Importar componentes necesarios
import { ProdCart } from "./ProdCart";
import { Category } from "./category";
import { Footer } from "./footer/Footer";
import { NavHeader } from "./navheader/NavHeader";

// Definir el componente ProdList
export function ProdList() {
  return (
    <>
      {/* Renderizar el componente de la cabecera */}
      <NavHeader />
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-3">
          {/* Sección de categorías */}
          <div className="p-10 col-span-1">
            <Category />
          </div>
          {/* Sección de productos en el carrito */}
          <div className="grid col-span-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 ">
            <ProdCart />
          </div>
        </div>
      </main>
      {/* Renderizar el componente del pie de página */}
      <Footer />
    </>
  );
}
