import { useEffect, useState } from "react";

export const useFetch = (valorSeleccionado) => {
  const [productos, setProductos] = useState([])

  const datos = async () => {
    let url="";
    if(valorSeleccionado=="category/" || valorSeleccionado=="category/All"){
      url=`https://fakestoreapi.com/products/`;
    }else{
      url=`https://fakestoreapi.com/products/${valorSeleccionado}`;
    }
    const response = await fetch(url);
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
