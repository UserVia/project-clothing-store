import { useEffect, useState } from "react";

export const useFetch = (valorSeleccionado) => {
  const [productos, setProductos] = useState([])

  const datos = async () => {
    let url = "https://fakestoreapi.com/products";
    const response = await fetch(url + valorSeleccionado);
    const data = await response.json();
    setProductos(data);
  }
  useEffect(() => {
    datos();
  }, [valorSeleccionado])

  return {
    productos
  }
}
