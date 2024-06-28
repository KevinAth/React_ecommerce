import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  // Definir el estado local y su setter, inicializando con el valor del localStorage o con el valor inicial
  const [valueStorage, setValueStorage] = useState(() => {
    const item = window.localStorage.getItem(key); // Obtener el valor del localStorage por la clave
    return item ? JSON.parse(item) : initialValue; // Parsear el valor JSON o usar el valor inicial si no existe
  });

  // Función para establecer el valor en el localStorage
  const setValue = (value) => {
    try {
      // Permitir el uso de una función para actualizar el estado basado en el estado anterior
      const valueToStore =
        value instanceof Function ? value(valueStorage) : value;
      setValueStorage(valueToStore); // Actualizar el estado local
      window.localStorage.setItem(key, JSON.stringify(valueToStore)); // Guardar el valor en el localStorage como JSON
    } catch (error) {
      console.error("Error setting localStorage value", error); // Manejar errores si ocurren al establecer el valor
    }
  };

  return [valueStorage, setValue]; // Devolver el estado actual y la función para establecer el estado
}
